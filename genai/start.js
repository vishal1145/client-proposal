import dotenv from "dotenv";
import getLinks  from "./step_0.js";
import getHtmlFromUrl from "./step_1.js";
import {getNatureOfBusiness} from "./step_2.js";
dotenv.config();import { getAIResponse } from "./llm.js";

const startProcess = async () => {
  // let links = await getLinks("https://doubtbuddy.com/");
  // console.log('links', links)
  // const allHtml = [];

  // for(var i = 0; i < (links || []).length; i++){
  //   let html = await getHtmlFromUrl(links[i]);
  //   allHtml.push(html);
  // }

  // let allServices = new Set();

  // for (var i = 0; i < (allHtml || []).length; i++) {
  //   console.log("i", i);
  //   let services = await getNatureOfBusiness(allHtml[i]);
  //   services.forEach(service => allServices.add(service)); 
  // }
  
  // allServices = Array.from(allServices); 

  // let servicesInString = allServices.join(",");
  let servicesInString = `Doubt resolution chatbot integration for education companies,Personalized tutoring experience with AI model,24x7 doubt resolution and concept clarity,Targeted practice quizzes,Holistic education for students,Big data of students for better iterations,Doubt resolution,Personalized practice,Performance reporting,Integration of doubt-solving chatbot for education companies,Quizzes for targeted practice,Support for NEET preparation,Detailed solutions to doubts,24x7 support system,Mathematics Tutoring,Probability and Sets,Venn Diagrams,Aptitude Practice,AI-based Solution Feedback,Performance Reporting,Set Theory and Algebra,Problem Solving,Set Operations,Prime Numbers,Set Membership,Relations and Functions,Sets, Relations and Functions,Probability,Maths,Education Services,Financial Services,Customer care services,Fraud and money laundering prevention checks,Compliance with laws, rules, and regulations,Product and service updates and promotions,Payment processing and transaction security,Product improvement and survey participation,Contest notifications and promotional materials,Phone number based marketing retargeting,Marketing Activities,User Identification,Receive Email, Telephone, WhatsApp, or Text Messages,Privacy Protection,Confidentiality Assurance,Email Communication for Provision of Services,External Service Providers,Data Sharing with Other Corporate Entities,Potential Merger or Acquisition,Cooperation with Law Enforcement,Accessing and Reviewing Information,Subscription based Q&A service,Practice access to topics,Long-term subscription discounts,Premium service`
  let serviceDetail = await getServiceInDetail(servicesInString);


  let proposal = await getClientProposal(serviceDetail);
  console.log(proposal);
  // convert to pdf 

};

// let services =["Educational App", "Personalized Tutoring", "Doubt Resolution", "Performance Reporting", "Edtech Chatbot Integration", "Personalized Practice", "AI Model Integration"]

// let servicesInString = services.join(",");

async function getServiceInDetail(services){
  let response = await getAIResponse(`
  You are a highly experienced marketing specialist with global expertise. Here are the services offered on the website:
  ${services}
  Using your expertise and knowledge, explain in detail how each of these services can benefit businesses worldwide. Focus on explaining why each service is essential for global growth and provide actionable marketing strategies that are tailored to a global audience. While you cannot search the web in real time, use your extensive training to generate a comprehensive response.
`, true); 

if(process.env.Open_Ai == 0){ 
  response = response?.content;
}

  return response;
}


startProcess().then((rs) => {
    console.log(rs);
})

async function getClientProposal(data){
  let response = await getAIResponse(`
  You are a highly experienced marketing specialist with global expertise. Here are the services offered on the website:
  ${data}
  Using your expertise and knowledge,  olease make a professional client prosposal.
  `, true);

  if(process.env.Open_Ai == 0){
  response = response?.content;
  }

  return response;
}

// getClientProposal();