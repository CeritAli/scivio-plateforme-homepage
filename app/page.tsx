import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'
import MissionVision from '@/components/MissionVision'
import Platforms from '@/components/Platforms'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Solutions />
      <Platforms />
      <MissionVision />
      <Contact />
      <Footer />
    </main>
  )
}

