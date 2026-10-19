import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl">
      {/* Imagen */}
      <div className="relative h-56 overflow-hidden bg-zinc-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
            <span className="text-5xl font-bold text-white/10">{project.title.charAt(0)}</span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />

        {/* Categoría */}
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-zinc-300">
          {project.title}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-400">{project.description}</p>

        {/* Tecnologías */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="mt-6 flex gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
            >
              Ver proyecto
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
