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
  
export function initialize() {
    if (!genAi) {
        genAi = new GoogleGenerativeAI(
            process.env.GEMINI_API_KEY
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
    var service = services[0]
    const systemPrompt = fs.readFileSync('./config/prompts/business-proposal.txt', 'utf8');

    var model = genAi.getGenerativeModel({ 
        model: "gemini-1.5-flash", 
        systemInstruction: systemPrompt   
    });

    const chatSession = model.startChat({
        generationConfig,
        history: []
    })  

    const userPrompt = `
        Business Summary: ${service.business_summary}
        Key Services: ${service.key_services}
        Possible Software: ${service.possible_software}
        Possible Software Solutions Description: ${service.possible_software_solutions_description}
        Possible Software Solutions Features: ${service.possible_software_solutions_features}
        Possible Software Solutions Benefits: ${service.possible_software_solutions_benefits}
        Possible Software Solutions Pricing: ${service.possible_software_solutions_pricing}
        Possible Software Solutions Comparison: ${service.possible_software_solutions_comparison}   
        Possible Software Solutions Demo: ${service.possible_software_solutions_demo}
        Possible Software Solutions Testimonials: ${service.possible_software_solutions_testimonials}
        Possible Software Solutions FAQ: ${service.possible_software_solutions_faq}
        Possible Software Solutions Demo Link: ${service.possible_software_solutions_demo_link}
    `;
    const result = await chatSession.sendMessage(userPrompt);
    console.log('result', result);
    let contentStr = result.response.text()

    contentStr = contentStr
    .replace(/```html\n?/g, '')
    .replace(/```json\n?/g, '')
    .replace(/```$/gm, '')
    .trim();

    // //console.log('text', text);
    // const proposal = JSON.parse(contentStr);
    console.log('contentStr', contentStr);

    fs.writeFileSync('./config/prompts/business-proposal.html', contentStr);

    return contentStr;
}



