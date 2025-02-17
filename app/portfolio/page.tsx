import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioProjects } from "../data/portfolio"
import ProjectGraphic from "../components/ProjectGraphic"

export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link href="/#portfolio" className="inline-flex items-center mb-6 font-mono text-green-400 hover:text-green-300">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Featured Projects
      </Link>
      <h1 className="text-3xl font-pixel mb-8">All Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioProjects.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`}>
            <Card className="group bg-gray-800 border-none pixelated-border hover:translate-y-[-4px] transition-transform cursor-pointer h-[360px] flex flex-col">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ProjectGraphic
                    seed={project.graphic.seed}
                    primaryColor={project.graphic.primaryColor}
                    secondaryColor={project.graphic.secondaryColor}
                    size={300}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="font-mono text-sm text-muted-foreground mb-1">{project.company}</div>
                  <h2 className="font-pixel text-xl text-green-400 mb-2 line-clamp-2">{project.title}</h2>
                  <p className="font-mono text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

