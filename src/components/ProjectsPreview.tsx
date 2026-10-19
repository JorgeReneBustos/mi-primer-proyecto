import { Link } from 'react-router'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function ProjectsPreview() {
  return (
    <section className="border-t border-zinc-200 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Encabezado */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Portfolio
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Proyectos destacados
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-600">
              Algunos de los proyectos que estoy desarrollando para practicar y demostrar mis
              habilidades.
            </p>
          </div>

          <Link
            to="/proyectos"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Ver todos →
          </Link>
        </div>

        {/* Proyectos */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview
