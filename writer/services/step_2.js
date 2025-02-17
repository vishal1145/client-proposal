import dotenv from "dotenv";
dotenv.config();
import { getNatureResponse } from "../config/llm.js";
import * as cheerio from "cheerio";

let prompt = `
Analyze the following HTML content and extract the nature of business or services provided.

- Return ONLY a JSON array of services.
- Do NOT include any explanations, headers, or extra text.
- If no services are found, return an empty JSON array [].
- The response must be a valid JSON array of strings.

HTML Content:
{text}

Response format (strictly JSON):
["Service 1", "Service 2", "Service 3"]
`;

const getNatureOfBusiness = async (link) => {
  try {
    const validLinks = await getNatureResponse(link);
    return validLinks;
  } catch (error) {
    console.error("Error in getNatureOfBusiness:", error);
    return [];
  }
};
 
export { getNatureOfBusiness };
