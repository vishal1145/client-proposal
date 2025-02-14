import { OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

let openaiInstance = null;

export function initialize(apiKey) {
    if (!openaiInstance) {
        openaiInstance = new OpenAI({
            modelName: "gpt-4",
            temperature: 0.3,
            openAIApiKey: apiKey,
        });
        console.log("OpenAI connected");
    }
    return openaiInstance;
}

export async function extractLinksFromHomePage(input_prompt) {
    try {
        return [
            "https://example.com/about",
            "https://example.com/services",
            "https://example.com/contact",
            "https://example.com/blog"
        ];
    } catch (error) {
        console.error("Error extracting links with OpenAI:", error);
        throw error;
    }
}

export async function getNatureResponse(input_data, input_prompt) {
    try {
        const prompt = new PromptTemplate({
            template: input_prompt,
            inputVariables: ["text"],
        });

        const formattedPrompt = await prompt.format({ text: input_data });
        const response = await openaiInstance.invoke(formattedPrompt);
        return response;
    } catch (error) {
        console.error("Error invoking OpenAI:", error);
        throw error;
    }
}

export async function generateBusinessProposal(links, services) {
    try {
        const prompt = new PromptTemplate({
            template: `You are a professional business consultant. Create a concise business proposal based on the following website links and identified services.
Format the proposal in JSON with the following structure:
{
    "title": "Business Proposal",
    "executive_summary": "Brief overview",
    "proposed_solutions": ["solution1", "solution2"],
    "value_proposition": "Why client should choose us",
    "next_steps": ["step1", "step2"]
}

Website Links:
{links}

Identified Services:
{services}`,
            inputVariables: ["links", "services"],
        });

        const formattedPrompt = await prompt.format({
            links: JSON.stringify(links, null, 2),
            services: JSON.stringify(services, null, 2)
        });

        const response = await openaiInstance.invoke(formattedPrompt);

        try {
            const proposal = JSON.parse(response);
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