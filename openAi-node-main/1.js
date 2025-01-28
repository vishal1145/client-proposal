const puppeteer = require('puppeteer');

async function getAllLinks(url) {
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

module.exports = { getAllLinks }; 
