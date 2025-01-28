const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
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

async function crwaller(url) {
  const links = await crawlHomePage(url);

  const analyses = await Promise.all(
    links.map(async (link) => {
      const analysis = await analyzePage(link);
      return analysis;  
    })
  );

  const validAnalyses = analyses.filter(analysis => analysis !== null);
  console.log("Valid analyses:", validAnalyses);
}

async function fn(url) {
        const links = await crawlHomePage(url);
        console.log("links", links);
}

app.post("/analyze", async (req, res) => {
  const { websiteUrl } = req.body;

  if (!websiteUrl || websiteUrl.trim() === "") {
    return res.status(400).json({ error: "Website URL is required." });
  }

  try {
    fn(websiteUrl);
    crwaller(websiteUrl);
  } catch (error) {
    console.log(error);
  }

})

app.listen(3001, () => {
  console.log("App is working on http://localhost:3001");
});
