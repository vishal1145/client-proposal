import { OpenAI } from "@langchain/openai";

const openai = new OpenAI({
  model: "gpt-4",
  temperature: 0.3,
});

const getAIResponse = async (input_prompt) => {
  const response = await openai.invoke(input_prompt);
  return response;
};


export default getAIResponse