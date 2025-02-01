import dotenv from "dotenv";
import { OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
dotenv.config();

import { ChatGroq } from "@langchain/groq";
import service from "./model/service.js";
import DBConnect from "./config/database.js";

let openai;

function openAiConnect(){
   if(process.env.Open_Ai == 1){
      openai = new OpenAI({
      modelName: "gpt-4",
      temperature: 0.3,
      openAIApiKey: process.env.API_KEY,  
    });
    console.log("open Ai connnected");
   }else{
    openai = new ChatGroq({
      model: "mixtral-8x7b-32768",
      apiKey:process.env.API_KEY2
    });
    console.log("gorq is connected")
   }
}

openAiConnect();

DBConnect();

const getAIResponse = async (input_prompt, save_in_db=false) => {
  try {
    const response = await openai.invoke(input_prompt);

    console.log("line 33", response);
    if(save_in_db){
      const newService = await new service({
        service:response
      })
      await newService.save();
    }
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
    const response = await openai.invoke(formattedPrompt);  
    return response;
  } catch (error) {
    console.error("Error invoking OpenAI:", error);
  }
};



export  {getAIResponse, getNatureResponse};
