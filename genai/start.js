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

// async function getProposal(){
//   let response = await getAIResponse(`
//   You are a highly experienced marketing specialist with global expertise. Here are the services offered on the website:

//   ${servicesInString}
  
//   Using your expertise and knowledge, explain in detail how each of these services can benefit businesses worldwide. Focus on explaining why each service is essential for global growth and provide actionable marketing strategies that are tailored to a global audience. While you cannot search the web in real time, use your extensive training to generate a comprehensive response.
// `, true);
//   console.log(response);
// }

// getProposal()

// startProcess().then((rs) => {
    // console.log(rs);
// })


const data = `1. Educational App: An educational app can provide an interactive and engaging platform for learners across the globe. It can be a powerful tool for businesses that are focused on education and training. The app can be localized to cater to different languages and cultures, thus ensuring a wider reach. The marketing strategy could involve targeted ads on social media platforms popular in different regions, collaborations with local influencers, and SEO optimization for app stores in different languages.\n' +
'\n' +
'2. Personalized Tutoring: This service can be a game-changer for businesses in the edtech sector. By offering personalized tutoring, businesses can cater to the individual learning needs of users worldwide. This can be marketed by highlighting the benefits of personalized learning and showcasing success stories. Collaborations with educational institutions globally can also help in expanding the reach of this service.\n' +
'\n' +
'3. Doubt Resolution: This service can help businesses build trust and credibility with their users. By promptly resolving doubts and queries, businesses can ensure customer satisfaction and loyalty. This can be marketed through customer testimonials and reviews. A 24/7 customer service can be a unique selling point, especially for customers in different time zones.\n' +
'\n' +
'4. Performance Reporting: This service can provide valuable insights into user engagement and learning outcomes. Businesses can use this data to improve their products and services. Performance reporting can be marketed by highlighting its role in tracking progress and achieving learning goals. Businesses can also use this data for targeted marketing campaigns.\n' +
'\n' +
'5. Edtech Chatbot Integration: Chatbots can provide instant support to users, improving customer experience. They can handle multiple queries at once, making them cost-effective. They can also be programmed in multiple languages, making them ideal for a global audience. Marketing strategies could involve showcasing how chatbots can provide instant, round-the-clock support.\n' +
'\n' +
'6. Personalized Practice: This service can help users improve their skills at their own pace. It can be particularly beneficial for businesses in the edtech sector, where personalized learning is becoming increasingly important. This can be marketed by highlighting the benefits of personalized practice and how it can help users achieve their learning goals faster.\n' +
'\n' +
'7. AI Model Integration: AI can help businesses offer personalized and adaptive learning experiences. It can also provide valuable insights into user behavior, which can be used to improve products and services. AI integration can be marketed by showcasing how it can enhance the learning experience and provide personalized recommendations. Businesses can also host webinars or workshops to educate potential customers about the benefits of AI in education.`


async function getClientProposal(){
  let response = await getAIResponse(`
  You are a highly experienced marketing specialist with global expertise. Here are the services offered on the website:

  ${data}
  
  Using your expertise and knowledge,  olease make a professional client prosposal.
`, true);
  console.log(response);
}

getClientProposal();