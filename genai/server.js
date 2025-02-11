import express from 'express';
import { startProcess } from './start.js';
import { openAiConnect } from './llm.js';
import { DBConnect } from './config/database.js';

const app = express();

// Initialize connections before starting server
async function initializeConnections() {
    try {
        await openAiConnect();
        await DBConnect();
        console.log('AI and Database connections established');
    } catch (error) {
        console.error('Failed to initialize connections:', error);
        process.exit(1);
    }
}

app.get('/generate-proposal', async(req, res)=>{
    const result = await startProcess();
    res.send({result:result});
})

// Start server after initializing connections
initializeConnections().then(() => {
    app.listen(4000, ()=>{
        console.log('Server connected on port 4000');
    });
}).catch(err => {
    console.error('Server failed to start:', err);
});



// app.get('/generate_proposal1', async (req, res) => {
//     try {
//         const { url } = req.query;
//         if (!url) return res.status(400).json({ error: "Website URL is required" });

//         console.log(`Scraping website: ${url}...`);
//         const scrapedData = await scrapeWebsite(url);

//         console.log("Analyzing business insights...");
//         const combinedText = scrapedData.map(data => data.text).join("\n\n");
//         const aiAnalysis = await analyzeBusiness(combinedText);

//         console.log("Generating proposal...");
//         const pdfFile = await generateProposalPDF(url, aiAnalysis);

//         res.download(pdfFile);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Something went wrong!" });
//     }
// });
