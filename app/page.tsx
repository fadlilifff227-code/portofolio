import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Certificates from '@/components/certificates'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
