import { GoogleGenAI } from "@google/genai";
import { responseModel } from "../types/resume.types";


const apiKey = process.env.GEMINI_API_KEY


const ai  =  new GoogleGenAI({apiKey})


const analyzeResume = async (extractedText:string):Promise<responseModel> =>{
    

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `You are a resume analyzer. Analyze the following resume and return ONLY a JSON object with no markdown, no backticks, no explanation.
            
            The JSON must have these fields:
            - score: number out of 100
            - strengths: array of strings
            - weaknesses: array of strings
            - suggestions: array of strings
            
            Resume:
            ${extractedText}
            `,
            
        });
        const obj:responseModel = JSON.parse(response.text!)
        return obj
}



export default analyzeResume;