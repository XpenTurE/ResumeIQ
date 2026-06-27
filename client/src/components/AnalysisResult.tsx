import type { ResumeAnalysis } from '../types/resume.types'

interface AnalysisResultProps {
    result: ResumeAnalysis | null
    onReset: () => void
}

const AnalysisResult = ({ result, onReset }: AnalysisResultProps) => {
    if (!result) return null

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-8">
            <div className="w-full max-w-lg mx-auto">

                {/* Brand */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-medium text-gray-900">
                        Resume<span className="text-blue-500">IQ</span>
                    </h1>
                </div>

                {/* Score */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center mb-4">
                    <p className="text-sm text-gray-400 mb-1">Resume score</p>
                    <p className="text-6xl font-medium text-blue-500">{result.score}</p>
                    <p className="text-sm text-gray-400 mt-1">out of 100</p>
                </div>

                {/* Strengths */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4">
                    <h2 className="text-sm font-medium text-gray-700 mb-3">Strengths</h2>
                    <ul className="space-y-2">
                        {result.strengths.map((s, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-600">
                                <span className="text-green-500 mt-0.5">✓</span>
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Weaknesses */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4">
                    <h2 className="text-sm font-medium text-gray-700 mb-3">Weaknesses</h2>
                    <ul className="space-y-2">
                        {result.weaknesses.map((w, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-600">
                                <span className="text-red-400 mt-0.5">✗</span>
                                {w}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Suggestions */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                    <h2 className="text-sm font-medium text-gray-700 mb-3">Suggestions</h2>
                    <ul className="space-y-2">
                        {result.suggestions.map((s, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-600">
                                <span className="text-blue-400 mt-0.5">→</span>
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Reset */}
                <button
                    onClick={onReset}
                    className="w-full py-3 border border-gray-300 rounded-xl text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                >
                    Analyze another resume
                </button>

            </div>
        </div>
    )
}

export default AnalysisResult