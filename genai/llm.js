import dotenv from "dotenv";
import { OpenAI } from "@langchain/openai";

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

export default getAIResponse;
