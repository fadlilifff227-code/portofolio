import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

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
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard built with Next.js and PostgreSQL.',
      image: 'bg-gradient-to-br from-blue-500 to-blue-600',
      tags: ['Next.js', 'React', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management application with user authentication, team workspaces, and instant notifications using WebSocket technology.',
      image: 'bg-gradient-to-br from-purple-500 to-purple-600',
      tags: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'Docker'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics dashboard displaying real-time metrics, user behavior analytics, and customizable reports with data visualization.',
      image: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      tags: ['React', 'D3.js', 'REST API', 'PostgreSQL', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Social platform featuring user profiles, post creation, real-time notifications, and direct messaging with modern UI and smooth interactions.',
      image: 'bg-gradient-to-br from-pink-500 to-pink-600',
      tags: ['Next.js', 'Firebase', 'Vercel', 'TypeScript', 'WebSocket'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 5,
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool leveraging OpenAI API to create blog posts, social media content, and marketing copy with customizable templates.',
      image: 'bg-gradient-to-br from-orange-500 to-orange-600',
      tags: ['Next.js', 'OpenAI API', 'React', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, real-time weather data, and interactive weather maps built with modern web technologies.',
      image: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      tags: ['React', 'Weather API', 'Leaflet', 'Tailwind CSS', 'Axios'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ]

  return (
    <section id="projects" className="py-20 sm:py-32 bg-background">
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
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                {/* Project Image */}
                <div className={`${project.image} h-48 relative overflow-hidden`}>
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
