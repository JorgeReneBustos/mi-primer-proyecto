import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] px-6 py-24 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300">
            Proyectos y demostraciones
          </span>

          <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-6xl">
            Tu próximo sitio web empieza con una{' '}
            <span className="bg-gradient-to-r from-orange-300 to-violet-400 bg-clip-text text-transparent">
              buena idea.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Explorá ejemplos de páginas web para negocios. Diseños modernos, adaptables al celular y
            pensados para presentar productos, servicios y facilitar el contacto con tus clientes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.id} className="group transition duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                  {index === 0 ? '01 · Gastronomía' : index === 1 ? '02 · Servicios' : '03 · Salud'}
                </span>
                <span className="text-xs text-zinc-600">Proyecto demo</span>
              </div>

              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="relative mt-24 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-8 text-center sm:p-14">
          <div className="absolute left-1/2 top-0 -z-0 h-40 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[80px]" />

          <div className="relative">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Digital Web Studio
            </span>

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">
              ¿Querés una página web para tu negocio?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
              Contame qué hacés, qué productos ofrecés y qué necesitás. Podemos pensar una propuesta
              adaptada a tu negocio y presupuesto.
            </p>

            <a
              href="https://www.instagram.com/digital_web.studio/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-400"
            >
              Hablemos de tu proyecto ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
