import { useState } from 'react'
import type { ResumeAnalysis } from './types/resume.types'
import UploadBox from './components/UploadBox'
import Loader from './components/Loader'
import AnalysisResult from './components/AnalysisResult'
import { analyzeResume } from './services/api'

function App() {

  const [status, setStatus] = useState<"idle" | "loading" | "result">("idle")
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<ResumeAnalysis | null>(null)
  const [error, setError] = useState<string | null>(null)
  async function handleAnalyze(file:File){
    try{
      setError(null)
      if(!file)return "No File selected";
      setStatus("loading");
      let analysisResult:ResumeAnalysis = await analyzeResume(file);
      setResult(analysisResult)

      setStatus("result")

    }
    catch(err){
      setError("Something went wrong. Please try again.")
      setStatus("idle")
    }

  }

  function onReset() {
    setStatus("idle")
    setResult(null)
    setFile(null)
}

  return (
    <>
      
      {status == "idle" && <UploadBox handleAnalyze={handleAnalyze}/>}
      {error && status == "idle" && (
       <p className="text-center text-sm text-red-400 mt-4">{error}</p>
      )}
      {status == "loading" && <Loader/>}
      {status == "result" && <AnalysisResult result={result} onReset={onReset}/>}
    </>
  )
}

export default App
