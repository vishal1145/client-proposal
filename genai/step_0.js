import dotenv from "dotenv"; 
import puppeteer from "puppeteer";
import sslChecker from "ssl-checker";
import { URL } from "url";
import  {getAIResponse} from "./llm.js";
dotenv.config();


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

async function getLinks(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });

    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("a"))
        .map((a) => a.href)
        .filter(
          (href) =>
            href.startsWith("http") &&
            !href.includes("facebook.com") &&
            !href.includes("twitter.com") &&
            !/\.(pdf|zip|exe|dmg|mp4|mp3|apk)$/i.test(href)
        );
    });

    const validLinks = [];
    for (const link of links) {
      if (await isSSLCertificateValid(link)) {
        validLinks.push(link);
      }
    }

    if (validLinks.length === 0) {
      console.log("No valid SSL links found.");
      return [];
    }

    let response = await getAIResponse(`Here are the extracted links from the website:\n\n${validLinks.join("\n")}

    Please identify and return only the most relevant links. Exclude the following:
    - Social media links  
    - Contact pages  
    - Payment and payment-related links  
    - Duplicate links  
    - Downloaded files or links  
    
    Return the result strictly in JSON format as an array of objects. Each object should contain only the "title" and "url" fields. Do not include any additional text or explanation.`);  
    
 
    if(process.env.Open_Ai == 1){
      response = JSON.parse(response);
    }else{
      response = JSON.parse(response?.content);
    }


    return  response;
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await browser.close();
  }
}

export default getLinks;
