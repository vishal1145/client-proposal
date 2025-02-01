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


    let response = await getAIResponse(`Here are extracted links from the website: \n\n${validLinks.join(
      "\n"
    )}\n\nIdentify and return the most relevant ones do not include social media, same links and downloaded links return data in array of string in json 
    formate only.`)

    if(process.env.Open_Ai == 1){
      response = JSON.parse(response);
    }else{
      response = JSON.parse(response?.content);
    }

    console.log("response", response)

    return  response;
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await browser.close();
  }
}

export default getLinks;
