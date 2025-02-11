import dotenv from "dotenv";
import * as openAIProvider from './config/openai.js';
import * as groqProvider from './config/groq.js';
import * as hardcodeProvider from './config/hardcode.js';
dotenv.config();

let provider;

// Initialize the provider based on environment variable
const llmProvider = process.env.LLM_PROVIDER || 'hardcode';

switch(llmProvider) {
    case 'openai':
        provider = openAIProvider;
        provider.initialize(process.env.API_KEY);
        break;
    case 'groq':
        provider = groqProvider;
        provider.initialize(process.env.API_KEY2);
        break;
    case 'hardcode':
    default:
        provider = hardcodeProvider;
        provider.initialize();
        break;
}

export async function extractLinksFromHomePage(input_prompt) {
    try {
        const response = await provider.extractLinksFromHomePage(input_prompt);
        return response;
    } catch (error) {
        console.error("Error extracting links:", error);
        throw error;
    }
}

export async function getNatureResponse(html) {
    return provider.getNatureResponse(html);
}
