import { OpenAI } from 'openai';
import getAllhtml from './3.js';

const openai = new OpenAI({
});

const MAX_TOKENS = 4000; 

async function getBusinessProposal(allHtml) {
  try {
    const trimmedHtml = allHtml.slice(0, MAX_TOKENS);

    const prompt = `
    Given the HTML content of a website, provide a detailed business proposal with recommendations on how to improve the business strategy , return data at least 4 page of pdf. Focus on:
    - Improving user experience
    - Increasing sales and conversions
    - Enhancing marketing strategies
    - Providing suggestions for website content and structure improvements
    Please analyze the content and provide detailed, actionable recommendations.
    HTML Content:
    ${trimmedHtml}
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4',   
      messages: [
        { role: 'system', content: 'You are a business consultant analyzing websites and providing improvement strategies.' },
        { role: 'user', content: prompt },
      ],
    });

    console.log('Business Proposal:', response.choices[0].message.content);
  } catch (error) {
    console.error('Error generating business proposal:', error);
  }
}

const allHtml = await getAllhtml();  
getBusinessProposal(allHtml);
