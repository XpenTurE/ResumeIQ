import { Request,Response,NextFunction } from "express";
import { AppError } from "../utils/error";
import extractText from "../services/pdf.service";
import analyzeResume from "../services/ai.service";
import { responseModel } from "../types/resume.types";

const resumeController = {
    analyzeResume : async(req:Request,res:Response,next:NextFunction)=>{
        try{

            if(!req.file){
                return next( new AppError("File not provided",400));
            }
            
            const extractedText:string = await extractText(req.file.buffer);
            console.log(extractedText);
            const resultAI:responseModel = await analyzeResume(extractedText)
            console.log("output rfomn AI",resultAI);
            return res.status(200).json({"success":true,result:resultAI})
        }
        catch(err) {
            const error = err as Error
            return next(new AppError(error.message, 500))
        }
    }
}

export default resumeController