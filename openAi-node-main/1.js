import puppeteer from "puppeteer";
import { OpenAI } from "@langchain/openai";
import sslChecker from "ssl-checker"; 
import { URL } from "url"; 

const openai = new OpenAI({
  model: "gpt-4",
  temperature: 0.3,
});

async function isSSLCertificateValid(url) {
  try {
    const parsedUrl = new URL(url); 
    const domain = parsedUrl.hostname;
    const sslInfo = await sslChecker(domain, { method: "GET", timeout: 5000 });
    return sslInfo.valid;
  } catch (error) {
    return false;
  }
}

async function scrapeAndAnalyze(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });

    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("a"))
        .map((a) => a.href)
        .filter((href) => 
          href.startsWith("http") &&
          !href.includes("facebook.com") &&
          !href.includes("twitter.com") &&
          !/\.(pdf|zip|exe|dmg|mp4|mp3|apk)$/i.test(href)
        );
    });

    console.log("Extracted Links:", links);

    const validLinks = [];
    for (const link of links) {
      if (await isSSLCertificateValid(link)) {
        validLinks.push(link);
      }
    }


    if (validLinks.length === 0) {
      console.log("No valid SSL links found.");
      return;
    }

    const response = await openai.invoke(
      `Here are extracted links from the website: \n\n${validLinks.join("\n")}\n\nIdentify and return the most relevant ones donot include social media and downloaded links return data in json formate.`
    );

    console.log("Important Links:", response);

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await browser.close();
  }
}

scrapeAndAnalyze("https://doubtbuddy.com/");
