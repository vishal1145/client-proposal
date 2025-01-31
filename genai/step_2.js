import { getNatureResponse } from "./llm.js";
import * as cheerio from "cheerio";

let prompt = `
Analyze the following HTML content and extract the nature of business or services provided.
Return the response as a JSON array of services.

HTML Content:
{text}

Response format:
["Service 1", "Service 2", "Service 3"]
`
const getNatureOfBusiness = async (html) => {
  const $ = cheerio.load(html);
  const newHtml = $("body").text().replace(/\s+/g, " ").trim(); 
  let response = await getNatureResponse(newHtml, prompt);
  return response;
}

export {getNatureOfBusiness};