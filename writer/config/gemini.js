import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

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
    genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log("Gemini connected");
  }
  return genAi;
}

export async function extractLinksFromHomePage(html) {
  const systemPrompt = fs.readFileSync(
    "./config/prompts/extract-link.txt",
    "utf8"
  );

  var model = genAi.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: systemPrompt,
  });

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const userPrompt = `Here are the extracted html from the website:\n\n${html}`;
  const result = await chatSession.sendMessage(userPrompt);
  console.log("result", result);
  let contentStr = result.response.text();

  contentStr = contentStr
    .replace(/```json\n?/g, "")
    .replace(/```$/gm, "")
    .trim();

  //console.log('text', text);
  const links = JSON.parse(contentStr);
  console.log("links", links);
  return links;
}

export async function getNatureResponse(link) {
  const systemPrompt = fs.readFileSync(
    "./config/prompts/business-nature.txt",
    "utf8"
  );

  var model = genAi.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: systemPrompt,
  });

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const userPrompt = `
        Title: ${link.title}

        Description: ${link.description}

        Meta Description: ${link.meta_description}

        Here are the extracted html from the website: ${link.html}
    `;
  const result = await chatSession.sendMessage(userPrompt);
  console.log("result", result);
  let contentStr = result.response.text();

  contentStr = contentStr
    .replace(/```json\n?/g, "")
    .replace(/```$/gm, "")
    .trim();

  //console.log('text', text);
  const links = JSON.parse(contentStr);
  console.log("links", links);
  return links;
}

export async function generateBusinessProposal(service) {
  // const systemPrompt = fs.readFileSync('./config/prompts/business-proposal.txt', 'utf8');

  // var model = genAi.getGenerativeModel({
  //     model: "gemini-1.5-flash",
  //     systemInstruction: systemPrompt
  // });

  // const chatSession = model.startChat({
  //     generationConfig,
  //     history: []
  // })

  // var keyServices = service.key_services
  // if(isArray(service.keyServices)) keyServices = service.keyServices.join(', ');

  // const userPrompt = `
  //     Business Summary: ${service.business_summary}
  //     Key Services: ${keyServices}
  //     Target Audience: ${service.target_audience}
  //     Revenue Model: ${service.revenue_model}
  //     Existing Technology: ${service.existing_technology}
  //     Operational Challenges: ${service.operational_challenges}
  //     Market Trends: ${service.market_trends}
  //     Competitive Gap: ${service.competitive_gap}
  //     Compliance Needs: ${service.compliance_needs}
  //     Most Valuable Software Feature Name: ${service.most_valuable_software_feature.feature_name}
  //     Most Valuable Software Feature Description: ${service.most_valuable_software_feature.feature_description}
  //     Most Valuable Software Feature Expected Benefits: ${service.most_valuable_software_feature.expected_benefits}
  //     Most Valuable Software Feature ROI Justification: ${service.most_valuable_software_feature.ROI_justification}
  // `;
  // const result = await chatSession.sendMessage(userPrompt);
  // console.log('result', result);
  // let contentStr = result.response.text()

  // contentStr = contentStr
  // .replace(/```html\n?/g, '')
  // .replace(/```json\n?/g, '')
  // .replace(/```$/gm, '')
  // .trim();

  // //console.log('text', text);
  // const proposal = JSON.parse(contentStr);
  //console.log('contentStr', contentStr);

  //var html = fs.readFileSync('./config/prompts/business-proposal.html', 'utf8');
  //html = html.replace('$$$proposaltext$$$', contentStr);
  const templateHtml = fs.readFileSync(
    "./config/prompts/business-proposal.html",
    "utf8"
  );
  const contentStr = "<html><body><p>Proposal Generated... </p></body></html>";
  
  const existingContent = fs.readFileSync(
    "./config/prompts/business-proposal.html",
    "utf8"
  );
  const finalHtml = existingContent.replace("$$$contentToReplace$$$", contentStr);
  // const finalHtml = templateHtml.replace('{data}', contentStr);

  // fs.writeFileSync('./config/prompts/business-proposal.html', finalHtml);
  const outputFilePath = `./config/prompts/business-proposal-${
    service.id || ""
  }.html`;
  fs.writeFileSync(outputFilePath, finalHtml, "utf8");

  return finalHtml;
}
