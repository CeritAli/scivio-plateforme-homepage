'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [platformsOpen, setPlatformsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  // Refs pour chaque élément de navigation
  const logoRef = useRef<HTMLAnchorElement>(null)
  const aboutRef = useRef<HTMLAnchorElement>(null)
  const solutionsRef = useRef<HTMLAnchorElement>(null)
  const platformsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLAnchorElement>(null)
  const contactRef = useRef<HTMLAnchorElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const platforms = [
    { name: 'MedStart', href: '#medstart.fr', description: 'Pour les étudiants en PASS/LAS' },
    { name: 'Edn.chat', href: '#edn.chat', description: 'Pour les étudiants préparant les EDN' },
    { name: 'Clinical Search', href: '#clinicalsearch.fr', description: 'Moteur de recherche intelligent médical' },
  ]

  // Mapping des sections vers leurs refs
  const navRefs: Record<string, React.RefObject<HTMLElement>> = {
    hero: logoRef,
    about: aboutRef,
    solutions: solutionsRef,
    platforms: platformsRef,
    team: teamRef,
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

    const sections = ['about', 'solutions', 'platforms', 'team', 'contact']
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
            <a ref={logoRef} href="#" className="flex items-center gap-3">
              <Logo width={50} height={48} />
              <span className="text-xl font-bold text-black hidden sm:block">
                SCIVIO
              </span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                ref={aboutRef}
                href="#about"
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group text-sm"
              >
                À propos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>

              <a
                ref={solutionsRef}
                href="#solutions"
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group text-sm"
              >
                Nos solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>

              {/* Dropdown Nos plateformes */}
              <div 
                ref={platformsRef}
                className="relative"
                onMouseEnter={() => setPlatformsOpen(true)}
                onMouseLeave={() => setPlatformsOpen(false)}
              >
                <button className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group text-sm flex items-center gap-1">
                  Nos plateformes
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${platformsOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </button>
                
                <AnimatePresence>
                  {platformsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                    >
                      {platforms.map((platform) => (
                        <a
                          key={platform.name}
                          href={platform.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
                        >
                          <div className="font-semibold text-gray-900 text-sm">{platform.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{platform.description}</div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                ref={teamRef}
                href="#team"
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group text-sm"
              >
                Notre équipe
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>

            {/* CTA Button */}
            <a
              ref={contactRef}
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm"
            >
              Contactez-nous
            </a>
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

