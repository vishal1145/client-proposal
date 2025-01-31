import puppeteer from "puppeteer";

 async function scrapeWebsite(url) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    const content = await page.evaluate(() => document.documentElement.outerHTML);
    
    await browser.close();

    return content;
}

export default scrapeWebsite;
