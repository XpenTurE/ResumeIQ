import {Router}  from "express";
import resumeController from "../controllers/resume.controller";
import upload from "../middleware/upload";
// import {resumeController} from "../controllers/resume.controller.js"
const resumeRouter = Router();

resumeRouter.post("/analyze", upload.single('resume'), resumeController.analyzeResume)

export default resumeRouter;