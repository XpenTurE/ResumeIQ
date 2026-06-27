import axios from "axios"
import type { ResumeAnalysis } from "../types/resume.types"

export const  analyzeResume = async (file:File):Promise<ResumeAnalysis> => {

    const formData = new FormData()
    formData.append('resume', file)

    let analysis = await axios.post(`${import.meta.env.VITE_API_URL}/api/resume/analyze`,formData);

    return analysis.data.result

}