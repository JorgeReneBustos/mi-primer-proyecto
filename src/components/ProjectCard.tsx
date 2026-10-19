import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-2xl hover:shadow-orange-950/20">
      <div className="relative h-60 overflow-hidden bg-zinc-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
            <span className="text-6xl font-bold text-white/10">{project.title.charAt(0)}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          {project.category}
        </span>

        <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
          Diseño web · Demo
        </span>
      </div>

      <div className="flex h-[calc(100%-15rem)] flex-col p-6">
        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-300 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {(project.demo || project.github) && (
          <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Ver demostración ↗
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver código
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
