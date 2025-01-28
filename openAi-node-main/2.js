const puppeteer = require('puppeteer');

async function analyzePage(url) {
  const browser = await puppeteer.launch({
    args: ['--ignore-certificate-errors', '--disable-web-security'],
    headless: true
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const pageAnalysis = await page.evaluate(() => {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.content || '';
    const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map(h => h.innerText);

    return {
      title,
      description,
      headings
    };
  });

  await browser.close();
  return pageAnalysis;
}

async function crwaller(links) {
  const analyses = await Promise.all(
    links.map(async (link) => {
      try {
        const analysis = await analyzePage(link);
        return { url: link, analysis };  
      } catch (error) {
        console.error(`Error analyzing ${link}:`, error);
        return null;  
      }
    })
  );

  return analyses.filter(analysis => analysis !== null);
}

module.exports = { crwaller };
