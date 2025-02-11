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
        return [
            "https://example.com/about-us",
            "https://example.com/our-services",
            "https://example.com/contact-us",
            "https://example.com/portfolio"
        ];
    } catch (error) {
        console.error("Error extracting links with Groq:", error);
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
        const response = await groqInstance.invoke(formattedPrompt);
        return response;
    } catch (error) {
        console.error("Error invoking Groq:", error);
        throw error;
    }
} 