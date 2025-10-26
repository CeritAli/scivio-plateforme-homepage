import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo width={100} height={96} className="opacity-90" />
            </div>
            <p className="text-sm leading-relaxed">
              SCIVIO est spécialisé dans l&apos;éducation médicale avec des solutions innovantes
              pour les étudiants et professionnels de santé.
            </p>
          </div>

          {/* Nos plateformes */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Plateformes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://medstart.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Medstart.fr
                </a>
              </li>
              <li>
                <a
                  href="https://edn.chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  EDN.chat
                </a>
              </li>
              <li>
                <a
                  href="https://mediqare.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Mediqare.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Liens */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#solutions" className="hover:text-primary transition-colors">
                  Nos solutions
                </a>
              </li>
              <li>
                <a href="/#platforms" className="hover:text-primary transition-colors">
                  Nos plateformes
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary transition-colors">
                  Contactez
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="flex items-center justify-center gap-4">
            <span>&copy; {new Date().getFullYear()} SCIVIO. Tous droits réservés.</span>
            <span className="text-gray-600">|</span>
            <a href="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

