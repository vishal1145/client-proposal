import dotenv from "dotenv";
import getLinks  from "./step_0.js";
import getHtmlFromUrl from "./step_1.js";
import {getNatureOfBusiness} from "./step_2.js";
dotenv.config();import { getAIResponse } from "./llm.js";
import service from "./model/service.js";

export const startProcess = async () => {
  let links = await getLinks("https://doubtbuddy.com/");
 
  if(!links){
    links = await getLinks("https://doubtbuddy.com/");
  }


  links = links.splice(0, 1);
  
  console.log("links", links)

  for(var i = 0; i < (links || []).length; i++){
    let html = await getHtmlFromUrl(links[i].url);
    links[i].html = html;
  }

  for (var i = 0; i < (links || []).length; i++) {
    let services = await getNatureOfBusiness(links[i].html);
    console.log("services", services);
    links[i].services = services;
  }

  console.log("links", links);
  
  let allServices = [];


  for (var i = 0; i < (links || []).length; i++) {
    if (Array.isArray(links[i].services)) {
      allServices.push(...links[i].services);
    }
  }
  

  // let allServices =  [
  //   'Online Privacy Protection',
  //   'Personal Information Management',
  //   'Product Purchase',
  //   'Fraud Detection',
  //   'customer care services',
  //   'fraud and money laundering prevention checks',
  //   'compliance with laws, rules, and regulations',
  //   'information and offers on products and services',
  //   'product improvement efforts',
  //   'contact as a survey respondent',
  //   'notify you if you win any contest',
  //   'promotional materials from contest sponsors or advertisers',
  //   'transactions with payment-related financial information',
  //   'security practices for internet transactions',
  //   'marketing retargeting',
  //   'updates, promotions, and information about the app',
  //   'User Identification',
  //   'Marketing Retargeting',
  //   'Receive alerts and information related to services',
  //   'Access to third-party services and resources',
  //   'External Service Providers',
  //   'Other Corporate Entities',
  //   'Subscription tiers (Monthly, Weekly, Daily) with access to all features',
  //   'Special offers or discounts for long-term subscriptions',
  //   'Free Tier with 5 doubts and access to practice one chapter of each topic',
  //   'Cancellation within 1-2 days of subscribing',
  //   'Refunds for accidental payments within 24 hours'
  // ]

  let servicesInString = allServices.join(",");

  let serviceDetail = await getServiceInDetail(servicesInString);
  
  console.log("service detail", serviceDetail);
  let proposal = await getClientProposal(serviceDetail);
  console.log("services detail", serviceDetail)
  console.log(proposal);
  // convert to pdf 

};


async function getServiceInDetail(services){
  let response = await getAIResponse(`
  You are a highly experienced marketing specialist with global expertise. Here are the services offered on the website:
  ${services}
  Using your expertise and knowledge, explain in detail how each of these services can benefit businesses worldwide. Focus on explaining why each service is essential for global growth and provide actionable marketing strategies that are tailored to a global audience. While you cannot search the web in real time, use your extensive training to generate a comprehensive response.
`, true); 

if(process.env.Open_Ai == 0){ 
  response = response?.content;
}

// let newService = new service({
//   services:response
// }) 

//   await newService.save()
  return response;
}

async function getClientProposal(serviceDetail) {
  let response = await getAIResponse(`
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
     - Provide key industry insights relevant to the client’s needs.  
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
  `, true);

  console.log("response line 148", response);
  if (process.env.Open_Ai == 0) {
      response = response?.content;
  }

  return response;
}


startProcess().then((rs) => {
  console.log(rs);
})

