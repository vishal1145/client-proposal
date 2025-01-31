import axios from "axios";
import * as cheerio from "cheerio";
import { OpenAI } from "@langchain/openai";


const llm = new OpenAI({
  model: "gpt-4",
  temperature: 0.3,
});

async function scrapeAndAnalyze(url) {
  try {
    const { data } = await axios.get(url, { timeout: 10000 });

    const $ = cheerio.load(data);
    
    const links = [];
    const content = [];

    $("a").each((_, el) => {
      const href = $(el).attr("href");
      if (href && href.startsWith("http")) links.push(href);
    });

    $("p, h1, h2, h3").each((_, el) => {
      content.push($(el).text().trim());
    });

    const textContent = content.join("\n").slice(0, 3000);  

    const analysis = await llm.invoke(
      `Summarize the key insights from this web page:\n\n${textContent}`
    );

    console.log("🔗 Important Links:", links.slice(0, 5));
    console.log("📄 Summary:", analysis);
  } catch (error) {
    console.error("Error scraping the website:", error.message);
  }
}

scrapeAndAnalyze("https://example.com");