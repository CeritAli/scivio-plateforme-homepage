'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedInterfaceProps {
  children: ReactNode
  animationType?: 'float' | 'pulse' | 'slide' | 'scale' | 'none'
  delay?: number
  className?: string
}

export default function AnimatedInterface({
  children,
  animationType = 'float',
  delay = 0,
  className = '',
}: AnimatedInterfaceProps) {
  const animations = {
    float: {
      initial: { y: 0 },
      animate: {
        y: [-10, 10, -10],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
      },
    },
    pulse: {
      initial: { scale: 1 },
      animate: {
        scale: [1, 1.02, 1],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
      },
    },
    slide: {
      initial: { x: -50, opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
          delay,
        },
      },
    },
    scale: {
      initial: { scale: 0.9, opacity: 0 },
      animate: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
          delay,
        },
      },
    },
    none: {
      initial: {},
      animate: {},
    },
  }

  const selectedAnimation = animations[animationType]

  return (
    <motion.div
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      className={className}
    >
      {children}
    </motion.div>
  )
}
