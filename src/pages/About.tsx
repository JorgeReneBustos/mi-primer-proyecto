export default function About() {
  const skills = [
    {
      name: 'React',
      description: 'Interfaces dinámicas y componentes reutilizables.',
      level: 'Frontend',
    },
    {
      name: 'TypeScript',
      description: 'Código tipado, organizado y fácil de mantener.',
      level: 'Desarrollo',
    },
    {
      name: 'Vite',
      description: 'Herramientas modernas para desarrollar aplicaciones web.',
      level: 'Tooling',
    },
    {
      name: 'Inteligencia artificial',
      description: 'IA aplicada para acelerar el desarrollo y explorar soluciones.',
      level: 'Innovación',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

      <section className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Sobre mí
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Desarrollo web con
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                visión de futuro.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
              Soy desarrollador frontend en formación, enfocado en crear sitios web modernos,
              visuales y adaptables a diferentes dispositivos. Trabajo con tecnologías actuales y
              utilizo inteligencia artificial como herramienta para investigar, resolver problemas y
              mejorar mis procesos de desarrollo.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400">
              Mi objetivo es transformar ideas en experiencias digitales útiles, combinando diseño,
              funcionalidad y código mantenible.
            </p>

            <a
              href="/proyectos"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200"
            >
              Conocé mis proyectos
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Tecnologías y habilidades</h2>
              <span className="text-sm text-zinc-500">01 — 04</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <article
                  key={skill.name}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.06]"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm text-zinc-500">0{index + 1}</span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold transition-colors group-hover:text-violet-300">
                    {skill.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">{skill.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
