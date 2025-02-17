import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { portfolioProjects } from "../../data/portfolio"
import { Badge } from "@/components/ui/badge"
import ProjectGraphic from "../../components/ProjectGraphic"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = portfolioProjects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/portfolio" className="inline-flex items-center mb-6 font-mono text-green-400 hover:text-green-300">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <h1 className="text-3xl font-pixel mb-2">{project.title}</h1>
      <h2 className="text-xl font-pixel text-green-400 mb-6">{project.subtitle}</h2>

      <div className="mb-8 flex justify-center">
        <ProjectGraphic
          seed={project.graphic.seed}
          primaryColor={project.graphic.primaryColor}
          secondaryColor={project.graphic.secondaryColor}
          size={400}
        />
      </div>

      {project.content.problem && (
        <section className="mb-8">
          <h3 className="text-xl font-pixel mb-4">The Problem</h3>
          <p className="font-mono text-lg leading-relaxed">{project.content.problem}</p>
        </section>
      )}

      {project.content.solution && (
        <section className="mb-8">
          <h3 className="text-xl font-pixel mb-4">Our Solution</h3>
          {project.content.solution.map((solution, index) => (
            <div key={index} className="mb-6">
              <h4 className="font-pixel text-green-400 mb-2">{solution.title}</h4>
              <ul className="list-none space-y-2">
                {solution.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="font-mono flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-400 mr-2 mt-2"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {project.content.technical && (
        <section className="mb-8">
          <h3 className="text-xl font-pixel mb-4">Technical Foundation</h3>
          <ul className="list-none space-y-2">
            {project.content.technical.map((tech, index) => (
              <li key={index} className="font-mono flex items-start">
                <span className="inline-block w-2 h-2 bg-green-400 mr-2 mt-2"></span>
                {tech}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.content.impact && (
        <section className="mb-8">
          <h3 className="text-xl font-pixel mb-4">{project.content.impact.title}</h3>
          <ul className="list-none space-y-2">
            {project.content.impact.stats.map((stat, index) => (
              <li key={index} className="font-mono flex items-start">
                <span className="inline-block w-2 h-2 bg-green-400 mr-2 mt-2"></span>
                {stat}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.content.future && (
        <section className="mb-8">
          <h3 className="text-xl font-pixel mb-4">Future Vision</h3>
          {"categories" in project.content.future ? (
            <div className="space-y-6">
              {project.content.future.categories.map((category, index) => (
                <div key={index}>
                  <h4 className="font-pixel text-green-400 mb-2">{category.name}</h4>
                  <ul className="list-none space-y-2">
                    {category.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="font-mono flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-400 mr-2 mt-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="list-none space-y-2">
              {project.content.future.map((item, index) => (
                <li key={index} className="font-mono flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-400 mr-2 mt-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {project.content.expertise && (
        <section className="mb-8">
          <h3 className="text-xl font-pixel mb-4">Technical Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {project.content.expertise.map((skill, index) => (
              <Badge key={index} variant="secondary" className="font-mono">
                {skill}
              </Badge>
            ))}
          </div>
        </section>
      )}

      {project.content.callToAction && (
        <section className="mb-8">
          <h3 className="text-xl font-pixel mb-4">Call to Action</h3>
          {"text" in project.content.callToAction ? (
            <>
              <p className="font-mono text-lg leading-relaxed mb-4">{project.content.callToAction.text}</p>
              <ul className="list-none space-y-2">
                {project.content.callToAction.steps.map((step, index) => (
                  <li key={index} className="font-mono flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-400 mr-2 mt-2"></span>
                    {step}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="font-mono text-lg leading-relaxed">{project.content.callToAction}</p>
          )}
        </section>
      )}
    </article>
  )
}

