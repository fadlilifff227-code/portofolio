export default function About() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a passionate full-stack developer with over 5 years of experience building web applications that solve real-world problems. I specialize in turning complex requirements into elegant, scalable solutions.
              </p>
              <p>
                My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a career focused on creating impactful digital products. I love collaborating with designers and product teams to bring ideas to life.
              </p>
              <p>
                When I&apos;m not coding, you can find me contributing to open-source projects, writing about web development, or exploring the latest technologies in the ecosystem.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">Experience</h3>
                <p className="text-3xl font-bold mt-2">5+ Years</p>
                <p className="text-muted-foreground">Full-Stack Development</p>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">Focus Areas</h3>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">→</span> React & Next.js
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span> Node.js & Express
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span> Database Design
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span> UI/UX Implementation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
