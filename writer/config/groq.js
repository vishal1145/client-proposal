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
        const systemPrompt = `You are a web scraping assistant. Extract and return only the most relevant links from the HTML content.
Return the links in a simple JSON array format. Do not include any markdown formatting or additional text.`;
        
        const userPrompt = `Here is the HTML content. Extract and return only the main navigation and important content links:
${input_prompt}`;

        const response = await groqInstance.invoke([
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
        ]);
        
        let links = [];
        try {
            // Clean the response content
            const cleanedContent = response.content.replace(/```json\s*|\s*```/g, '').trim();
            links = JSON.parse(cleanedContent);
            
            if (!Array.isArray(links)) {
                console.warn("Response is not an array, using default links");
                return ["https://example.com/about", "https://example.com/services"];
            }
            
            return links;
        } catch (parseError) {
            console.error("Error parsing links:", parseError);
            return ["https://example.com/about", "https://example.com/services"];
        }
    } catch (error) {
        console.error("Error extracting links with Groq:", error);
        return ["https://example.com/about", "https://example.com/services"];
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