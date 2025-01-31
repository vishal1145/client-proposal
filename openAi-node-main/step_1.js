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


// import * as cheerio from 'cheerio';
// import getAllhtml from "./3.js";

// const allHtml = await getAllhtml();
// const $ = cheerio.load(allHtml);

// $('style, script, noscript').remove();

// const extractedText = $('body')
//   .find('*')  
//   .contents()   
//   .filter(function () {
//     return this.type === 'text';   
//   })
//   .text()   
//   .trim();  
 
//   const data = extractedText.substring(0, 40);
//   console.log(data);