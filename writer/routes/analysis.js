import express from 'express';
import { startProcess } from '../services/start.js';
import Analysis from '../model/analysis.js';
import { getProposalSections, getClientProposal } from '../config/llm.js';

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

// POST /api/analysis/proposal - Generate proposal section from links
router.post('/proposal-section', async (req, res) => {
    try {
        const { links } = req.body;

        if (!links || !Array.isArray(links) || links.length === 0) {
            return res.status(400).json({
                success: false,
                error: "Array of links is required in request body"
            });
        }

        // TODO: Add proposal generation service logic here
        // const proposal = await generateProposal(links);
        var sections = await getProposalSections(links);


        res.status(200).json({
            success: true,
            message: "Proposal generation endpoint ready",
            data: sections
        });

    } catch (error) {
        console.error('Error generating proposal:', error);
        res.status(500).json({
            success: false,
            error: "Failed to generate proposal"
        });
    }
});

// POST /api/analysis/generate-proposal - Generate full proposal from sections
router.post('/generate-proposal', async (req, res) => {
    try {
        const { sections } = req.body;

        if (!sections || !Array.isArray(sections) || sections.length === 0) {
            return res.status(400).json({
                success: false,
                error: "Array of proposal sections is required in request body"
            });
        }

        // Format sections into a single string for processing
        const formattedSections = sections.map(section => 
            `${section.section}:\n${section.content}`
        ).join('\n\n');

        // Generate proposal using the service
        const proposal = await getClientProposal(formattedSections);

        res.status(200).json({
            success: true,
            data: proposal
        });

    } catch (error) {
        console.error('Error generating full proposal:', error);
        res.status(500).json({
            success: false,
            error: "Failed to generate full proposal"
        });
    }
});


export default router;