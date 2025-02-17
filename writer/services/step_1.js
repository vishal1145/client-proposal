import puppeteer from "puppeteer";

 async function getHtmlFromUrl(url) {
    
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    const content = await page.evaluate(() => document.documentElement.outerHTML);
    const title = await page.evaluate(() => {
        const titleElement = document.querySelector('title');
        return titleElement ? titleElement.textContent.trim() : '';
    });

    const description = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        if (h1) return h1.textContent.trim();
        const h2 = document.querySelector('h2'); 
        return h2 ? h2.textContent.trim() : '';
    });

    const metaDesc = await page.evaluate(() => {
        const metaDescription = document.querySelector('meta[name="description"]');
        return metaDescription ? metaDescription.getAttribute('content').trim() : '';
    });

    const contentDetails = {
        html: content,
        title: title,
        description: description, 
        meta_description: metaDesc
    };
    await browser.close();

    return contentDetails;
}

export default getHtmlFromUrl;
