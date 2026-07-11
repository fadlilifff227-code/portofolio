'use client'

import React from 'react'

interface Skill {
  name: string
  category: 'frontend' | 'backend'
  dotColor: string
  icon: React.ReactNode
}

export default function Skills() {
  const skills: Skill[] = [
    // Frontend
    {
      name: 'HTML5',
      category: 'frontend',
      dotColor: 'bg-orange-500 text-orange-500',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#E34F26">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.119l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.28l.39 4.542 5.32 1.483 5.37-1.478.744-8.607H8.531z" />
        </svg>
      )
    },
    {
      name: 'CSS3',
      category: 'frontend',
      dotColor: 'bg-blue-500 text-blue-500',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#1572B6">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm15.176 6.842l-.248 2.82H8.384l.217 2.48h7.93l-.582 6.64-3.956 1.1-3.996-1.106-.255-2.92H5.1l.487 5.56 6.4 1.77 6.45-1.767 1.05-12.022H6.676zm0 0" />
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      dotColor: 'bg-yellow-500 text-yellow-500',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#F7DF1E">
          <rect width="24" height="24" fill="#F7DF1E" rx="3" />
          <path d="M1.52 0h20.96C23.34 0 24 .66 24 1.52v20.96c0 .86-.66 1.52-1.52 1.52H1.52C.66 24 0 23.34 0 22.48V1.52C0 .66.66 0 1.52 0zm11.01 19.56c-.44 1.04-1.21 1.76-2.8 1.76-1.9 0-3.14-1.1-3.64-2.82-.03-.1-.01-.19.1-.19h2.24c.15 0 .26.09.32.22.25.59.62.97 1.25.97.64 0 .97-.33.97-.83V8.89c0-.1.08-.18.18-.18h2.52c.1 0 .18.08.18.18v9.86c0 1.71-.34 2.79-1.03 3.83zm7.07 0c-.17-1-.76-1.74-2.02-2.22-.75-.31-1.57-.49-2.04-.93-.22-.19-.3-.48-.3-.79 0-.46.33-.79.97-.79.61 0 .93.24 1.11.7.07.16.2.28.38.28h2.16c.1 0 .19-.08.18-.19-.14-1.91-1.49-3.14-3.7-3.14-2.18 0-3.61 1.14-3.61 2.95 0 1.74 1.04 2.48 2.93 2.85 1.01.2 1.73.44 2.01.91.22.37.21.78.02 1.04-.3.42-.96.59-1.57.59-.84 0-1.42-.34-1.71-.99-.07-.17-.18-.24-.36-.24H9.76c-.1 0-.2.08-.19.19.24 2.19 1.83 3.33 4.3 3.33 2.68 0 4.2-1.23 4.2-3.34V19.56z" fill="#000000" />
        </svg>
      )
    },
    // Backend
    {
      name: 'MySQL',
      category: 'backend',
      dotColor: 'bg-cyan-400 text-cyan-400',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#00758F">
          <path d="M18.42 14.88c-.68-.86-1.92-1.92-3.15-2.27-.12-.04-.15-.19-.06-.27.81-.72 2.02-2.18 2.02-4.04 0-2.47-1.74-4.88-4.9-5.91-3.66-1.19-7.5.34-8.83 3.51-.12.28-.22.58-.3.88-.06.22-.3.32-.49.2l-.76-.48c-.18-.11-.2-.36-.05-.5.85-.77 2.12-1.62 3.65-2.07 3.53-1.03 7.37-.02 9.06 2.37.16.22.3.45.42.69.07.13.24.16.34.06.6-.57 1.42-1.3 2.35-1.95.2-.14.48-.03.52.22.18 1.14.02 2.38-.5 3.53-.16.35-.38.7-.65 1.02-.09.11-.06.27.06.34 1.11.62 2.45 1.77 3.03 3.24.1.25-.08.52-.35.5-.96-.06-1.9-.3-2.77-.73-.13-.06-.28.02-.29.17-.06.77-.35 1.5-.83 2.1-.09.11-.03.28.1.33 1.25.43 2.53 1.2 3.42 2.16.19.2.14.53-.11.66-1.76.92-3.83 1.34-5.86 1.19-.24-.02-.42.15-.41.39l.06 1.05c.01.24-.17.44-.41.42-3.66-.27-7.05-2.07-9.1-4.82-.12-.16-.36-.14-.46.03l-.62 1.08c-.13.23.01.52.27.56 2.51.36 5.09.03 7.42-.96.22-.09.46.06.46.3v.44c0 .24.2.44.44.44h.74c.24 0 .44-.2.44-.44V19.7c0-.24.19-.44.43-.43 2.65.1 5.3-.59 7.47-1.93.2-.13.24-.4.07-.58z" />
        </svg>
      )
    },
    {
      name: 'Bootstrap',
      category: 'backend',
      dotColor: 'bg-purple-500 text-purple-500',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#7952B3">
          <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.239-1.401c0-1.442-.81-2.484-2.581-2.484H10.15v9.117h5.176c1.884 0 2.435-1.127 2.435-2.27 0-1.296-.708-1.954-1.745-2.135 1.258-.236 1.745-1.282 1.745-2.228zm-3.535 3.338c0 .765-.436 1.139-1.436 1.139h-2.15v-2.278h2.15c1 0 1.436.364 1.436 1.139zm-.309-3.218c0 .664-.423.973-1.291.973h-1.98v-1.954h1.98c.868 0 1.291.291 1.291.981z" />
        </svg>
      )
    },
    {
      name: 'CodeIgniter',
      category: 'backend',
      dotColor: 'bg-orange-600 text-orange-600',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#EE4323">
          <path d="M12 0S5 4.7 5 11c0 3.9 3.1 7 7 7s7-3.1 7-7c0-6.3-7-11-7-11zm1.3 14.5c-.7.6-1.7.9-2.7.7-1.3-.3-2.1-1.4-2.1-2.6 0-1.8 1.4-2.4 2.1-3.6.1-.2.4-.2.5 0 .6 1.2 2.2 1.8 2.2 3.6 0 .7-.3 1.4-.7 1.9z" />
        </svg>
      )
    },
    {
      name: 'Laravel',
      category: 'backend',
      dotColor: 'bg-red-500 text-red-500',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#FF2D20">
          <path d="M22.25 12h-2.5v-2.5c0-.69-.56-1.25-1.25-1.25H16V5.75c0-.69-.56-1.25-1.25-1.25H11.5v-2.5c0-.69-.56-1.25-1.25-1.25H7.75c-.69 0-1.25.56-1.25 1.25V5.5c0 .69.56 1.25 1.25 1.25H10v2.5c0 .69.56 1.25 1.25 1.25h2.5v2.5c0 .69.56 1.25 1.25 1.25H18v2.5c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25V13.25c0-.69-.56-1.25-1.25-1.25z" />
        </svg>
      )
    }
  ]

  const frontendSkills = skills.filter((s) => s.category === 'frontend')
  const backendSkills = skills.filter((s) => s.category === 'backend')

  return (
    <section className="py-20 sm:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">Skills & Tech Stack</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto"></div>
          </div>

          {/* Frontend Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent text-center sm:text-left">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl mx-auto sm:mx-0">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group bg-card/30 backdrop-blur-md rounded-2xl border border-border/50 p-6 flex flex-col items-center justify-center relative hover:scale-105 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 aspect-square w-full"
                >
                  {/* Indicator dot */}
                  <div className={`absolute top-4 right-4 w-2.5 h-2.5 rounded-full ${skill.dotColor} shadow-[0_0_8px_currentColor]`} />
                  
                  {/* Icon wrapper */}
                  <div className="flex-grow flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Skill name */}
                  <span className="mt-4 text-sm sm:text-base font-semibold tracking-wide text-foreground/90 group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent text-center sm:text-left">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto sm:mx-0">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group bg-card/30 backdrop-blur-md rounded-2xl border border-border/50 p-6 flex flex-col items-center justify-center relative hover:scale-105 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 aspect-square w-full"
                >
                  {/* Indicator dot */}
                  <div className={`absolute top-4 right-4 w-2.5 h-2.5 rounded-full ${skill.dotColor} shadow-[0_0_8px_currentColor]`} />
                  
                  {/* Icon wrapper */}
                  <div className="flex-grow flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Skill name */}
                  <span className="mt-4 text-sm sm:text-base font-semibold tracking-wide text-foreground/90 group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
