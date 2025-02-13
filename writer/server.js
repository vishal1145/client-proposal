import express from 'express';
import DBConnect from './config/database.js';
import analysisRouter from './routes/analysis.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Updated CORS configuration
app.use(cors({
    origin: [
        'https://proposal.algofolks.com',
        'https://proposal.algofolks.com/api',
        'https://proposal.algofolks.com/',
        'https://proposal.algofolks.com/api/',
        'http://localhost:3000'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Initialize connections before starting server
async function initializeConnections() {
    try {
        await DBConnect();
        console.log('Database connection established');
    } catch (error) {
        console.error('Failed to initialize connections:', error);
        process.exit(1);
    }
}

// Routes
app.use('/analysis', analysisRouter);

// Start server after initializing connections
initializeConnections().then(() => {
    app.listen(9000, () => {
        console.log('Server connected on port 9000');
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
