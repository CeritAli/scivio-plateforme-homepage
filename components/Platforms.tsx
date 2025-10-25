'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Stethoscope, Search, ArrowRight } from 'lucide-react'

export default function Platforms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const platforms = [
    {
      name: 'Medstart.fr',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
      description: 'Plateforme d\'apprentissage dédiée aux étudiants en première année de médecine (PASS/L.AS)',
      features: [
        'QCM et exercices adaptés au programme',
        'Cours complets et fiches de révision',
        'Suivi de progression personnalisé',
        'Préparation optimale aux concours',
      ],
      url: 'https://medstart.fr',
    },
    {
      name: 'EDN.chat',
      icon: Stethoscope,
      color: 'from-primary to-primary-dark',
      description: 'Solution complète pour les étudiants préparant les Épreuves Dématérialisées Nationales',
      features: [
        'Banque de questions EDN actualisée',
        'Corrections détaillées et expliquées',
        'Simulations d\'examens blancs',
        'Statistiques et analyses de performance',
      ],
      url: 'https://edn.chat',
    },
    {
      name: 'ClinicalSearch.fr',
      icon: Search,
      color: 'from-teal-500 to-teal-600',
      description: 'Moteur de recherche intelligent pour les professionnels de santé',
      features: [
        'Réponses basées sur des sources fiables',
        'Accès rapide aux recommandations',
        'Interface intuitive et rapide',
        'Aide à la décision clinique',
      ],
      url: 'https://clinicalsearch.fr',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="platforms" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nos <span className="text-primary">Plateformes</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un écosystème complet d&apos;outils numériques pour accompagner votre parcours médical,
            de la première année aux études jusqu&apos;à la pratique professionnelle
          </p>
        </motion.div>

        {/* Grille de plateformes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 gap-8"
        >
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <motion.div
                key={platform.name}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Header de la card avec gradient */}
                <div className={`bg-gradient-to-r ${platform.color} p-8 text-white`}>
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                </div>

                {/* Contenu de la card */}
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {platform.description}
                  </p>

                  {/* Liste des features */}
                  <ul className="space-y-3 mb-8">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats ou CTA supplémentaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-primary">Des milliers d&apos;étudiants et de professionnels</span> font confiance
              à nos plateformes pour leur formation et leur pratique médicale quotidienne
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

