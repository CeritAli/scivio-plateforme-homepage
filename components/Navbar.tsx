'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#platforms', label: 'Plateformes' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`w-full max-w-6xl transition-all duration-300 rounded-2xl ${
          scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg'
            : 'bg-white/70 backdrop-blur-md shadow-md'
        }`}
      >
        <div className="px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <Logo width={40} height={38} className="transition-transform group-hover:scale-110" />
              <span className="text-lg font-bold text-gray-900 hidden sm:block">
                SCIVIO
              </span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group text-sm"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </motion.nav>
    </div>
  )
}

