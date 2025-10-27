'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  // Refs pour chaque élément de navigation
  const logoRef = useRef<HTMLAnchorElement>(null)
  const modesRef = useRef<HTMLAnchorElement>(null)
  const pricingRef = useRef<HTMLAnchorElement>(null)
  const aboutRef = useRef<HTMLAnchorElement>(null)
  const faqRef = useRef<HTMLAnchorElement>(null)
  const contactRef = useRef<HTMLAnchorElement>(null)
  const loginRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Mapping des sections vers leurs refs
  const navRefs: Record<string, React.RefObject<HTMLElement>> = {
    hero: logoRef,
    modes: modesRef,
    tarifs: pricingRef,
    about: aboutRef,
    faq: faqRef,
    contact: contactRef,
  }

  // Fonction pour calculer la position de la barre indicatrice
  const updateIndicatorPosition = useCallback((sectionId: string) => {
    const ref = navRefs[sectionId]
    if (!ref?.current || !navRef.current) return

    const element = ref.current
    const navElement = navRef.current
    
    const navRect = navElement.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()
    
    setIndicatorStyle({
      left: elementRect.left - navRect.left,
      width: elementRect.width,
    })
  }, [navRefs])

  // Détection de la direction du scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Intersection Observer pour détecter la section active
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px -40% 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || 'hero'
          setActiveSection(sectionId)
        }
      })
    }, observerOptions)

    // Observer toutes les sections
    const heroSection = document.querySelector('section')
    if (heroSection && !heroSection.id) {
      observer.observe(heroSection)
      heroSection.setAttribute('data-section', 'hero')
    }

    const sections = ['modes', 'tarifs', 'about', 'faq', 'contact']
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Mettre à jour la position quand la section active change
  useEffect(() => {
    updateIndicatorPosition(activeSection)
  }, [activeSection, updateIndicatorPosition])

  // Gérer le resize de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      updateIndicatorPosition(activeSection)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeSection, updateIndicatorPosition])

  // Initialiser la position au montage
  useEffect(() => {
    const timer = setTimeout(() => {
      updateIndicatorPosition('hero')
    }, 600) // Attendre que l'animation d'entrée soit terminée

    return () => clearTimeout(timer)
  }, [updateIndicatorPosition])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`relative w-full max-w-6xl transition-all duration-300 rounded-2xl ${
          scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg'
            : 'bg-white/70 backdrop-blur-md shadow-md'
        }`}
      >
        <div className="px-6 sm:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo et nom - Toujours visibles et plus grands */}
            <a ref={logoRef} href="/" className="flex items-center gap-3">
              <div className="relative">
                <Logo width={60} height={58} />
                <span 
                  className="absolute bottom-1 left-10 leading-none font-bold whitespace-nowrap text-primary"
                  style={{ fontSize: '8.5px' }}
                >
                  par Scivio
                </span>
              </div>
              <span className="text-2xl text-black hidden sm:block">
                <span className="font-bold">Edn</span><span className="text-primary">.</span>chat
              </span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                ref={modesRef}
                href="/#modes"
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group text-sm"
              >
                Modes
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                ref={pricingRef}
                href="/#tarifs"
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group text-sm"
              >
                Tarifs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                ref={aboutRef}
                href="/#about"
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group text-sm"
              >
                À propos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                ref={faqRef}
                href="/#faq"
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group text-sm"
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                ref={contactRef}
                href="/#contact"
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group text-sm"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>

            {/* CTA Button - Se connecter */}
            <div 
              ref={loginRef}
              className="relative"
            >
              <a
                href="https://edn.chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm flex items-center gap-1 bg-primary hover:bg-primary-dark"
              >
                Se connecter
              </a>
            </div>
          </div>

          {/* Barre indicatrice animée */}
          <motion.div
            className="absolute bottom-0 h-1 bg-primary hidden md:block"
            animate={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
            style={{
              transformOrigin: scrollDirection === 'down' ? 'left' : 'right',
            }}
          />
        </div>
      </motion.nav>
    </div>
  )
}

