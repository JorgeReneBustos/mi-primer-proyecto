export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <section className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Contacto
            </span>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
              Hagamos algo
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                increíble.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
              ¿Tenés una idea, un emprendimiento o necesitás una página web profesional? Hablemos
              sobre tu proyecto y busquemos la mejor solución.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-zinc-500">Especialidad</p>
                <p className="mt-2 font-medium">Diseño y desarrollo web frontend</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-zinc-500">Tecnologías</p>
                <p className="mt-2 font-medium">React · TypeScript · Vite · IA</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl backdrop-blur-xl sm:p-10">
            <span className="text-sm font-medium text-violet-300">¿Empezamos?</span>

            <h2 className="mt-4 text-3xl font-bold">Contame tu idea.</h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Escribime por Instagram para conversar sobre tu proyecto, tus objetivos y el tipo de
              sitio web que necesitás.
            </p>

            <a
              href="https://www.instagram.com/digital_web.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
            >
              Contactar por Instagram
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>

            <p className="mt-5 text-center text-xs leading-5 text-zinc-500">
              Digital Web Studio · Desarrollo web moderno
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
