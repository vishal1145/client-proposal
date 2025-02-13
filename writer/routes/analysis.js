import express from 'express';
import { startProcess } from '../services/start.js';
import Analysis from '../model/analysis.js';
import { getProposalSections, getClientProposal } from '../config/llm.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let { url } = req.body;


        if (!url) {
            return res.status(400).json({ 
                success: false, 
                error: "URL is required in request body" 
            });
        }

        if(url.endsWith("/")) {
            url = url.slice(0, -1);
        }
      
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

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!id) {
            return res.status(400).json({
                success: false,
                error: "Analysis ID is required"
            });
        }

        const updatedAnalysis = await Analysis.findByIdAndUpdate(
            id,
            updateData,
            { new: true } // Returns the updated document
        );

        if (!updatedAnalysis) {
            return res.status(404).json({
                success: false,
                error: "Analysis not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedAnalysis
        });
    } catch (error) {
        console.error('Error updating analysis:', error);
        res.status(500).json({
            success: false,
            error: "Failed to update analysis"
        });
    }
});

router.get('/', async (req, res) => {
    try {
        console.log('get analysis');
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ 
                success: false, 
                error: "id is required as query parameter" 
            });
        }

        const analysis = await Analysis.findById(id);

        if (!analysis) {
            return res.status(404).json({ 
                success: false, 
                error: "No analysis found for this ID" 
            });
        }

        res.status(200).json({
            success: true,
            analysis
        });
    } catch (error) {
        console.error('Error fetching analysis:', error);
        res.status(500).json({ 
            success: false, 
            error: "Failed to fetch analysis" 
        });
    }
});

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

router.get('/all', async (req, res) => {
    try {
        const analyses = await Analysis.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            data: analyses
        });
    } catch (error) {
        console.error('Error fetching all analyses:', error);
        res.status(500).json({ 
            success: false, 
            error: "Failed to fetch analyses" 
        });
    }
});

export default router;