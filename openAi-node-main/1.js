import puppeteer from 'puppeteer';

export const getAllLinks = async (url) => {
  const browser = await puppeteer.launch({
    args: ['--ignore-certificate-errors', '--disable-web-security', '--no-sandbox'],
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a'))
      .map(tag => tag.href)
      .filter(href => href);
  });

  await browser.close();
  return links;
};
