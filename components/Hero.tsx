'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Logo from './Logo'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Contenu */}
          <div className="relative text-center lg:text-left overflow-hidden">
            {/* Logo en arrière-plan avec flou */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-sm pointer-events-none">
              <Logo width={400} height={384} />
            </div>

            {/* Logo animé - REMOVED */}

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 relative z-10"
            >
              {/* Scivio title removed - now in navbar */}
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 max-w-xl relative z-10"
            >
              Innovation en<br />Éducation Médicale
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 mb-12 relative z-10"
            >
              Des plateformes innovantes pour accompagner les étudiants en médecine
              et les professionnels de santé dans leur parcours d&apos;apprentissage et de pratique
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center relative z-10"
            >
              <a
                href="#platforms"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Découvrir nos plateformes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Nous contacter
              </a>
            </motion.div>
          </div>

          {/* Colonne droite - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-gray-200">
              <Image
                src="/images/hero-image.webp"
                alt="Scivio Hero Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

