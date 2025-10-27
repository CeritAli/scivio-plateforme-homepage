'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, FileText, Mic, Dumbbell, Brain, GraduationCap, Check } from 'lucide-react'

const modes = [
  {
    id: 1,
    icon: MessageSquare,
    emoji: '💬',
    title: 'Chat IA Médical',
    description: 'Posez vos questions et obtenez des réponses précises basées sur les référentiels médicaux officiels (collèges de médecine, fiches Lisa, recommandations HAS)',
    features: [
      'Réponses basées sur les référentiels R2C',
      '3 modes de chat (Référentiel, Rapide, Approfondi)',
      'Historique des conversations sauvegardé',
    ],
    imagePosition: 'right',
  },
  {
    id: 2,
    icon: FileText,
    emoji: '📄',
    title: 'Assistant LCA',
    description: 'Chargez votre article de LCA et posez toutes vos questions. L\'assistant vous aide à comprendre l\'article et répond à vos interrogations basées sur les référentiels',
    features: [
      'Upload d\'article PDF',
      'Questions contextuelles sur l\'article',
      'Explications personnalisées',
    ],
    imagePosition: 'left',
  },
  {
    id: 3,
    icon: Mic,
    emoji: '🩺',
    title: 'Simulateur ECOS Audio',
    description: 'Simulation de station ECOS audio. Interagissez avec un PS ou PSS virtuel comme dans une vraie station ECOS',
    features: [
      'Interaction 100% vocale avec patient IA',
      'Correction automatique détaillée',
      'Transcription complète sauvegardée',
    ],
    badge: '🔥 Première en France !',
    imagePosition: 'right',
  },
  {
    id: 4,
    icon: Dumbbell,
    emoji: '🏋️',
    title: 'Entraînement EDN',
    description: 'Créez et répondez à des questions uniques ou des dossiers progressifs type EDN',
    features: [
      'Questions type EDN générées par IA',
      'Dossiers progressifs personnalisés',
      'Corrections détaillées avec explications',
    ],
    imagePosition: 'left',
  },
  {
    id: 5,
    icon: Brain,
    emoji: '🧠',
    title: 'Flashcards & Anki',
    description: 'Créez des flashcards personnalisées pour vos révisions',
    features: [
      'Génération automatique de flashcards',
      'Export vers Anki',
      'Système de répétition espacée',
    ],
    imagePosition: 'right',
  },
  {
    id: 6,
    icon: GraduationCap,
    emoji: '🎓',
    title: 'Apprentissage Guidé',
    description: 'Soyez guidé dans votre apprentissage avec des questions et des corrections personnalisées',
    features: [
      'Parcours d\'apprentissage adaptatif',
      'Progression suivie en temps réel',
      'Recommandations personnalisées',
    ],
    imagePosition: 'left',
  },
]

export default function Modes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="modes" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            6 modes pour vous préparer aux <span className="text-primary">EDN</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des outils basés sur une intelligence artificielle entraînée spécialement sur les référentiels de médecine du 2ème cycle
          </p>
        </motion.div>

        {/* Liste des modes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-32"
        >
          {modes.map((mode) => {
            const Icon = mode.icon
            const isImageRight = mode.imagePosition === 'right'

            return (
              <motion.div
                key={mode.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isImageRight ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Contenu texte */}
                <div className={isImageRight ? '' : 'lg:col-start-2'}>
                  {/* Badge si présent */}
                  {mode.badge && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 }}
                      className="inline-block mb-4"
                    >
                      <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                        {mode.badge}
                      </span>
                    </motion.div>
                  )}

                  {/* Titre */}
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-4xl">{mode.emoji}</span>
                    {mode.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {mode.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {mode.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Mockup/Illustration */}
                <div className={isImageRight ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    {/* Container pour l'icône/mockup */}
                    <div className="bg-primary/5 rounded-3xl p-12 flex items-center justify-center min-h-[400px]">
                      <Icon className="w-48 h-48 text-primary" strokeWidth={1.5} />
                    </div>

                    {/* Effet décoratif */}
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 blur-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
