import express from "express";
import cors from 'cors'
import resumeRouter from "./routes/resume.routes";
import { Request, Response, NextFunction } from 'express'
import { AppError } from "./utils/error";
const app = express();

app.use(cors());
app.use(express.json())

app.get('/health',(req,res)=>{
    res.send({"status":"ok"})
})


app.use("/api/resume/",resumeRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({ message: err.message })
    } else {
        res.status(500).json({ message: 'Something went wrong' })
    }
})
export default app;
