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