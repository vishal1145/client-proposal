import dotenv from "dotenv"; 
import puppeteer from "puppeteer";
import sslChecker from "ssl-checker";
import { URL } from "url";
import { extractLinksFromHomePage } from "../config/llm.js";
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

    let validLinks = [];
    for (const link of links) {
      if (await isSSLCertificateValid(link)) {
        validLinks.push(link);
      }
    }

    if (validLinks.length === 0) {
      console.log("No valid SSL links found.");
      return [];
    }

    const prompt = `Here are the extracted links from the website:\n\n${validLinks.join("\n")}

    Analyze these links and return only the most relevant ones that provide valuable content about the website's main purpose. 

    Strict exclusion criteria:
    - Social media profiles or sharing links
    - Contact/support/help pages
    - Payment gateways or checkout pages
    - Duplicate URLs with different parameters
    - File downloads (PDFs, documents, media)
    - Login/signup pages
    - Legal pages (privacy policy, terms of service)
    - External advertisement links
    - play store links
    - app store links

    Return the result as a JSON array of strings.`;

    validLinks = await extractLinksFromHomePage(prompt);
    return validLinks;
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await browser.close();
  }
}

export default getLinks;
