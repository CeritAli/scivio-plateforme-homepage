'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Heart, Lightbulb, Shield, Target, Eye } from 'lucide-react'

export default function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            À <span className="text-primary">propos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        {/* Section Mission/Vision en croix */}
        <div className="mb-16 space-y-12">
          {/* Ligne 1 : Notre Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative bg-blue-50 p-8 rounded-xl overflow-hidden">
              {/* Icône en arrière-plan */}
              <div className="absolute -right-4 -top-4 opacity-10 blur-sm">
                <Target className="w-32 h-32 text-primary transform rotate-12" />
              </div>
              
              {/* Titre */}
              <h3 className="text-3xl font-bold text-gray-900 relative z-10">Notre Mission</h3>
            </div>
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nous intégrons intelligemment l&apos;intelligence artificielle et les modèles de langage 
                dans nos plateformes pour améliorer l&apos;expérience des étudiants en médecine et des 
                professionnels de santé dans l&apos;apprentissage et la formation continue des médecins.
              </p>
            </div>
          </motion.div>

          {/* Ligne 2 : Notre Vision (inversé) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="md:order-2 relative bg-blue-50 p-8 rounded-xl overflow-hidden">
              {/* Icône en arrière-plan */}
              <div className="absolute -left-4 -bottom-4 opacity-10 blur-sm">
                <Eye className="w-32 h-32 text-primary transform -rotate-12" />
              </div>
              
              {/* Titre */}
              <h3 className="text-3xl font-bold text-gray-900 relative z-10">Notre Vision</h3>
            </div>
            <div className="md:order-1">
              <p className="text-gray-700 text-lg leading-relaxed">
                Devenir le leader européen de l&apos;éducation médicale numérique en créant
                un écosystème complet qui couvre l&apos;ensemble du parcours, de la formation initiale
                à la pratique professionnelle.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Valeurs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualité</h4>
            <p className="text-gray-600">
              Nos plateformes sont soigneusement conçues pour répondre aux besoins de nos utilisateurs
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Engagement</h4>
            <p className="text-gray-600">
              Nous sommes à l&apos;écoute de nos utilisateurs et intégrons des systèmes de feedback pour améliorer continuellement nos plateformes
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
            <p className="text-gray-600">
              Nous sommes constamment à la recherche de nouvelles fonctionnalités et améliorations pour nos plateformes
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Rigueur Médicale</h4>
            <p className="text-gray-600">
              Nos plateformes sont conçues par des médecins et sont pensées pour répondre aux exigences médicales
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

