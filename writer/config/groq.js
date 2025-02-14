import { ChatGroq } from "@langchain/groq";
import { PromptTemplate } from "@langchain/core/prompts";

let groqInstance = null;

export function initialize(apiKey) {
    if (!groqInstance) {
        groqInstance = new ChatGroq({
            model: "mixtral-8x7b-32768",
            apiKey: apiKey
        });
        console.log("Groq connected");
    }
    return groqInstance;
}

export async function extractLinksFromHomePage(input_prompt) {
    try {
        const response = await groqInstance.invoke(input_prompt);
        
        let parsedLinks;
        try {
            parsedLinks = JSON.parse(response.content);
            
            if (Array.isArray(parsedLinks)) {
                return parsedLinks;
            }
            
            throw new Error('Response is not in expected array format');
            
        } catch (parseError) {
            console.error("Error parsing response:", parseError);
            return [];
        }
    } catch (error) {
        console.error("Error extracting links with Groq:", error);
        throw error;
    }
}

export async function getNatureResponse(input_data) {
    try {
        const systemPrompt = `You are a business analyst who extracts the nature of business and services from website content.`;
        
        const userPrompt = `Analyze the following content and extract the nature of business or services provided.
Return ONLY a JSON array of services.
Do NOT include any explanations, headers, or extra text.
If no services are found, return an empty JSON array [].
The response must be a valid JSON array of strings.

Content to analyze:
${input_data}`;

        const response = await groqInstance.invoke([
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
        ]);

        return response;
    } catch (error) {
        console.error("Error invoking Groq:", error);
        return { content: "[]" };
    }
}

export async function generateBusinessProposal(links, services) {
    try {
        const systemPrompt = `You are a professional business consultant who creates compelling business proposals.`;
        
        const userPrompt = `Create a concise business proposal based on the following website links and identified services.
Format the proposal in JSON with the following structure:
{
    "title": "Business Proposal",
    "executive_summary": "Brief overview",
    "proposed_solutions": ["solution1", "solution2"],
    "value_proposition": "Why client should choose us",
    "next_steps": ["step1", "step2"]
}

Website Links:
${JSON.stringify(links, null, 2)}

Identified Services:
${JSON.stringify(services, null, 2)}`;

        const response = await groqInstance.invoke([
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
        ]);

        try {
            const proposal = JSON.parse(response.content);
            return proposal;
        } catch (parseError) {
            console.error("Error parsing proposal:", parseError);
            return {
                title: "Business Proposal",
                executive_summary: "Error generating proposal",
                proposed_solutions: [],
                value_proposition: "",
                next_steps: []
            };
        }
    } catch (error) {
        console.error("Error generating business proposal:", error);
        throw error;
    }
} 