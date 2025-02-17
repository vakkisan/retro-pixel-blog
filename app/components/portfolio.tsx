import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { portfolioProjects } from "../data/portfolio"
import ProjectGraphic from "./ProjectGraphic"

export default function Portfolio() {
  // Show only the first 3 projects on the home page
  const featuredProjects = portfolioProjects.slice(0, 3)

  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-pixel mb-2">Featured Projects</h2>
        </div>
        <Link href="/portfolio">
          <Button variant="outline" className="font-pixel">
            See All Projects
          </Button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`}>
            <Card className="group bg-gray-800 border-none pixelated-border hover:translate-y-[-4px] transition-transform cursor-pointer h-[320px] flex flex-col">
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
                  <h3 className="font-pixel text-sm text-green-400 line-clamp-2">{project.title}</h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

