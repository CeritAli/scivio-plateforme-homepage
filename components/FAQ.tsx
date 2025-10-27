'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Brain, Grid3x3, Cpu, CreditCard, Server, Mic, Gift, Rocket } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'Qu\'est-ce qu\'EDN.chat ?',
    answer: 'EDN.chat est une plateforme de préparation aux EDN utilisant une intelligence artificielle spécialement conçue pour les étudiants en médecine. Notre plateforme propose 6 outils différents utilisant une IA de raisonnement entraînée sur :',
    details: [
      'Les référentiels nationaux du 2ème cycle',
      'Les collèges de médecine',
      'Les fiches Lisa',
      'Les recommandations HAS',
      '+9000 cartes de données à jour',
    ],
    icon: Brain,
  },
  {
    id: 2,
    question: 'Quels sont les modes disponibles ?',
    answer: 'EDN.chat propose 6 modes pour vous préparer aux EDN :',
    details: [
      '💬 Chat IA médical : Posez vos questions et obtenez des réponses basées sur les référentiels',
      '📄 Assistant LCA : Chargez votre article de LCA et posez toutes vos questions',
      '🩺 Simulateur ECOS audio : Simulation médicale complètement vocale avec un patient IA',
      '🏋️ Entraînement EDN : Créez et répondez à des questions type EDN avec corrections',
      '🧠 Flashcards & Anki : Créez des flashcards personnalisées et exportez-les vers Anki',
      '🎓 Apprentissage : Soyez guidé dans votre apprentissage avec des questions personnalisées',
    ],
    icon: Grid3x3,
  },
  {
    id: 3,
    question: 'Comment fonctionne l\'IA ?',
    answer: 'Notre intelligence artificielle utilise Gemini 2.5 Pro, un modèle de raisonnement avancé spécialement entraîné sur les référentiels médicaux français. Elle analyse vos questions, accède à notre base de données de +9000 cartes médicales et génère des réponses précises et personnalisées adaptées à votre niveau et vos besoins.',
    details: [],
    icon: Cpu,
  },
  {
    id: 4,
    question: 'Quels sont les tarifs ?',
    answer: 'Nous proposons 3 formules adaptées à vos besoins :',
    details: [
      '💚 Gratuit : 15 requêtes classiques/jour + 5 requêtes premium/jour',
      '⚡ Premium (15€/mois) : Requêtes illimitées + support prioritaire',
      '🏢 Entreprise : Solution personnalisée pour établissements',
    ],
    icon: CreditCard,
  },
  {
    id: 5,
    question: 'Pourquoi un abonnement payant ?',
    answer: 'Votre abonnement nous permet de :',
    details: [
      'Utiliser Gemini Pro 2.5, une IA de raisonnement avancée aux coûts d\'exploitation élevés',
      'Maintenir et mettre à jour régulièrement notre base de données médicale',
      'Développer de nouvelles fonctionnalités pour mieux vous accompagner',
      'Financer nos serveurs spécialisés et notre infrastructure',
      'Assurer la qualité et la pérennité du service',
    ],
    icon: Server,
  },
  {
    id: 6,
    question: 'Comment fonctionne le mode ECOS Vocal ?',
    answer: 'Le mode ECOS Vocal est une première en France ! Il s\'agit d\'une simulation médicale complètement vocale :',
    details: [
      'Vous interagissez vocalement avec un patient virtuel comme dans une vraie station ECOS',
      'L\'IA joue le rôle du PS/PSS et vous jouez le médecin',
      'Vous pouvez demander des examens à l\'évaluateur en disant "je demande à l\'évaluateur"',
      'À la fin, vous recevez une correction automatique détaillée',
      'La transcription complète de votre consultation est sauvegardée',
    ],
    icon: Mic,
    badge: '🔥 Première en France',
  },
  {
    id: 7,
    question: 'Puis-je essayer gratuitement ?',
    answer: 'Absolument ! Notre offre gratuite vous permet de découvrir tous nos modes sans engagement. Vous bénéficiez de 15 requêtes classiques et 5 requêtes premium par jour, ce qui est largement suffisant pour tester la plateforme et voir si elle correspond à vos besoins.',
    details: [],
    icon: Gift,
  },
  {
    id: 8,
    question: 'Fonctionnalités à venir',
    answer: 'Nous travaillons constamment sur de nouvelles fonctionnalités :',
    details: [
      '🌐 Recherche web : Accès à la recherche internet pour certains modes',
      '🩺 Nouvelles stations ECOS : Ajout régulier de nouvelles stations d\'entraînement',
      '📊 Statistiques avancées : Suivi détaillé de votre progression',
      '👥 Mode collaboratif : Révisez en groupe avec vos camarades',
    ],
    icon: Rocket,
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeQuestion, setActiveQuestion] = useState(1)
  const answersRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      // Trouver quelle réponse est actuellement visible
      const scrollPosition = window.scrollY + window.innerHeight / 2

      answersRef.current.forEach((answerEl, index) => {
        if (answerEl) {
          const rect = answerEl.getBoundingClientRect()
          const absoluteTop = window.scrollY + rect.top
          const absoluteBottom = absoluteTop + rect.height

          if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
            setActiveQuestion(index + 1)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToQuestion = (questionId: number) => {
    const answerEl = answersRef.current[questionId - 1]
    if (answerEl) {
      answerEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section id="faq" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Questions <span className="text-primary">fréquentes</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur EDN.chat
          </p>
        </motion.div>

        {/* Contenu FAQ - Layout 1/3 - 2/3 */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Partie gauche - Questions (1/3) - STICKY */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="lg:sticky lg:top-32 space-y-2">
              {faqs.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => scrollToQuestion(faq.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeQuestion === faq.id
                      ? 'bg-primary/10 text-primary font-bold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="text-sm">{faq.question}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Partie droite - Réponses (2/3) - SCROLL */}
          <div className="lg:col-span-2 space-y-24">
            {faqs.map((faq, index) => {
              const Icon = faq.icon

              return (
                <motion.div
                  key={faq.id}
                  ref={(el) => {
                    answersRef.current[index] = el
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="min-h-[60vh] flex flex-col justify-center"
                >
                  {/* Badge si présent */}
                  {faq.badge && (
                    <div className="mb-4">
                      <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                        {faq.badge}
                      </span>
                    </div>
                  )}

                  {/* Icône et Question */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Réponse */}
                  <div className="bg-primary/5 rounded-2xl p-8">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      {faq.answer}
                    </p>

                    {/* Détails si présents */}
                    {faq.details.length > 0 && (
                      <ul className="space-y-2 mt-4">
                        {faq.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
