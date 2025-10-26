import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales - Scivio',
  description: 'Mentions légales du site Scivio - Innovation en éducation médicale',
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Espace pour la navbar fixe */}
      <div className="h-24"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Titre */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
          Mentions <span style={{
            background: 'linear-gradient(to right, #005492, #107bb3, #3d9bcf)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>légales</span>
        </h1>

        {/* Contenu */}
        <div className="prose prose-lg max-w-none">
          {/* Identité */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Identité</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              L&apos;éditeur du site web{' '}
              <a href="https://www.scivio.fr/" className="text-primary hover:underline">
                https://www.scivio.fr/
              </a>{' '}
              est :
            </p>
            <div className="bg-gray-50 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Scivio</strong>, une société par actions simplifiée au capital de 20 euros, 
                immatriculée au Registre du Commerce et des Sociétés de Bourg-en-Bresse sous le numéro <strong>992 695 510</strong>, 
                dont le siège social est situé au <strong>9 Impasse du Verger 01100 Géovreisset, France</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Adresse e-mail de contact :{' '}
                <a href="mailto:contact@scivio.fr" className="text-primary hover:underline">
                  contact@scivio.fr
                </a>
              </p>
            </div>
          </section>

          {/* Finalité */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finalité du site</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site a pour objectif la présentation des activités de l&apos;entreprise Scivio.
            </p>
          </section>



          {/* Hébergement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le site{' '}
              <a href="https://www.scivio.fr/" className="text-primary hover:underline">
                https://www.scivio.fr/
              </a>{' '} est hébergé par :
            </p>
            <div className="bg-gray-50 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Informaten</strong><br />
                Max Schumann, Luca Drefke,
Alec Putzmann Informaten GbR
Hämmerlingstraße 27
12555 Berlin
VAT ID No.: DE360762201
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Site web :{' '}
                <a href="https://informaten.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://informaten.com/
                </a>
              </p>
            </div>
          </section>

          {/* Protection des données */}

        </div>
      </div>

      <Footer />
    </main>
  )
}

