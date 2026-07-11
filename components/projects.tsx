import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  live?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Barber Shop',
      description: 'A modern barber shop website with premium UI/UX, animated sections, service showcase, booking interface, testimonials, and responsive design built using Next.js, TypeScript, Tailwind CSS, and Framer Motion.',
      image: "/barber.png",
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://aibarbershop.vercel.app'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management application with user authentication, team workspaces, and instant notifications using WebSocket technology.',
      image: '/task-app.png',
      tags: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'Docker'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics dashboard displaying real-time metrics, user behavior analytics, and customizable reports with data visualization.',
      image: '/analytics.png',
      tags: ['React', 'D3.js', 'REST API', 'PostgreSQL', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Social platform featuring user profiles, post creation, real-time notifications, and direct messaging with modern UI and smooth interactions.',
      image: '/social-app.png',
      tags: ['Next.js', 'Firebase', 'Vercel', 'TypeScript', 'WebSocket'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 5,
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool leveraging OpenAI API to create blog posts, social media content, and marketing copy with customizable templates.',
      image: '/ai-gen.png',
      tags: ['Next.js', 'OpenAI API', 'React', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, real-time weather data, and interactive weather maps built with modern web technologies.',
      image: '/weather-app.png',
      tags: ['React', 'Weather API', 'Leaflet', 'Tailwind CSS', 'Axios'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ]

  return (
    <section id="projects" className="py-20 sm:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card/40 backdrop-blur-sm rounded-lg overflow-hidden border border-border/50 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  {project.image.startsWith('/') || project.image.startsWith('http') ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full ${project.image}`} />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-accent/10 text-accent rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors ml-auto"
                      >
                        Live
                        <ExternalLink size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
