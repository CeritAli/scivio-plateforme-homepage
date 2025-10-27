'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-primary/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Titre */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Prêt à révolutionner vos <span className="text-primary">révisions</span> ?
          </h2>

          {/* Sous-titre */}
          <p className="text-xl text-gray-600 mb-10">
            Rejoignez les milliers d&apos;étudiants qui utilisent EDN.chat pour réussir leurs examens
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://edn.chat/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all duration-300"
          >
            Commencer gratuitement
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Note */}
          <p className="text-sm text-gray-500 mt-6">
            Aucune carte bancaire requise • Accès immédiat à tous les modes
          </p>
        </motion.div>
      </div>
    </section>
  )
}
