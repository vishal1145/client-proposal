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