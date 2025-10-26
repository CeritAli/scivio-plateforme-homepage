'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { GraduationCap, Stethoscope, Search, ArrowRight, X, CheckCircle, Users, BookOpen, TrendingUp } from 'lucide-react'

interface Platform {
  name: string
  phase: string
  target: string
  icon: any
  description: string
  features: string[]
  url: string
  position: 'top' | 'bottom'
  // Données détaillées pour la vue étendue
  detailedDescription: string
  benefits: string[]
  stats: { icon: any, label: string, value: string }[]
  technologies: string[]
}

export default function Platforms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null)

  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPlatform(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const platforms: Platform[] = [
    {
      name: 'Medstart.fr',
      phase: 'PASS/LAS',
      target: 'Étudiants 1ère année',
      icon: GraduationCap,
      description: 'Plateforme d\'apprentissage dédiée aux étudiants en première année de médecine',
      features: [
        'Chat interactif',
        'Cours complets et fiches',
        'Suivi de progression',
        'Préparation aux concours',
      ],
      url: 'https://medstart.fr',
      position: 'top',
      detailedDescription: 'MedStart est la plateforme de référence pour les étudiants en PASS/LAS. Grâce à notre intelligence artificielle avancée et notre base de données exhaustive, nous vous accompagnons dans votre réussite avec des outils pédagogiques innovants et adaptés aux exigences du concours.',
      benefits: [
        'Accès à une bibliothèque complète de cours validés par des professeurs',
        'Chat IA disponible 24/7 pour répondre à toutes vos questions',
        'Génération automatique de fiches de révision personnalisées',
        'QCM adaptatifs qui s\'ajustent à votre niveau',
        'Suivi détaillé de votre progression par matière',
        'Communauté d\'entraide avec d\'autres étudiants',
      ],
      stats: [
        { icon: Users, label: 'Utilisateurs actifs', value: '10,000+' },
        { icon: BookOpen, label: 'Cours disponibles', value: '500+' },
        { icon: TrendingUp, label: 'Taux de réussite', value: '85%' },
      ],
      technologies: ['IA conversationnelle', 'Apprentissage adaptatif', 'Analyse de progression'],
    },
    {
      name: 'EDN.chat',
      phase: 'Préparation EDN',
      target: 'Étudiants 2ème année+',
      icon: Stethoscope,
      description: 'Solution complète pour les étudiants préparant les Épreuves Dématérialisées Nationales',
      features: [
        'Chat interactif',
        'Aide à la lecture critique des articles',
        'Simulateur audio de stations ECOS',
        'Analyses de performance',
      ],
      url: 'https://edn.chat',
      position: 'bottom',
      detailedDescription: 'EDN.chat révolutionne la préparation aux EDN en combinant intelligence artificielle et expertise médicale. Notre plateforme vous offre un accompagnement personnalisé pour maîtriser la lecture critique d\'articles et exceller aux stations ECOS grâce à nos simulateurs audio immersifs.',
      benefits: [
        'Simulateur ECOS avec reconnaissance vocale et feedback en temps réel',
        'Bibliothèque d\'articles médicaux avec analyses guidées',
        'Entraînement aux QCM de type EDN avec corrections détaillées',
        'Parcours d\'apprentissage personnalisés selon vos objectifs',
        'Statistiques avancées pour identifier vos points faibles',
        'Mises à jour continues selon les référentiels officiels',
      ],
      stats: [
        { icon: Users, label: 'Étudiants accompagnés', value: '15,000+' },
        { icon: BookOpen, label: 'Articles analysés', value: '1,000+' },
        { icon: TrendingUp, label: 'Simulations ECOS', value: '50,000+' },
      ],
      technologies: ['IA médicale', 'Reconnaissance vocale', 'Analyse sémantique'],
    },
    {
      name: 'Mediqare.fr',
      phase: 'Formation continue',
      target: 'Internes & Médecins',
      icon: Search,
      description: 'Moteur de recherche intelligent pour les professionnels de santé',
      features: [
        'Moteur de recherche intelligent',
        'Recommandations actualisées',
        'Interface intuitive',
        'Aide à la décision clinique',
      ],
      url: 'https://mediqare.fr',
      position: 'top',
      detailedDescription: 'Mediqare transforme votre pratique médicale quotidienne en vous donnant un accès instantané aux dernières recommandations et protocoles validés. Notre moteur de recherche intelligent comprend vos questions et vous fournit des réponses précises et fiables.',
      benefits: [
        'Recherche en langage naturel - posez vos questions comme à un collègue',
        'Accès aux dernières recommandations HAS et sociétés savantes',
        'Protocoles de soins actualisés et validés',
        'Calculateurs médicaux intégrés',
        'Alertes sur les nouvelles publications importantes',
        'Compatible mobile pour une utilisation en consultation',
      ],
      stats: [
        { icon: Users, label: 'Professionnels', value: '5,000+' },
        { icon: BookOpen, label: 'Protocoles', value: '2,000+' },
        { icon: TrendingUp, label: 'Recherches/jour', value: '30,000+' },
      ],
      technologies: ['Recherche sémantique', 'NLP médical', 'Veille scientifique'],
    },
  ]

  const handleSelectPlatform = (index: number) => {
    setSelectedPlatform(index)
  }

  const handleClosePlatform = () => {
    setSelectedPlatform(null)
  }

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
            Nos <span style={{
              background: 'linear-gradient(to right, #005492, #107bb3, #3d9bcf)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Plateformes</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un écosystème complet d&apos;outils numériques pour accompagner votre parcours médical,
            de la première année jusqu&apos;à la pratique professionnelle
          </p>
        </motion.div>

        {/* Timeline avec cartes - Version Desktop */}
        <div className="hidden lg:block relative">
          <AnimatePresence mode="wait">
            {selectedPlatform === null ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
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
                <div className="relative grid grid-cols-3 gap-8 pt-20">
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
                        <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow ${index === 1 ? 'bg-blue-50' : ''}`}>
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
                            <button
                              onClick={() => handleSelectPlatform(index)}
                              className="group inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors text-sm"
                            >
                              En savoir plus
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ) : (
              /* Carte Étendue */
              <motion.div
                key="expanded"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary overflow-hidden">
                  {/* Bouton de fermeture */}
                  <button
                    onClick={handleClosePlatform}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>

                  {/* Contenu de la carte étendue */}
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Colonne gauche - Description */}
                    <div className="space-y-6">
                      {/* Header */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center">
                            {(() => {
                              const Icon = platforms[selectedPlatform].icon
                              return <Icon className="w-8 h-8 text-white" />
                            })()}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                              {platforms[selectedPlatform].name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                                {platforms[selectedPlatform].target}
                              </span>
                              <span className="text-sm text-gray-500">
                                {platforms[selectedPlatform].phase}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Description détaillée */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {platforms[selectedPlatform].detailedDescription}
                        </p>
                      </motion.div>

                      {/* CTA Principal */}
                      <motion.a
                        href={platforms[selectedPlatform].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                        style={{
                          background: 'linear-gradient(to right, #005492, #107bb3, #3d9bcf)'
                        }}
                      >
                        Accéder à {platforms[selectedPlatform].name}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>

                    {/* Colonne droite - Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20 flex items-center justify-center min-h-[400px]"
                    >
                      {(() => {
                        const Icon = platforms[selectedPlatform].icon
                        return <Icon className="w-32 h-32 text-primary/30" />
                      })()}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Timeline verticale - Version Mobile/Tablet */}
        <div className="lg:hidden relative">
          <AnimatePresence mode="wait">
            {selectedPlatform === null ? (
              <motion.div
                key="mobile-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
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

                            <button
                              onClick={() => handleSelectPlatform(index)}
                              className="group inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors text-sm"
                            >
                              En savoir plus
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ) : (
              /* Version mobile de la carte étendue */
              <motion.div
                key="mobile-expanded"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary overflow-hidden">
                  {/* Bouton de fermeture */}
                  <button
                    onClick={handleClosePlatform}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>

                  <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                        {(() => {
                          const Icon = platforms[selectedPlatform].icon
                          return <Icon className="w-7 h-7 text-white" />
                        })()}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {platforms[selectedPlatform].name}
                        </h3>
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mt-1">
                          {platforms[selectedPlatform].target}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">
                      {platforms[selectedPlatform].detailedDescription}
                    </p>

                    {/* Image */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20 flex items-center justify-center min-h-[250px]">
                      {(() => {
                        const Icon = platforms[selectedPlatform].icon
                        return <Icon className="w-24 h-24 text-primary/30" />
                      })()}
                    </div>

                    {/* CTA */}
                    <a
                      href={platforms[selectedPlatform].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                      style={{
                        background: 'linear-gradient(to right, #005492, #107bb3, #3d9bcf)'
                      }}
                    >
                      Accéder à {platforms[selectedPlatform].name}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
