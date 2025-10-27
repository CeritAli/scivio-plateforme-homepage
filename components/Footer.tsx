import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo et description */}
          <div>
            <div className="mb-4">
              <Logo width={100} height={96} className="opacity-90" />
            </div>
            <p className="text-sm leading-relaxed">
              EDN.chat est votre compagnon IA pour préparer les Épreuves Dématérialisées Nationales.
              Une solution innovante pour accompagner les étudiants en médecine.
            </p>
          </div>

          {/* Liens */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#about" className="hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="https://edn.chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Accéder à EDN.chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="flex items-center justify-center gap-4">
            <span>&copy; {new Date().getFullYear()} EDN.chat. Tous droits réservés.</span>
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

