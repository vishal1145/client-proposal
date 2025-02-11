// const OpenAI = require('openai');
// require('dotenv').config();

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// async function analyzeBusiness(text) {
//     const prompt = `
//     Analyze the following business details and suggest improvements:
//     ${text}
    
//     Provide:
//     1. Business Overview
//     2. Growth Opportunities
//     3. Digital Transformation Suggestions
//     4. Recommended Technologies
//     `;

//     const response = await openai.completions.create({
//         model: "gpt-4-turbo",
//         prompt: prompt,
//         max_tokens: 800
//     });

//     return response.choices[0].text.trim();
// }

// module.exports = { analyzeBusiness };
