import express from "express";
import cors from "cors";
import fs from "fs";
import PDFDocument from "pdfkit";
import { getAllLinks } from "./1.js";
import { crwaller } from "./2.js";
import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const model = new ChatGroq({
  model: "mixtral-8x7b-32768",
  apiKey: "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",
  temperature: 0,
});

const preprocessData = (data) => {
  return data.map(({ url, analysis }) => ({
    url,
    title: analysis.title || "N/A",
    description: analysis.description || "N/A",
    headings: analysis.headings ? analysis.headings.join(", ") : "N/A",
  }));
};

app.post("/analyze", async (req, res) => {
  try {
    const {websiteUrl} = req.body
    const links = await getAllLinks(websiteUrl);
    const data = await crwaller(links);
    const formattedData = preprocessData(data)
      .map(
        (item) =>
          `URL: ${item.url}\nTitle: ${item.title}\nDescription: ${item.description}\nHeadings: ${item.headings}`
      )
      .join("\n\n");

    const template = `
    You are a Founder of Software Company Algofolks based on IT and Your name is Vishal. Based on the following data, create a professional proposal for the client show proper professional details according to impress the client:
    
    Data:
    ${formattedData}
    
    Proposal Structure:
    1. Introduction
    2. Current State Analysis
    3. Opportunities for Improvement
    4. Proposed Solutions
    5. Implementation Plan
    6. Expected Outcomes
    7. Conclusion
    
    Proposal:
    `;

    const messages = [
      new SystemMessage(template),
      new HumanMessage("Generate the client proposal based on the above data."),
    ];

    const response = await model.invoke(messages);
    const proposalText = response.content;

    // Step 3: Generate PDF
    const pdfPath = "./client_proposal.pdf";
    const doc = new PDFDocument();
    const writeStream = fs.createWriteStream(pdfPath);

    doc.pipe(writeStream);
    doc.fontSize(16).text("Client Proposal", { align: "center" });
    doc.moveDown();
    doc.fontSize(12).text(proposalText);
    doc.end();

    writeStream.on("finish", () => {
      res.download(pdfPath, "client_proposal.pdf", () => {
        fs.unlinkSync(pdfPath); // Delete after download
      });
    });
  } catch (error) {
    console.error("Error generating proposal:", error);
    res.status(500).json({ error: "Failed to generate proposal" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
