import dotenv from "dotenv";
import * as openAIProvider from './openai.js';
import * as groqProvider from './groq.js';
import * as hardcodeProvider from './hardcode.js';
import * as deepseekProvider from './deepseek.js';
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
    case 'deepseek':
        provider = deepseekProvider;
        provider.initialize();
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

export async function getProposalSections(links) {
    return provider.getProposalSections(links);
}

export async function getClientProposal(sections) {
    return provider.getClientProposal(sections);
}

export async function generateBusinessProposal(links, services) {
    return provider.generateBusinessProposal(links, services);
}