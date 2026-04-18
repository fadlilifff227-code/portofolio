import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-card pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">

          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-accent via-accent/50 to-background shadow-2xl shadow-accent/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-card border-4 border-background relative">
                <Image
                  src="/OJAN.jpeg"
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="inline-block">
            <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              Welcome to my portfolio Alif
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
            ALIF FADLI
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-muted-foreground mt-2">
            Full Stack <span className="text-accent">Developer</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Crafting modern web applications with cutting-edge technologies. Specialized in building scalable, performant, and user-focused digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-semibold hover:bg-card transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-lg bg-card hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
