import express from 'express';
import { startProcess } from '../start.js';
import Analysis from '../model/analysis.js';

const router = express.Router();

// POST /api/analysis - Create new analysis for a URL
router.post('/', async (req, res) => {
    try {
        const { url } = req.body;
        
        if (!url) {
            return res.status(400).json({ 
                success: false, 
                error: "URL is required in request body" 
            });
        }

        // Start the analysis process
        await startProcess(url);

        res.status(200).json({
            success: true,
            message: "Analysis started successfully"
        });
    } catch (error) {
        console.error('Error in analysis:', error);
        res.status(500).json({ 
            success: false, 
            error: "Failed to process analysis" 
        });
    }
});

// GET /api/analysis - Get analysis by URL
router.get('/', async (req, res) => {
    try {
        const { url } = req.query;

        if (!url) {
            return res.status(400).json({ 
                success: false, 
                error: "URL is required as query parameter" 
            });
        }

        const analysis = await Analysis.findOne({ url }).sort({ createdAt: -1 });

        if (!analysis) {
            return res.status(404).json({ 
                success: false, 
                error: "No analysis found for this URL" 
            });
        }

        res.status(200).json({
            success: true,
            data: analysis
        });
    } catch (error) {
        console.error('Error fetching analysis:', error);
        res.status(500).json({ 
            success: false, 
            error: "Failed to fetch analysis" 
        });
    }
});

export default router; 