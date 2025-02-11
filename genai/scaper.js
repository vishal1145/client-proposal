// const { chromium } = require('playwright');
// const cheerio = require('cheerio');
// const axios = require('axios');

// async function fetchWebsiteLinks(url) {
//     const browser = await chromium.launch({ headless: true });
//     const page = await browser.newPage();
//     await page.goto(url, { timeout: 60000 });

//     // Extract all links
//     const links = await page.evaluate(() => {
//         return Array.from(document.querySelectorAll('a'))
//             .map(a => a.href)
//             .filter(href => href.startsWith(window.location.origin));
//     });

//     await browser.close();

//     // Keep only unique and important links
//     const importantKeywords = ["about", "service", "contact", "blog", "pricing"];
//     const filteredLinks = [...new Set(links)].filter(link => 
//         importantKeywords.some(keyword => link.toLowerCase().includes(keyword))
//     );

//     return [url, ...filteredLinks]; // Include homepage
// }

// async function scrapeContent(url) {
//     try {
//         const { data } = await axios.get(url);
//         const $ = cheerio.load(data);
        
//         // Extract headings and paragraphs
//         const text = $('h1, h2, h3, p').map((i, el) => $(el).text()).get().join('\n');
//         return { url, text };
//     } catch (error) {
//         console.error(`Error scraping ${url}:`, error.message);
//         return { url, text: "" };
//     }
// }

// async function scrapeWebsite(url) {
//     const links = await fetchWebsiteLinks(url);
//     const scrapedData = await Promise.all(links.map(scrapeContent));
//     return scrapedData;
// }

// module.exports = { scrapeWebsite };
