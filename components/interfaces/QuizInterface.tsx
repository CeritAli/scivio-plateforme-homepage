'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, Brain } from 'lucide-react'

interface QuizInterfaceProps {
  size?: 'small' | 'medium' | 'large'
  autoPlay?: boolean
}

export default function QuizInterface({ 
  size = 'medium',
  autoPlay = true 
}: QuizInterfaceProps) {
  const [currentStep, setCurrentStep] = useState(0) // 0: question, 1: selection, 2: result
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)

  const question = {
    text: "Quelle hormone est principalement responsable de la régulation du sommeil ?",
    answers: [
      { id: 0, text: "Cortisol", isCorrect: false },
      { id: 1, text: "Mélatonine", isCorrect: true },
      { id: 2, text: "Insuline", isCorrect: false },
      { id: 3, text: "Adrénaline", isCorrect: false },
    ],
    currentQuestion: 3,
    totalQuestions: 10,
  }

  const sizeClasses = {
    small: 'w-[350px] h-[280px] text-[10px]',
    medium: 'w-[450px] h-[350px] text-xs',
    large: 'w-[600px] h-[450px] text-sm',
  }

  useEffect(() => {
    if (!autoPlay) return

    const sequence = async () => {
      // Reset
      setCurrentStep(0)
      setSelectedAnswer(null)
      setProgress(0)

      // Afficher question
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Progression
      for (let i = 0; i <= 30; i += 10) {
        setProgress(i)
        await new Promise(resolve => setTimeout(resolve, 200))
      }

      // Sélectionner une réponse
      await new Promise(resolve => setTimeout(resolve, 800))
      setCurrentStep(1)
      setSelectedAnswer(1) // Bonne réponse

      // Afficher résultat
      await new Promise(resolve => setTimeout(resolve, 1000))
      setCurrentStep(2)
      setProgress(30)

      // Pause avant restart
      await new Promise(resolve => setTimeout(resolve, 2500))
      
      // Restart
      sequence()
    }

    sequence()
  }, [autoPlay])

  return (
    <div className={`${sizeClasses[size]} bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-gray-700">Mode QCM</span>
          </div>
          <span className="text-xs text-gray-600 font-medium">
            {question.currentQuestion}/{question.totalQuestions}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <motion.div
            className="bg-primary h-1.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 p-5 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/5 rounded-xl p-4 border border-primary/10"
        >
          <p className="text-gray-800 font-medium leading-relaxed">
            {question.text}
          </p>
        </motion.div>

        {/* Answers */}
        <div className="space-y-2.5">
          <AnimatePresence>
            {question.answers.map((answer, index) => {
              const isSelected = selectedAnswer === answer.id
              const showResult = currentStep === 2
              const isCorrect = answer.isCorrect

              return (
                <motion.button
                  key={answer.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  disabled
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-300 relative overflow-hidden
                    ${!isSelected && !showResult ? 'border-gray-200 bg-white hover:border-primary/30 hover:bg-primary/5' : ''}
                    ${isSelected && !showResult ? 'border-primary bg-primary/10' : ''}
                    ${showResult && isCorrect ? 'border-green-500 bg-green-50' : ''}
                    ${showResult && isSelected && !isCorrect ? 'border-red-500 bg-red-50' : ''}
                    ${showResult && !isSelected && !isCorrect ? 'border-gray-200 bg-gray-50 opacity-60' : ''}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0
                      ${!isSelected && !showResult ? 'bg-gray-100 text-gray-600' : ''}
                      ${isSelected && !showResult ? 'bg-primary text-white' : ''}
                      ${showResult && isCorrect ? 'bg-green-500 text-white' : ''}
                      ${showResult && isSelected && !isCorrect ? 'bg-red-500 text-white' : ''}
                      ${showResult && !isSelected && !isCorrect ? 'bg-gray-200 text-gray-500' : ''}
                    `}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 text-gray-800 font-medium">
                      {answer.text}
                    </span>
                    {showResult && isCorrect && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </motion.button>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Result message */}
        <AnimatePresence>
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-green-50 border border-green-200 rounded-xl p-3"
            >
              <p className="text-green-800 text-[11px] font-medium flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Bonne réponse ! La mélatonine régule le cycle veille-sommeil.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white px-4 py-3 flex items-center justify-between">
        <button
          disabled
          className="text-xs text-gray-500 hover:text-gray-700 font-medium opacity-50 cursor-not-allowed"
        >
          ← Précédent
        </button>
        <button
          disabled
          className="bg-primary text-white px-5 py-2 rounded-lg text-xs font-semibold opacity-50 cursor-not-allowed"
        >
          Suivant →
        </button>
      </div>
    </div>
  )
}
