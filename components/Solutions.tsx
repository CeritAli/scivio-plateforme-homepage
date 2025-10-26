'use client'

import { motion } from 'framer-motion'
import { MessageSquare, BookOpen, GraduationCap, TrendingUp } from 'lucide-react'
import WorkflowAnimation from './WorkflowAnimation'
import { RagflowLogo, ChutesLogo } from './LogosSvg'

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nos <span className="text-primary">solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un écosystème complet d&apos;apprentissage intégrant des workflows et des agents IA 
            avancés et innovants pour révolutionner l&apos;apprentissage médical
          </p>
        </motion.div>

        {/* Workflow Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Comment fonctionne notre workflow d&apos;agents IA ?
          </h3>
          
          <WorkflowAnimation />
        </motion.div>

        {/* Applications intelligentes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-20"
        >
          {/* Titre */}
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Application intelligente de nos <span className="text-primary">agents IA</span>
          </h3>

          {/* Grille horizontale 4 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'Réponses intelligentes et multimodales',
                description: 'Réponses enrichies avec images médicales, diagrammes explicatifs et schémas anatomiques pour une compréhension optimale'
              },
              {
                icon: BookOpen,
                title: 'Supports de cours',
                description: 'Génération automatique de cours structurés, flashcards personnalisées et fiches de révision adaptées à votre niveau'
              },
              {
                icon: GraduationCap,
                title: 'Apprentissage guidé et entraînement',
                description: 'Parcours d\'apprentissage personnalisé avec création automatique de quiz adaptés à votre progression'
              },
              {
                icon: TrendingUp,
                title: 'Analyse de progression',
                description: 'Création automatique de carnet d\'erreur permettant à l\'étudiant de cibler ses révisions'
              }
            ].map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col items-center text-center p-6 rounded-xl ${isEven ? '' : 'flex-col-reverse bg-blue-50'}`}
                >
                  {/* Icône */}
                  <div className={isEven ? 'mb-4' : 'mt-4'}>
                    <Icon className="w-12 h-12 text-primary" />
                  </div>

                  {/* Contenu (titre + description) */}
                  <div>
                    {/* Titre */}
                    <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Propulsé par - Sortie du conteneur max-w-7xl pour être vraiment centré */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-black text-lg mb-8 font-medium text-center">Propulsé par</p>
          <div className="flex items-center justify-center gap-8">
              {/* Ragflow */}
              <a 
                href="https://ragflow.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 transition-opacity hover:opacity-70"
              >
                <div className="h-12 flex items-center justify-center">
                  <RagflowLogo />
                </div>
                <span className="text-black font-medium">Ragflow</span>
              </a>

              {/* Chutes.ai */}
              <a 
                href="https://chutes.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 transition-opacity hover:opacity-70"
              >
                <div className="h-12 flex items-center justify-center">
                  <ChutesLogo />
                </div>
                <span className="text-black font-medium">Chutes.ai</span>
              </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

