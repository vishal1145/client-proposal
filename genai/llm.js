import dotenv from "dotenv";
import { OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

dotenv.config();

const openai = new OpenAI({
  modelName: "gpt-4",
  temperature: 0.3,
  openAIApiKey: process.env.API_KEY,  
});

const getAIResponse = async (input_prompt) => {
  try {
    const response = await openai.invoke(input_prompt);
    return response;
  } catch (error) {
    console.error("Error invoking OpenAI:", error);
  }
};

const getNatureResponse = async (input_data, input_prompt) => {
  try {
    const prompt = new PromptTemplate({
      template: input_prompt,
      inputVariables: ["text"],
    });

    const formattedPrompt = await prompt.format({ text: input_data });
    const response = await openai.call(formattedPrompt);
    return response;
  } catch (error) {
    console.error("Error invoking OpenAI:", error);
  }
};



export  {getAIResponse, getNatureResponse};
