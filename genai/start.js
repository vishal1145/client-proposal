import { getAIResponse } from "./llm.js";
import getLinks  from "./step_0.js";
import getHtmlFromUrl from "./step_1.js";
import {getNatureOfBusiness} from "./step_2.js";

const startProcess = async () => {
  // let links = await getLinks("https://doubtbuddy.com/");
   
  const links = [
    { url: 'https://doubtbuddy.com/', description: 'Home Page' },
    {
      url: 'https://doubtbuddy.com/#Features',
      description: 'Features Page'
    },
    {
      url: 'https://doubtbuddy.com/question/',
      description: 'Question Page'
    },
    {
      url: 'https://doubtbuddy.com/#Contact',
      description: 'Contact Page'
    },
    {
      url: 'https://doubtbuddy.com/privacy-policy',
      description: 'Privacy Policy Page'
    },
    {
      url: 'https://doubtbuddy.com/tnc',
      description: 'Terms and Conditions Page'
    }
  ]

  for(var i = 0; i < (links || []).length; i++){
    let html = await getHtmlFromUrl(links[i].url);
    links[i].html = html;
  }

  for(var i = 0; i < (links || []).length; i++){
    let services= await getNatureOfBusiness(links[i].html);
    links[i].services = services;
  }


  // finalize services to make proposal

  // let proposal = await writeBusinessProposal();

  // convert to pdf 

};

let services =["Educational App", "Personalized Tutoring", "Doubt Resolution", "Performance Reporting", "Edtech Chatbot Integration", "Personalized Practice", "AI Model Integration"]

let servicesInString = services.join(",");

async function getProposal(){
  let response = await getAIResponse(`
  You are a highly experienced marketing specialist with global expertise. Here are the services offered on the website:

  ${servicesInString}
  
  Using your expertise and knowledge, explain in detail how each of these services can benefit businesses worldwide. Focus on explaining why each service is essential for global growth and provide actionable marketing strategies that are tailored to a global audience. While you cannot search the web in real time, use your extensive training to generate a comprehensive response.
`);
  console.log(response);
}

getProposal()

// startProcess().then((rs) => {
    // console.log(rs);
// })