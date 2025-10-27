'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Zap, Building2, Check } from 'lucide-react'

const plans = [
  {
    id: 'free',
    name: 'Gratuit',
    price: '0€',
    period: '/mois',
    description: 'Parfait pour découvrir nos outils',
    icon: Sparkles,
    features: [
      '15 requêtes classiques/jour',
      '5 requêtes premium/jour',
      'Accès à tous les modes',
      'Support standard',
    ],
    cta: 'Commencer gratuitement',
    ctaLink: 'https://edn.chat/sign-in',
    highlighted: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '15€',
    period: '/mois',
    description: 'Parfait pour des révisions intensives',
    icon: Zap,
    badge: '✨ Populaire',
    features: [
      'Requêtes classiques illimitées',
      'Requêtes premium illimitées',
      'Accès à tous les modes avancés',
      'Support prioritaire',
      'Accès anticipé nouvelles fonctionnalités',
    ],
    cta: 'S\'abonner',
    ctaLink: 'https://edn.chat/sign-in',
    highlighted: true,
    note: '💡 Gemini 2.5 Pro nécessite un abonnement pour maintenir la qualité du service',
  },
  {
    id: 'enterprise',
    name: 'Entreprise',
    price: 'Personnalisé',
    period: '',
    description: 'Pour les établissements et grandes équipes',
    icon: Building2,
    features: [
      'Solution sur mesure',
      'API access',
      'Support dédié',
      'Formation incluse',
      'Facturation adaptée',
    ],
    cta: 'Nous contacter',
    ctaLink: 'mailto:contact@edn.chat',
    highlighted: false,
  },
]

export default function Pricing() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="tarifs" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tarifs <span className="text-primary">simples</span> et transparents
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choisissez l&apos;abonnement qui correspond à vos besoins de révision
          </p>
        </motion.div>

        {/* Grille des offres */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan) => {
            const Icon = plan.icon

            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                whileHover={{ scale: plan.highlighted ? 1.02 : 1.01 }}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-primary/10 shadow-xl'
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
              >
                {/* Badge si présent */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Icône */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.highlighted ? 'bg-primary/20' : 'bg-primary/10'
                }`}>
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Nom du plan */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                {/* Prix */}
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 text-lg">{plan.period}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                {/* Séparateur */}
                <div className="h-px bg-gray-200 mb-6"></div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={plan.ctaLink}
                  target={plan.ctaLink.startsWith('http') ? '_blank' : undefined}
                  rel={plan.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Note si présente */}
                {plan.note && (
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    {plan.note}
                  </p>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-primary">5000+</span>
              <span className="text-gray-600">étudiants nous font confiance</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-primary">98%</span>
              <span className="text-gray-600">de satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
