import dotenv from "dotenv"; 
import puppeteer from "puppeteer";
import https from "https";
import { extractLinksFromHomePage } from "../config/llm.js";
dotenv.config();

/**
 * Checks if a URL has a valid SSL certificate by making an HTTPS request.
 * @param {string} url - The URL to check.
 * @returns {Promise<boolean>} - Returns true if SSL is valid, otherwise false.
 */
async function isSSLCertificateValid(url) {
  return new Promise((resolve) => {
    try {
      const request = https.get(url, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve(true);
        } else {
          resolve(false);
        }
      });

      request.on("error", (err) => {
        +  console.error(`SSL Error for ${url}:`, err.message);
        resolve(false);
      });

      request.end();
    } catch (error) {
      console.error(`Error checking SSL for ${url}:`, error.message);
      resolve(false);
    }
  });
}

/**
 * Extracts only 100% SSL-verified links from a webpage.
 * @param {string} url - The webpage URL to scrape links from.
 * @returns {Promise<{ link: string, title: string }[]>} - Returns an array of SSL verified links with titles.
 */
async function getLinks(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    const html = await page.content();
    const allLinks = await extractLinksFromHomePage(html);

    // Verify SSL for each link
    const validLinks = [];
    for (const { link, title } of allLinks) {
      if (link.startsWith("https://") && (await isSSLCertificateValid(link))) {
        validLinks.push({ link, title });
      } else {
        console.log(`Filtered out (SSL invalid): ${link}`);
      }
    }

    console.log("100% SSL Verified Links:", validLinks);
    return validLinks;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  } finally {
    await browser.close();
  }
}

export default getLinks;
