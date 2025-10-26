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
      phase: 'PASS/LAS',
      target: 'Étudiants 1ère année',
      icon: GraduationCap,
      description: 'Plateforme d\'apprentissage dédiée aux étudiants en première année de médecine',
      features: [
        'QCM et exercices adaptés',
        'Cours complets et fiches',
        'Suivi de progression',
        'Préparation aux concours',
      ],
      url: 'https://medstart.fr',
      position: 'top', // Position sur la courbe
    },
    {
      name: 'EDN.chat',
      phase: 'Préparation EDN',
      target: 'Étudiants 2ème année+',
      icon: Stethoscope,
      description: 'Solution complète pour les étudiants préparant les Épreuves Dématérialisées Nationales',
      features: [
        'Banque de questions EDN',
        'Corrections détaillées',
        'Simulations d\'examens',
        'Analyses de performance',
      ],
      url: 'https://edn.chat',
      position: 'bottom', // Position sur la courbe
    },
    {
      name: 'ClinicalSearch.fr',
      phase: 'Formation continue',
      target: 'Internes & Médecins',
      icon: Search,
      description: 'Moteur de recherche intelligent pour les professionnels de santé',
      features: [
        'Sources médicales fiables',
        'Recommandations actualisées',
        'Interface intuitive',
        'Aide à la décision clinique',
      ],
      url: 'https://clinicalsearch.fr',
      position: 'top', // Position sur la courbe
    },
  ]

  return (
    <section id="platforms" className="py-24 bg-secondary-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nos <span className="text-primary">Plateformes</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un écosystème complet d&apos;outils numériques pour accompagner votre parcours médical,
            de la première année jusqu&apos;à la pratique professionnelle
          </p>
        </motion.div>

        {/* Timeline avec cartes - Version Desktop */}
        <div className="hidden lg:block relative">
          {/* SVG Timeline courbe */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
            <svg 
              width="100%" 
              height="400" 
              viewBox="0 0 1200 400" 
              preserveAspectRatio="xMidYMid meet"
              className="w-full"
            >
              {/* Courbe ondulée */}
              <motion.path
                d="M 50,200 C 200,100 250,100 400,200 C 550,300 650,300 800,200 C 950,100 1000,100 1150,200"
                stroke="#1570EF"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Points de connexion */}
              <motion.circle
                cx="225"
                cy="150"
                r="10"
                fill="#1570EF"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.3 }}
              />
              <motion.circle
                cx="600"
                cy="250"
                r="10"
                fill="#1570EF"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.3 }}
              />
              <motion.circle
                cx="975"
                cy="150"
                r="10"
                fill="#1570EF"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.1, duration: 0.3 }}
              />
            </svg>
          </div>

          {/* Grille de cartes suivant la courbe */}
          <div className="relative grid grid-cols-3 gap-8 pt-40">
            {platforms.map((platform, index) => {
              const Icon = platform.icon
              const isBottom = platform.position === 'bottom'
              
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className={`relative ${isBottom ? 'mt-40' : 'mt-0'}`}
                >
                  {/* Carte */}
                  <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden ${index === 1 ? 'bg-blue-50' : ''}`}>
                    {/* Header de la card */}
                    <div className="bg-primary p-6 text-white">
                      <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-3 mx-auto">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-center">{platform.name}</h3>
                    </div>

                    {/* Badge public cible */}
                    <div className="px-6 pt-4">
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {platform.target}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 font-medium">
                        {platform.phase}
                      </div>
                    </div>

                    {/* Contenu de la card */}
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                        {platform.description}
                      </p>

                      {/* Liste des features */}
                      <ul className="space-y-2 mb-6">
                        {platform.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
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
                        className="group inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors text-sm"
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Timeline verticale - Version Mobile/Tablet */}
        <div className="lg:hidden relative">
          {/* Ligne verticale */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5">
            <motion.div
              className="w-full bg-primary"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Cartes empilées */}
          <div className="space-y-12 pl-20">
            {platforms.map((platform, index) => {
              const Icon = platform.icon
              
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className="relative"
                >
                  {/* Point de connexion */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.3 }}
                    className="absolute -left-[4.5rem] top-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                  >
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </motion.div>

                  {/* Carte */}
                  <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden ${index === 1 ? 'bg-blue-50' : ''}`}>
                    {/* Header */}
                    <div className="bg-primary p-6 text-white">
                      <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold">{platform.name}</h3>
                    </div>

                    {/* Badge */}
                    <div className="px-6 pt-4">
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {platform.target}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 font-medium">
                        {platform.phase}
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                        {platform.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {platform.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
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

                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors text-sm"
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 text-center"
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

