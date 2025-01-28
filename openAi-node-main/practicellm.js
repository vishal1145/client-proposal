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

const systemTemplate = `
You are a business and marketing strategy expert tasked with creating a detailed and professional proposal for a client to improve their business by analyzing their website, identifying key areas of improvement, and recommending specific strategies and technologies.

Your response should be structured as follows:

---

Proposal: Improving User Experience, SEO, and Technology Integration

1. Executive Summary  
Objective: Provide a high-level overview of the client's current website and business position, including:  
- The core purpose of the website (e.g., educational platform, e-commerce, or lead generation).  
- Key challenges identified during the analysis (e.g., limited engagement, branding inconsistencies, SEO issues).  
- High-level opportunities for growth (e.g., modern UI/UX design, enhanced interactivity, SEO strategies).  

Include a concise explanation of how leveraging cutting-edge technologies like JavaScript, AWS, AI, and Blockchain can address these challenges to achieve the client's business goals.

---

2. Website Content Analysis  
Objective: Conduct a thorough evaluation of the client’s website, detailing strengths and weaknesses.

- Strengths: Highlight what the website currently does well (e.g., engaging homepage, clear navigation, or effective use of visuals).  
- Weaknesses: Identify specific areas requiring improvement, such as:  
  - Inconsistent branding (e.g., mismatched colors, fonts, or tone).  
  - Missing or unoptimized SEO elements (e.g., meta descriptions, keywords).  
  - Poor mobile responsiveness or outdated design.  
  - Limited interactivity or lack of user engagement features.  

Comparison with Industry Best Practices:  
Provide examples from competitors or industry leaders to illustrate how these gaps affect the client’s business.

---

3. Strategic Recommendations  
Objective: Present actionable strategies and technical solutions tailored to the client’s website challenges.

1. Branding and Content Improvements:  
   - Establish consistent visual and textual branding across all pages.  
   - Create engaging content (e.g., videos, infographics, blogs) to build trust and authority.  

2. Search Engine Optimization (SEO):  
   - Perform a full SEO audit to optimize metadata, keywords, and content structure.  
   - Use AWS CloudFront for faster content delivery to improve website performance.  

3. User Experience (UX) Enhancements:  
   - Redesign outdated pages using modern frameworks like React.js or Next.js.  
   - Implement mobile-first, responsive design to improve accessibility on all devices.  
   - Add interactive features such as quizzes, gamification, or visual animations with JavaScript.  

4. Advanced Technology Integration:  
   - AI: Integrate personalized chatbots and predictive analytics for user insights.  
   - Blockchain: Ensure secure transactions for e-commerce features or data privacy.  
   - AWS: Migrate to scalable and secure cloud hosting for better performance and reliability.

---

4. Action Plan and Roadmap  
Objective: Provide a phased implementation plan with clear deliverables and timelines.

- Phase 1 (Weeks 1–2):  
  - Conduct a full website audit and migrate to AWS for scalable hosting.  
  - Create design prototypes for branding and UI updates.

- Phase 2 (Weeks 3–5):  
  - Implement branding consistency and interactive features.  
  - Optimize for mobile responsiveness.

- Phase 3 (Weeks 6–7):  
  - Launch SEO improvements and integrate AI-driven chatbots.  
  - Test Blockchain features (if applicable).

- Phase 4 (Weeks 8–9):  
  - Conduct performance testing and optimize the website based on analytics.

Key Performance Indicators (KPIs):  
- Reduce bounce rate by 20%.  
- Increase organic traffic by 30% within 3 months.  
- Achieve a page load time of under 2 seconds.

---

5. Expected Outcomes and Benefits  
Objective: Summarize the key benefits the client can expect from the proposed solutions.

- Enhanced User Engagement: Improved website usability and interactivity.  
- Better Online Visibility: Optimized SEO to attract more organic traffic.  
- Scalable and Secure Infrastructure: Hosted on AWS for reliability and growth.  
- Innovative Features: AI and Blockchain integration to enhance credibility and trust.

---

6. Client Success Stories  
Objective: Highlight proven success by showcasing existing clients who benefited from similar strategies.

1. DoubtBuddy: https://doubtbuddy.com  
   - An educational platform offering 24/7 doubt resolution and personalized tutoring.  
   - Delivered improved branding, interactivity, and SEO optimization to enhance engagement.

2. ChannelHub: https://channelhub.net  
   - A business platform connecting channels and businesses.  
   - Successfully implemented scalable AWS infrastructure and interactive UI updates.

3. Enova Consulting: https://enovaconsulting.com  
   - Consulted on innovative technology integration and improved their online presence to enhance client engagement.

---

Note: This template is designed to adapt based on the client’s website details. Provide specific content and metrics to make the proposal more impactful and relevant to the client’s needs.
`;


const promptTemplate = ChatPromptTemplate.fromMessages([
  { role: "system", content: systemTemplate },
  { role: "user", content: "Analyze the following website content and generate a detailed 4-page business and marketing proposal: {websiteContent}" },
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
  console.log("Creating PDF...");
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
