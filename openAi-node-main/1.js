const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
 
const app = express();
app.use(cors());
app.use(bodyParser.json());


  

async function crawlHomePage(url) {
  const browser = await puppeteer.launch({
    args: ['--ignore-certificate-errors', '--disable-web-security', '--no-sandbox'],
    headless: true
  });
  
  
  const page = await browser.newPage();
  await page.goto(url);

  const links = await page.evaluate(() => {
    const anchorTags = Array.from(document.querySelectorAll('a'));
    return anchorTags.map(tag => tag.href).filter(href => href);
  });

  await browser.close();
  return links;
}

async function analyzePage(url) {
  const browser = await puppeteer.launch({
    args: ['--ignore-certificate-errors', '--disable-web-security'],
    headless: true
  });
  
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const pageAnalysis = await page.evaluate((url) => {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.content || '';
    const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map(h => h.innerText);

    return {
      url,
      title,
      description,
      headings
    };
  }, url);  // Pass the `url` into the page.evaluate context

  await browser.close();
  return pageAnalysis;
}

async function crwaller() {
  const url = "https://doubtbuddy.com/";
  const links = await crawlHomePage(url);

  const analyses = await Promise.all(
    links.map(async (link) => {
      const analysis = await analyzePage(link);
      return analysis; // Only return valid analysis
    })
  );

  // Filter out null results (pages that failed)
  const validAnalyses = analyses.filter(analysis => analysis !== null);
  console.log("Valid analyses:", validAnalyses);
}


async function fn() {
        const links = await crawlHomePage("https://doubtbuddy.com/");
        console.log("links", links);
}


fn();
crwaller();

 