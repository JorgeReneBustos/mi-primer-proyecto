function AboutPreview() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Texto */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Sobre mí
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Desarrollo interfaces pensadas para personas y negocios.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Me estoy formando como desarrollador Front-end y disfruto convertir ideas en
              experiencias web modernas, rápidas y responsive.
            </p>

            <p className="mt-4 leading-7 text-zinc-600">
              Trabajo principalmente con React, Vite, TypeScript y Tailwind CSS, incorporando
              herramientas de inteligencia artificial para acelerar el desarrollo y explorar nuevas
              soluciones.
            </p>
          </div>

          {/* Tarjetas */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                ⚡
              </div>

              <h3 className="font-semibold text-zinc-950">Desarrollo moderno</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Interfaces construidas con tecnologías actuales y buenas prácticas.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                🎨
              </div>

              <h3 className="font-semibold text-zinc-950">Diseño responsive</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Diseños adaptados a computadoras, tablets y dispositivos móviles.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                🤖
              </div>

              <h3 className="font-semibold text-zinc-950">Inteligencia artificial</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Utilizo IA como herramienta para investigar, desarrollar y mejorar soluciones.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                🚀
              </div>

              <h3 className="font-semibold text-zinc-950">Aprendizaje continuo</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Continúo incorporando herramientas y tecnologías al desarrollo web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
