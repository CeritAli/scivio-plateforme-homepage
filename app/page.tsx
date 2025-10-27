import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Modes from '@/components/Modes'
import Pricing from '@/components/Pricing'
import MissionVision from '@/components/MissionVision'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Modes />
      <Pricing />
      <MissionVision />
      <FAQ />
      <Contact />
      <CTASection />
      <Footer />
    </main>
  )
}

