import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import puppeteer from "puppeteer"; 
import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import  PDFDocument from "pdfkit";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const model = new ChatGroq({
  model: "mixtral-8x7b-32768",
  temperature: 0.7,
  apiKey: "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"
});

const systemTemplate = `
You are a business and marketing strategy expert. I want to send a proposal to a client on how to improve their business. Analyze the following website's content and provide key points to improve the business and marketing strategies. Focus on:
- Brand positioning and visibility.
- Marketing strategies.
`;

const promptTemplate = ChatPromptTemplate.fromMessages([
  { role: "system", content: systemTemplate },
  { role: "user", content: "Analyze the following website content: {websiteContent}" },
]);

const scrapeWebsiteContent = async (url) => {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const websiteContent = await page.evaluate(() => document.body.innerText);
    return websiteContent;
  } catch (error) {
    throw new Error(`Failed to scrape website content: ${error.message}`);
  } finally {
    if (browser) await browser.close();
  }
};

const generatePDF = async (analysis) => {
  console.log("make pdf");
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
    const websiteContent = await scrapeWebsiteContent(websiteUrl);

    const promptValue = await promptTemplate.invoke({
      websiteContent,
    });

    const analysisResponse = await model.invoke(promptValue);
    const analysis = analysisResponse?.content;

    if (!analysis) {
      throw new Error("AI analysis failed or returned empty content.");
    }

    const pdfBuffer = await generatePDF(analysis);

    console.log("make pdf");


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


