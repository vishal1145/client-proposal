import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import puppeteer from "puppeteer";
import PDFDocument from "pdfkit";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const model = new ChatGroq({
  model: "mixtral-8x7b-32768",
  temperature: 0,
  apiKey: "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",
});

const systemTemplate = ``;

const promptTemplate = ChatPromptTemplate.fromMessages([
  { role: "system", content: systemTemplate },
  { role: "user", content: "Analyze the following website content and generate a concise business and marketing proposal: {websiteContent}" },
]);

const scrapeWebsiteContent = async (url, maxLinks = 5) => {
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const links = await page.evaluate((maxLinks) =>
      Array.from(document.querySelectorAll("a[href]"), (a) => a.href).slice(0, maxLinks),
      maxLinks
    );

    const websiteContent = await page.evaluate(() => document.body.innerText);
    return { websiteContent, links };
  } catch (error) {
    throw new Error(`Failed to scrape website content: ${error.message}`);
  } finally {
    if (browser) await browser.close();
  }
};

const scrapeAndAnalyzeLinks = async (links) => {
  const analyses = [];
  for (const link of links) {
    try {
      const { websiteContent } = await scrapeWebsiteContent(link, 0);
      analyses.push({ link, content: websiteContent.slice(0, 1000) });
    } catch (error) {
      console.warn(`Failed to scrape link: ${link}, error: ${error.message}`);
    }
  }
  return analyses;
};

const generatePDF = async (analysis) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const chunks = [];

      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", (error) => reject(new Error(`PDF generation failed: ${error.message}`)));

      doc.fontSize(16).text("Website Analysis Report", { align: "center" });
      doc.moveDown();
      doc.fontSize(12).text(analysis, { align: "left", lineGap: 4 });
      doc.end();
    } catch (error) {
      reject(new Error(`PDF generation failed: ${error.message}`));
    }
  });
};

app.post("/analyze", async (req, res) => {
  const { websiteUrl } = req.body;

  if (!websiteUrl || websiteUrl.trim() === "") {
    return res.status(400).json({ error: "Website URL is required." });
  }

  try {
    const { websiteContent, links } = await scrapeWebsiteContent(websiteUrl, 5);
    const subPageAnalyses = await scrapeAndAnalyzeLinks(links);

    const promptValue = await promptTemplate.invoke({
      websiteContent: websiteContent.slice(0, 3000),
    });

    const analysisResponse = await model.invoke(promptValue);
    const analysis = analysisResponse?.content;

    if (!analysis) {
      throw new Error("AI analysis failed or returned empty content.");
    }

    const summarizedSubPages = subPageAnalyses
      .map((sub) => `Page: ${sub.link}\nContent: ${sub.content.slice(0, 1000)}`)
      .join("\n\n");

    const fullAnalysis = `${analysis}\n\n${summarizedSubPages}`;

    const pdfBuffer = await generatePDF(fullAnalysis);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=analysis_report.pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error processing the website:", error.message);
    res.status(500).json({ error: `Unable to analyze the website: ${error.message}` });
  }
});

app.listen(3001, () => {
  console.log("App is working on http://localhost:3001");
});
