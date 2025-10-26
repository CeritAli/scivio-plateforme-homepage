'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Send, Brain, Database, CheckCircle2, FileImage, Activity } from 'lucide-react'

export default function WorkflowAnimation() {
  const [step, setStep] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [responseLines, setResponseLines] = useState<number[]>([])
  const fullText = "Quelle est la prise en charge d'une pancréatite aiguë grave ?"

  // Démarrer l'animation au montage et en boucle
  useEffect(() => {
    const runAnimation = () => {
      // Reset
      setStep(0)
      setTypedText('')
      setResponseLines([])

      // Étape 1: Typing animation (0-3s)
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, 80)

      // Étape 2: Envoi (3.5s)
      setTimeout(() => setStep(1), 3500)

      // Étape 3: Transfert (4s)
      setTimeout(() => setStep(2), 4000)

      // Étape 4: LLM Processing (5s)
      setTimeout(() => setStep(3), 5000)

      // Étape 5: DB Connection (5.5s)
      setTimeout(() => setStep(4), 5500)

      // Étape 6: Response Generation (8s)
      setTimeout(() => setStep(5), 8000)

      // Étape 7: Lines appear progressively
      setTimeout(() => setResponseLines([1]), 8500)
      setTimeout(() => setResponseLines([1, 2]), 8700)
      setTimeout(() => setResponseLines([1, 2, 3]), 8900)
      setTimeout(() => setResponseLines([1, 2, 3, 4]), 9100)
      setTimeout(() => setResponseLines([1, 2, 3, 4, 5]), 9300)

      // Étape 8: Images appear (10s)
      setTimeout(() => setStep(6), 10000)

      // Recommencer après 13s
      setTimeout(() => runAnimation(), 13000)
    }

    runAnimation()

    return () => {
      // Cleanup
    }
  }, [])

  return (
    <div className="relative w-full min-h-[400px] bg-white rounded-2xl p-8 border-2 border-gray-200 overflow-hidden">
      {/* Connection line animée */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <motion.path
          d="M 150 200 Q 300 200, 450 200 Q 600 200, 750 200 Q 900 200, 1050 200"
          stroke="#107bb3"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: step >= 2 ? 1 : 0,
            opacity: step >= 2 ? 0.3 : 0
          }}
          transition={{ duration: 0.8 }}
        />
      </svg>

      <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4" style={{ zIndex: 2 }}>
        {/* ÉTAPE 1: Interface Utilisateur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="bg-white border-2 border-primary rounded-xl p-4 shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-xs font-bold">U</span>
              </div>
              <span className="text-sm font-semibold text-gray-700">Utilisateur</span>
            </div>

            {/* Message input */}
            <div className="bg-secondary-light rounded-lg p-3 mb-3 min-h-[80px] relative">
              <p className="text-sm text-gray-800">
                {typedText}
                {typedText.length < fullText.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-4 bg-primary ml-1"
                  />
                )}
              </p>
            </div>

            {/* Send button */}
            <motion.button
              animate={{ 
                scale: step >= 1 ? [1, 0.95, 1] : [1, 1.05, 1],
              }}
              transition={{ 
                duration: 0.5,
                repeat: step === 0 ? Infinity : 0,
                repeatDelay: 1
              }}
              className="w-full bg-primary text-white rounded-lg py-2 flex items-center justify-center gap-2 font-semibold text-sm"
            >
              Envoyer
              <Send className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Particules d'envoi */}
          {step >= 1 && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-full w-2 h-2 bg-primary rounded-full"
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ 
                    x: 100 + i * 20,
                    y: Math.sin(i) * 20,
                    opacity: 0
                  }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* ÉTAPE 2: Transfert vers LLM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: step >= 2 ? 1 : 0.3,
            scale: step >= 2 ? 1 : 0.8
          }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ 
                rotate: step >= 2 ? 360 : 0,
              }}
              transition={{ 
                duration: 2,
                repeat: step >= 2 && step < 5 ? Infinity : 0,
                ease: "linear"
              }}
              className="w-16 h-16 mx-auto mb-2"
            >
              <div className="w-full h-full rounded-full border-4 border-primary border-t-transparent"></div>
            </motion.div>
            <p className="text-xs font-semibold text-gray-600">Transfert</p>
          </div>
        </motion.div>

        {/* ÉTAPE 3: LLM + Database */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: step >= 3 ? 1 : 0.3,
            scale: step >= 3 ? 1 : 0.8
          }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="bg-white border-2 border-primary rounded-xl p-4 shadow-lg">
            {/* LLM Icon */}
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ 
                  scale: step >= 3 && step < 5 ? [1, 1.2, 1] : 1,
                }}
                transition={{ 
                  duration: 1,
                  repeat: step >= 3 && step < 5 ? Infinity : 0
                }}
                className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center"
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-xs font-bold text-gray-800">LLM</p>
                <p className="text-xs text-gray-500"></p>
              </div>
            </div>

            {/* Connection to DB */}
            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative"
              >
                {/* Animated line */}
                <motion.div
                  className="absolute left-5 top-0 w-0.5 h-6 bg-primary"
                  initial={{ height: 0 }}
                  animate={{ height: 24 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Database */}
                <div className="flex items-center gap-2 pt-6">
                  <motion.div
                    animate={{ 
                      scale: step >= 4 && step < 5 ? [1, 1.15, 1] : 1,
                    }}
                    transition={{ 
                      duration: 0.8,
                      repeat: step >= 4 && step < 5 ? Infinity : 0,
                      delay: 0.3
                    }}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"
                  >
                    <Database className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Base de données</p>
                    <p className="text-xs text-gray-500">Médicale</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Processing indicators */}
            {step >= 3 && step < 5 && (
              <div className="mt-4 space-y-1">
                {['Analyse...', 'Recherche...', 'Traitement...'].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ 
                      duration: 1.5,
                      delay: i * 0.3,
                      repeat: Infinity
                    }}
                    className="text-xs text-gray-500"
                  >
                    {text}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* ÉTAPE 4: Génération de réponse */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: step >= 5 ? 1 : 0.3,
            x: step >= 5 ? 0 : 50
          }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="bg-white border-2 border-primary rounded-xl p-4 shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-gray-700">Réponse</span>
            </div>

            {/* Text lines */}
            <div className="space-y-2 mb-4">
              {[90, 70, 85, 60, 80].map((width, i) => (
                responseLines.includes(i + 1) && (
                  <motion.div
                    key={i}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: `${width}%`, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-2 bg-gray-300 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ 
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ width: '30%' }}
                    />
                  </motion.div>
                )
              ))}
            </div>

            {/* Images/Diagrams */}
            {step >= 6 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 gap-2"
              >
                 {/* Diagram 1 */}
                 <motion.div
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.2 }}
                   className="bg-secondary-light rounded-lg p-3 border border-primary"
                 >
                   <FileImage className="w-full h-12 text-primary" />
                   <p className="text-xs text-center text-gray-600 mt-1">Image médicale</p>
                 </motion.div>

                {/* Diagram 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-secondary-light rounded-lg p-3 border border-primary"
                >
                  <Activity className="w-full h-12 text-primary" />
                  <p className="text-xs text-center text-gray-600 mt-1">Schéma</p>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3, 4, 5, 6].map((s) => (
          <div
            key={s}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              step >= s ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

