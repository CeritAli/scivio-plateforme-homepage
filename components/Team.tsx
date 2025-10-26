'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  description: string
  image?: string
  linkedin?: string
  email?: string
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'CERIT Aliihsan',
      role: 'Président',
      description: 'Description à mettre ici',
      linkedin: '#',
      email: 'cerit.aliihsan@gmail.com'
    },
    {
      name: 'KHAMSENG Jimmy',
      role: 'Directeur Général',
      description: 'Description à mettre ici',
      linkedin: '#',
      email: 'jimmykhamseng@icloud.com'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Notre <span className="text-primary">Équipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe pluridisciplinaire passionnée par l&apos;innovation en éducation médicale
          </p>
        </motion.div>

        {/* Grille des membres */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary">
                {/* Photo du membre */}
                <div className="relative h-64 bg-secondary-light overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-5xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Informations */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.description}
                  </p>

                  {/* Liens sociaux */}
                  <div className="flex gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-200"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

