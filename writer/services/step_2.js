import dotenv from "dotenv";
dotenv.config();
import { getNatureResponse } from "../config/llm.js";
import * as cheerio from "cheerio";

let prompt = `
Analyze the following HTML content and extract the nature of business or services provided.
Return ONLY a JSON array of services. Do NOT include any explanations, headers, or extra text.

HTML Content:
{text}

Response format:
["Service 1", "Service 2", "Service 3"]
`;

const getNatureOfBusiness = async (html) => {
  let response = await getNatureResponse(html);

  return response;
};

export { getNatureOfBusiness };
