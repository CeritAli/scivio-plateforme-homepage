'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Heart, Award } from 'lucide-react'

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
            À propos de <span className="text-primary">SCIVIO</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes une entreprise innovante spécialisée dans l&apos;éducation médicale,
            dédiée à transformer l&apos;apprentissage et la pratique médicale grâce à des solutions numériques de pointe
          </p>
        </motion.div>

        {/* Grille Mission/Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary text-white p-3 rounded-lg">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Notre Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Accompagner les étudiants en médecine et les professionnels de santé dans leur réussite
              en proposant des outils pédagogiques innovants, efficaces et adaptés aux défis
              de l&apos;éducation médicale moderne.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary text-white p-3 rounded-lg">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Notre Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Devenir le leader européen de l&apos;éducation médicale numérique en créant
              un écosystème complet qui couvre l&apos;ensemble du parcours, de la formation initiale
              à la pratique professionnelle.
            </p>
          </motion.div>
        </motion.div>

        {/* Valeurs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
            <p className="text-gray-600">
              Des contenus de qualité validés par des experts
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Engagement</h4>
            <p className="text-gray-600">
              Au service de la réussite de nos utilisateurs
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
            <p className="text-gray-600">
              Technologies de pointe pour un apprentissage optimal
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h4>
            <p className="text-gray-600">
              Une communauté d&apos;apprentissage dynamique
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

