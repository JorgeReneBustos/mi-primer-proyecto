import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Mi trabajo
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Proyectos que convierten <span className="text-zinc-500">ideas en experiencias.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Desarrollo sitios web modernos, rápidos y adaptables a cualquier dispositivo, combinando
            creatividad, tecnología e inteligencia artificial.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
