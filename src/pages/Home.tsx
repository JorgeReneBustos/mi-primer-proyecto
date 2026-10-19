import { useState } from 'react'

export default function Home() {
  const [visible] = useState(true)

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#09090b] text-white">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24 sm:px-10 lg:px-16">
        <div
          className={`w-full transition-all duration-1000 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Etiqueta superior */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-sm text-zinc-300">Desarrollador Frontend en formación</span>
          </div>

          {/* Título principal */}
          <h1 className="max-w-5xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
            Transformo ideas
            <br />
            en experiencias
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              digitales.
            </span>
          </h1>

          {/* Descripción */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Soy desarrollador frontend y creo sitios web modernos, rápidos y adaptables. Combino
            React, TypeScript e inteligencia artificial para convertir ideas en proyectos digitales.
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/proyectos"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
            >
              Ver mis proyectos
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            <a
              href="/contacto"
              className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
            >
              Hablemos
              <span>↗</span>
            </a>
          </div>

          {/* Tecnologías */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Tecnologías y herramientas
            </p>

            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'IA'].map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Indicador visual inferior */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-zinc-600">
        SCROLL TO EXPLORE ↓
      </div>
    </main>
  )
}
