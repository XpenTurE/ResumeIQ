import { useState, useRef } from 'react'

interface UploadBoxProps {
    handleAnalyze: (file: File) => void
}

const UploadBox = ({ handleAnalyze }: UploadBoxProps) => {
    const [file, setFile] = useState<File | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    function handleChange(e:any){
        setFile(e.target.files?.[0])
    }
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="w-full max-w-lg">

                {/* Brand */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl font-medium text-gray-900">
                        Resume<span className="text-blue-500">IQ</span>
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Upload your resume and get AI-powered feedback in seconds.
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-8">

                    {/* Drop zone */}
                    <div className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors ${file ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'}`}>
                        <p className="font-medium text-gray-800">Drop your resume here</p>
                        <p className="text-sm text-gray-400 mt-1">PDF only, up to 5MB</p>
                        {file && <p className="text-sm text-green-600 font-medium mt-2">{file.name}</p>}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-5">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-xs text-gray-400">or</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* Hidden file input */}
                    <input ref={inputRef} type="file" accept=".pdf" className="hidden" onChange={handleChange} />

                    {/* Choose file button */}
                    <button onClick={() => inputRef.current?.click()} className="w-full py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                        Choose file
                    </button>

                    {/* Analyze button */}
                    <button
                        disabled={!file}
                        onClick={() => handleAnalyze(file!)}
                        className="w-full mt-4 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        Analyze resume
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-4">Your resume is never stored.</p>
                </div>
            </div>
        </div>
    )
}

export default UploadBox