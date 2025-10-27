'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { User, Sparkles } from 'lucide-react'

interface ChatInterfaceProps {
  size?: 'small' | 'medium' | 'large'
  autoPlay?: boolean
}

export default function ChatInterface({ 
  size = 'medium',
  autoPlay = true 
}: ChatInterfaceProps) {
  const [showUser, setShowUser] = useState(false)
  const [showAI, setShowAI] = useState(false)
  const [typingText, setTypingText] = useState('')

  // Question utilisateur
  const userMessage = "Peux-tu m'expliquer comment fonctionne la transmission synaptique dans le système nerveux ?"

  // Réponse IA en markdown avec diagramme
  const aiResponse = `Bien sûr ! La **transmission synaptique** est le processus par lequel les neurones communiquent entre eux. Voici les étapes principales :

### 📊 Les 4 étapes clés

1. **Arrivée du signal** : Le potentiel d'action atteint le bouton synaptique
2. **Libération** : Les vésicules synaptiques libèrent des neurotransmetteurs
3. **Liaison** : Les neurotransmetteurs se fixent sur les récepteurs
4. **Réponse** : Le neurone postsynaptique génère un nouveau signal

### 🧠 Schéma simplifié

\`\`\`
Neurone présynaptique
        ↓
    [Synapse]
   Vésicules → Neurotransmetteurs
        ↓
    Récepteurs
        ↓
Neurone postsynaptique
\`\`\`

### 💡 Point important

> Les neurotransmetteurs comme la **sérotonine**, **dopamine** ou **acétylcholine** jouent des rôles différents selon leur type et leur localisation.

**En résumé** : C'est comme un relais où le message chimique traverse l'espace synaptique pour activer le neurone suivant ! 🚀`

  const sizeClasses = {
    small: 'w-[350px] h-[250px] text-[10px]',
    medium: 'w-[500px] h-[400px] text-xs',
    large: 'w-[700px] h-[550px] text-sm',
  }

  useEffect(() => {
    if (!autoPlay) return

    // Animation en boucle
    const sequence = async () => {
      setShowUser(false)
      setShowAI(false)
      setTypingText('')

      // Afficher message utilisateur
      await new Promise(resolve => setTimeout(resolve, 500))
      setShowUser(true)

      // Afficher début réponse IA avec typing effect
      await new Promise(resolve => setTimeout(resolve, 1000))
      setShowAI(true)

      // Effet typing
      const words = aiResponse.split(' ')
      for (let i = 0; i < Math.min(15, words.length); i++) {
        setTypingText(words.slice(0, i + 1).join(' ') + '...')
        await new Promise(resolve => setTimeout(resolve, 100))
      }

      // Afficher réponse complète
      await new Promise(resolve => setTimeout(resolve, 500))
      setTypingText(aiResponse)

      // Pause avant restart
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Restart loop
      sequence()
    }

    sequence()
  }, [autoPlay])

  return (
    <div className={`${sizeClasses[size]} bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <span className="text-xs font-semibold text-gray-700">Mode Discussion</span>
        <span className="ml-auto text-[10px] text-gray-500 bg-white px-2 py-0.5 rounded-full">IA Active</span>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
        <AnimatePresence>
          {/* Message utilisateur */}
          {showUser && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex gap-2 items-start"
            >
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-gray-600" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm border border-gray-100 max-w-[80%]">
                <p className="text-gray-800 leading-relaxed">{userMessage}</p>
              </div>
            </motion.div>
          )}

          {/* Message IA */}
          {showAI && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex gap-2 items-start"
            >
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-primary/5 rounded-2xl rounded-tl-sm px-3 py-2 border border-primary/10 max-w-[85%]">
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h3: ({node, ...props}) => <h3 className="text-xs font-bold text-gray-800 mt-2 mb-1 flex items-center gap-1" {...props} />,
                      p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed my-1 text-[11px]" {...props} />,
                      strong: ({node, ...props}) => <strong className="text-primary font-semibold" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-0.5 my-1 text-[11px]" {...props} />,
                      li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                      blockquote: ({node, ...props}) => <blockquote className="border-l-2 border-primary pl-2 italic text-gray-600 my-1 text-[10px]" {...props} />,
                      code: ({node, inline, ...props}: any) => 
                        inline ? 
                          <code className="bg-primary/10 text-primary px-1 py-0.5 rounded text-[10px] font-mono" {...props} /> :
                          <code className="block bg-gray-100 p-2 rounded text-[9px] font-mono my-1 whitespace-pre-wrap" {...props} />,
                      pre: ({node, ...props}) => <pre className="my-1 overflow-x-auto" {...props} />,
                    }}
                  >
                    {typingText}
                  </ReactMarkdown>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Typing indicator quand on tape */}
        {showAI && typingText.length < 50 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2 items-center pl-9"
          >
            <div className="bg-primary/10 rounded-full px-3 py-1.5 flex gap-1">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Input (disabled, just for show) */}
      <div className="border-t border-gray-200 bg-white p-3">
        <div className="flex gap-2">
          <input
            type="text"
            disabled
            placeholder="Posez votre question..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-400 focus:outline-none"
          />
          <button
            disabled
            className="bg-primary text-white rounded-xl px-4 py-2 text-xs font-medium opacity-50 cursor-not-allowed"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  )
}
