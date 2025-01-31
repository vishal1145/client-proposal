import getAllhtml from "./3.js";
import { OpenAI } from "@langchain/openai";

const openai = new OpenAI({
});

async function getBusinessProposal(allHtml) {
  const prompt = `
    Given the HTML content of a website, provide a detailed business proposal with recommendations on how to improve the website and business strategy. Focus on:
    - Improving user experience
    - Increasing sales and conversions
    - Enhancing marketing strategies
    - Providing suggestions for website content and structure improvements
    Please analyze the content and provide detailed, actionable recommendations.
    HTML Content:
    ${allHtml}
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",   
      messages: [{ role: "user", content: prompt }],
    });
   
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error generating business proposal:", error);
    return null;
  }
}

(async () => {
  let allHtml = await getAllhtml();   
  const proposal = await getBusinessProposal(allHtml);
  console.log("Business Proposal:", proposal);
})();



