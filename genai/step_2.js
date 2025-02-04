import dotenv from "dotenv";
dotenv.config();
import { getNatureResponse } from "./llm.js";
import * as cheerio from "cheerio";

let prompt = `
Analyze the following HTML content and extract the nature of business or services provided.
Return ONLY a JSON array of services. Do NOT include any explanations, headers, or extra text.

HTML Content:
{text}

Response format:
["Service 1", "Service 2", "Service 3"]
`;

const splitTextIntoChunks = (text, chunkSize = 4000) => {
  const words = text.split(" ");
  let chunks = [];
  let currentChunk = [];

  words.forEach((word) => {
    if (currentChunk.join(" ").length + word.length < chunkSize) {
      currentChunk.push(word);
    } else {
      chunks.push(currentChunk.join(" "));
      currentChunk = [word];
    }
  });

  if (currentChunk.length > 0) {
    chunks.push(currentChunk.join(" "));
  }

  return chunks;
};

const extractJsonFromResponse = (responseText) => {
  try {
    return JSON.parse(responseText);
  } catch (error) {
    console.warn("Invalid JSON response, attempting to extract JSON...");
    const match = responseText.match(/\[.*?\]/s);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch (err) {
        console.error("Failed to extract valid JSON:", err);
      }
    }
    return [];
  }
};

const getNatureOfBusiness = async (html) => {
  const $ = cheerio.load(html);
  const newHtml = $("body").text().replace(/\s+/g, " ").trim();
  const chunks = splitTextIntoChunks(newHtml);

  let responses = [];
  for (const chunk of chunks) {
    let response = await getNatureResponse(chunk, prompt);

    if (process.env.Open_Ai == 1) {
      response = extractJsonFromResponse(response);
    } else {
      response = extractJsonFromResponse(response?.content);
    }

    responses.push(...response);
  }

  return responses;
};

export { getNatureOfBusiness };
