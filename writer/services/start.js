import dotenv from "dotenv";
import getLinks from "./step_0.js";
import getHtmlFromUrl from "./step_1.js";
import { getNatureOfBusiness } from "./step_2.js";
dotenv.config();
import Analysis from '../models/analysis.js';

export const startProcess = async (url) => {
  if (!url) {
    throw new Error("URL is required");
  }
   
  //let linksTemp = await getLinks(url);
  //let linksTemp = [
    //{ link: 'https://www.amarisadoption.com/adopting', title: 'Services' },
  //]

  let links = linksTemp.map((link) => ({
    url: link.link,
    title: "",  
    description: "",
    html: null,
    services: [],
  }));

  for (var i = 0; i < links.length; i++) { 
    var htmlDetails = await getHtmlFromUrl(links[i].url);
    links[i].html = htmlDetails.html;
    links[i].title = htmlDetails.title;
    links[i].description = htmlDetails.description;
    links[i].meta_description = htmlDetails.meta_description; 
  }

  for (var i = 0; i < links.length; i++) { 
    let services = await getNatureOfBusiness(links[i]);
    links[i].services = services;
  }

  let allServices = new Set();
  links.forEach((link) => {
    link.services.forEach((service) => allServices.add(service));
  });

  allServices = Array.from(allServices);
 
  var analysis = {};
  analysis.url = url;
  analysis.links = links;
  analysis.allServices = allServices;

  // Save analysis to database
  try {
    const analysisModel = {
      url: analysis.url,
      timestamp: new Date(),
      links: analysis.links.map(link => ({
        url: link.url,
        html: link.html,
        title: link.title,
        description: link.description,
        meta_description: link.meta_description,  
        services: link.services
      })),
      allServices: analysis.allServices
    };

    // Save to database
    const alreadyExists = await Analysis.findOne({ url: url });
    if (alreadyExists) {
      const updatedAnalysis = await Analysis.findByIdAndUpdate(
        alreadyExists._id,
        analysisModel,
        { new: true }  
      );
      console.log('Analysis updated to database successfully');
      return updatedAnalysis;
    }
    const newAnalysis = new Analysis(analysisModel);
    await newAnalysis.save();
    console.log('Analysis saved to database successfully');
    return newAnalysis;
  } catch (error) {
    console.error('Error saving to database:', error);
    throw error;
  }
};


async function getClientProposal(serviceDetail) {
  let response = await getAIResponse(
    `
  You are a highly experienced marketing specialist with global expertise, and your name is Algofolks.

  **Objective:**  
  Generate a professional, structured, and client-centric proposal for our marketing services, ensuring that the provided service details are utilized effectively and persuasively.

  **Service Overview:**  
  ${serviceDetail}

  **Proposal Structure:**  
  1. **Company Overview**  
     - Provide a compelling introduction to our company, emphasizing our expertise, achievements, and past successful projects.  

  2. **Comprehensive Service Offerings**  
     - List all our marketing, branding, and advertising services, emphasizing expertise and differentiators.  

  3. **Proposed Team**  
     - Include brief but impactful profiles of our key team members, focusing on their experience, skills, and roles in the project.  

  4. **Project Scope & Deliverables**  
     - Clearly define the client's needs based on service details and how we will fulfill them.  
     - Outline the proposed approach, strategies, and expected outcomes.  

  5. **Strategic Insights & Market Analysis**  
     - Provide key industry insights relevant to the client's needs.  
     - Highlight potential challenges and our solutions.  

  6. **Implementation Plan & Timeline**  
     - Provide a professional project roadmap with clear milestones.  

  7. **Conclusion & Next Steps**  
     - Summarize key points and reinforce why we are the best choice.  

  8. **Contact Details**  
     - Provide multiple professional contact options.  

  **Guidelines:**  
  - Maintain a professional, polished, and persuasive tone.  
  - Ensure the proposal is well-structured and easy to navigate.  
  - Directly incorporate relevant data from service details where applicable.  

  **Deliver a refined and compelling proposal without placeholders like [Client Name].**
  `,
    true
  );

  if (process.env.Open_Ai == 0) {
    response = response?.content;
  }

  return response;
}

