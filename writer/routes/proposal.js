import express from 'express';
import Proposal from '../models/proposal.js';
import Analysis from '../models/analysis.js';
import { generateBusinessProposal } from '../config/llm.js';

const router = express.Router();

// Create a new proposal
router.post('/generate-proposal', async (req, res) => {
    try {
        const { analysisId } = req.body;

        const analysis = await Analysis.findById(analysisId);

        if(!analysis) {
            return res.status(404).json({
                success: false,
                message: "Analysis not found"
            });
        }

        let links = analysis.links;
        links = links.map(link => link.url);
        links = links.join(", ");
        let services = analysis.allServices;
        services = services.join(", ");

        const proposal = await generateBusinessProposal(links, services);

      res.status(200).json({
        success: true,
        data: analysis
      });   

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating proposal",
            error: error.message
        });
    }
});

// Get proposal by analysis ID
router.get('/generate-proposal/:analysisId', async (req, res) => {
    try {
        const { analysisId } = req.params;
        
        const proposal = await Proposal.findOne({ analysisId });
        
        console.log('line 43 proposal', proposal);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found"
            });
        }

        res.status(200).json({
            success: true,
            data: proposal
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error finding proposal",
            error: error.message
        });
    }
});

export default router;
