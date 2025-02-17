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
    const html = await page.content();
    const validLinks = await extractLinksFromHomePage(html);
    return validLinks;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  } finally {
    await browser.close();
  }
}

export default getLinks;
