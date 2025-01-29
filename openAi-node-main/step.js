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
    console.log("data", data)
    const title = data[0]?.analysis?.title;
    const formattedData = preprocessData(data)
      .map(
        (item) =>
          `URL: ${item.url}\nTitle: ${item.title}\nDescription: ${item.description}\nHeadings: ${item.headings}`
      )
      .join("\n\n");

    const template = `
    You are the founder of a software company called **Algofolks**.

The proposal should be well-organized, in-depth, and should aim to impress the client. Based on the provided data, please generate a proposal with the following structure. Avoid referencing "Page 1" or "Page 2"; instead, focus on delivering clean, seamless content. Your writing should be clear, professional, and focused on providing actionable insights for the client.

**Data to use in the proposal:**  
${formattedData}

### Proposal Structure:

1. **Introduction**:
   - Briefly introduce Algofolks and its expertise in the IT industry.
   - Provide an overview of the purpose of the proposal.
   - Set the tone for a client-centric approach, emphasizing how Algofolks can help ${title} thrive.

2. **Current State Analysis**:
   - Carefully analyze the provided data.
   - Identify the current challenges or pain points of ${title}.
   - Summarize these findings in a professional manner, showing a clear understanding of the client's needs.

3. **Opportunities for Improvement**:
   - Based on the current state analysis, outline areas where improvements can be made.
   - Suggest practical opportunities for ${title} to enhance its platform, whether through technology, process improvements, or strategic changes.

4. **Proposed Solutions**:
   - Offer customized solutions to address the challenges and opportunities identified earlier.
   - Break down each solution into clear, actionable steps, highlighting how Algofolks can support implementation.

5. **Implementation Plan**:
   - Create a step-by-step plan detailing how the proposed solutions will be put into action.
   - Discuss the resources, timelines, and stages involved in the implementation process.

6. **Expected Outcomes**:
   - Describe the expected results from implementing the proposed solutions.
   - Focus on both the short-term and long-term benefits for ${title}, and how it will improve overall efficiency and effectiveness.

7. **Conclusion**:
   - Summarize the key points of the proposal.
   - Reaffirm Algofolks’ ability to deliver high-quality, impactful solutions.
   - Close with a professional call to action, inviting the client to proceed with the proposal.

---

This prompt emphasizes professionalism, clarity, and actionable insights while ensuring there’s no mention of page numbers. The content will focus solely on delivering the right message to the client in a structured, easy-to-follow format.
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
