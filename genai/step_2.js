import { getNatureResponse } from "./llm.js";

let prompt = `
Analyze the following HTML content and extract the nature of business or services provided.
Return the response as a JSON array of services.

HTML Content:
{text}

Response format:
["Service 1", "Service 2", "Service 3"]
`
const getNatureOfBusiness = async (html) => {
  let response = await getNatureResponse(html, prompt);
  console.log("response", response);
}

export {getNatureOfBusiness};