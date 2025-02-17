import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';

let genAi;

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
export function initialize(apiKey) {
    if (!genAi) {
        genAi = new GoogleGenerativeAI(
            "AIzaSyBYbCxtt5rBK5U1VSrBenwUZJwVnYFfMXw"
        );
        console.log("Gemini connected");
    }
    return genAi;
}

export async function extractLinksFromHomePage(html) {
    const systemPrompt = fs.readFileSync('./config/prompts/extract-link.txt', 'utf8');

    var model = genAi.getGenerativeModel({ 
        model: "gemini-1.5-flash", 
        systemInstruction: systemPrompt   
    });

    const chatSession = model.startChat({
        generationConfig,
        history: []
    })

    const userPrompt = `Here are the extracted html from the website:\n\n${html}`;
    const result = await chatSession.sendMessage(userPrompt);
    console.log('result', result);
    let contentStr = result.response.text()

    contentStr = contentStr
                .replace(/```json\n?/g, '')
                .replace(/```$/gm, '')
                .trim();

    //console.log('text', text);
    const links = JSON.parse(contentStr);
    console.log('links', links);
    return links;
}

export async function getNatureResponse(link) {
    const systemPrompt = fs.readFileSync('./config/prompts/business-nature.txt', 'utf8');

    var model = genAi.getGenerativeModel({ 
        model: "gemini-1.5-flash", 
        systemInstruction: systemPrompt   
    });

    const chatSession = model.startChat({
        generationConfig,
        history: []
    })  

    const userPrompt = `
        Title: ${link.title}

        Description: ${link.description}

        Meta Description: ${link.meta_description}

        Here are the extracted html from the website: ${link.html}
    `;
    const result = await chatSession.sendMessage(userPrompt);
    console.log('result', result);
    let contentStr = result.response.text()

    contentStr = contentStr
                .replace(/```json\n?/g, '')
                .replace(/```$/gm, '')
                .trim();

    //console.log('text', text);
    const links = JSON.parse(contentStr);
    console.log('links', links);
    return links;
}


export async function generateBusinessProposal(links, services) {
    const response = await model.generateContent(links, services);
    return response.text();
}



