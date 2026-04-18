import { id } from 'date-fns/locale'
import { Award, Eye } from 'lucide-react'
import Link from 'next/link'

interface Achievement {
  id: number
  year: string
  title: string
  organization: string
  description: string
  type: string
  certificate: string
  skills: string[]
}

const achievements: Achievement[] = [
  {
    id: 1,
    year: "2025",
    title: "MTCNA - MikroTik Certified Network Associate",
    organization: "Mikrotik",
    description: "Sertifikasi Mikrotik MTCNA",
    type: "certification",
    certificate: "/Sertifikat/mikrotik.pdf",
    skills: ["Networking", "MikroTik"],
  },
  {
    id: 2,
    year: "2025",
    title: "PSI - Program Studi Informatika",
    organization: "Program Studi Informatika",
    description: "Sertifikasi Mikrotik MTCNA.",
    type: "certification",
    certificate: "/Sertifikat/Program Studi Informatika.pdf",
    skills: ["Networking", "Program Studi Informatika"],
  },
  {
    id: 3,
    year: "2025",
    title: "ETN - Entrepreneur",
    organization: "Entrepreneur",
    description: "Sertifikasi ETN - Entrepreneur.",
    type: "certification",
    certificate: "/Sertifikat/Entrepreneur.pdf",
    skills: ["Networking", "Entrepreneur"],
  },

  {
    id: 4,
    year: "2025",
    title: "CCNA - Introduction to Networks",
    organization: "CCNAIntroduction to Networks",
    description: "Sertifikasi CCNA - Introduction to Networks.",
    type: "certification",
    certificate: "/Sertifikat/CCNA Introduction to Networks.pdf",
    skills: ["Networking", "CCNA Introduction to Networks"],
  },

  {
    id: 5,
    year: "2025",
    title: "PPWG - Profesional Programmer With Golang",
    organization: "Profesional Programmer With Golang",
    description: "Sertifikasi PPWG - Profesional Programmer With Golang.",
    type: "certification",
    certificate: "/Sertifikat/Profesional Programmer With Golang.pdf",
    skills: ["Networking", "Profesional Programmer With Golang"],
  },

  {
    id: 6,
    year: "2025",
    title: "PCAP - PCAP",
    organization: "PCAP",
    description: "Sertifikasi PCAP.",
    type: "certification",
    certificate: "/Sertifikat/PCAP.pdf",
    skills: ["Networking", "PCAP"],
  }
]


export default function Certificates() {
  return (
    <section id="certificates" className="py-20 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Certificates</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex flex-col"
              >
                <div className="bg-gradient-to-br from-accent/20 to-accent/5 h-40 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <Award size={48} className="text-accent/80 z-10" />
                </div>

                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <div className="space-y-3 flex-grow">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-xl font-semibold group-hover:text-accent transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full whitespace-nowrap font-medium mt-1">
                        {item.year}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-muted-foreground">
                      {item.organization}
                    </p>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {item.description}
                    </p>

                    {item.skills && item.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs border border-border bg-background px-2 py-1 rounded-md text-muted-foreground">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border mt-auto justify-end">
                    <Link
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors"
                    >
                      <Eye size={16} />
                      View Certificate
                    </Link>
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
