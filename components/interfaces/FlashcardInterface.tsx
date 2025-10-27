'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { RotateCw, ThumbsUp, ThumbsDown, Layers } from 'lucide-react'

interface FlashcardInterfaceProps {
  size?: 'small' | 'medium' | 'large'
  autoPlay?: boolean
}

export default function FlashcardInterface({ 
  size = 'medium',
  autoPlay = true 
}: FlashcardInterfaceProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)

  const cards = [
    {
      question: "Qu'est-ce que la photosynthèse ?",
      answer: "Processus par lequel les plantes convertissent la lumière solaire, l'eau et le CO₂ en glucose et oxygène. Elle se déroule dans les chloroplastes.",
      category: "Biologie"
    },
    {
      question: "Définissez l'homéostasie",
      answer: "Capacité d'un organisme à maintenir un état d'équilibre interne stable malgré les variations de l'environnement externe.",
      category: "Physiologie"
    }
  ]

  const sizeClasses = {
    small: 'w-[350px] h-[250px]',
    medium: 'w-[450px] h-[320px]',
    large: 'w-[600px] h-[420px]',
  }

  useEffect(() => {
    if (!autoPlay) return

    const sequence = async () => {
      // Reset
      setIsFlipped(false)
      
      // Attendre avant flip
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsFlipped(true)

      // Attendre avant action
      await new Promise(resolve => setTimeout(resolve, 2500))
      
      // Next card
      setIsFlipped(false)
      await new Promise(resolve => setTimeout(resolve, 600))
      setCurrentCard((prev) => (prev + 1) % cards.length)

      // Restart
      sequence()
    }

    sequence()
  }, [autoPlay, cards.length])

  const card = cards[currentCard]

  return (
    <div className={`${sizeClasses[size]} relative`}>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-3 rounded-t-2xl border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-gray-700">Mode Flashcards</span>
        </div>
        <span className="text-xs text-gray-600 font-medium">
          {currentCard + 1}/{cards.length}
        </span>
      </div>

      {/* Card Container */}
      <div className="absolute inset-0 pt-[60px] pb-[70px]">
        <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front - Question */}
            <div
              className="absolute inset-0 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col items-center justify-center"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-center space-y-4">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-semibold">
                  {card.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-relaxed px-4">
                  {card.question}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <RotateCw className="w-4 h-4" />
                  <span>Cliquez pour voir la réponse</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/5 rounded-full blur-2xl"></div>
            </div>

            {/* Back - Answer */}
            <div
              className="absolute inset-0 bg-primary/5 rounded-2xl shadow-2xl border border-primary/20 p-6 flex flex-col items-center justify-center"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="text-center space-y-4">
                <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-[10px] font-semibold">
                  Réponse
                </div>
                <p className="text-sm text-gray-800 leading-relaxed px-4">
                  {card.answer}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer - Actions */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-white px-4 py-3 rounded-b-2xl border-t border-gray-200 shadow-lg">
        <AnimatePresence>
          {isFlipped && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex gap-3 justify-center"
            >
              <button
                disabled
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs font-medium opacity-50 cursor-not-allowed"
              >
                <ThumbsDown className="w-4 h-4" />
                À revoir
              </button>
              <button
                disabled
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 border border-green-200 text-green-600 text-xs font-medium opacity-50 cursor-not-allowed"
              >
                <ThumbsUp className="w-4 h-4" />
                Je sais
              </button>
            </motion.div>
          )}
          {!isFlipped && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <button
                disabled
                className="px-6 py-2 rounded-lg bg-primary/10 text-primary text-xs font-medium opacity-50 cursor-not-allowed"
              >
                Révéler la réponse
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentCard ? 'bg-primary w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
