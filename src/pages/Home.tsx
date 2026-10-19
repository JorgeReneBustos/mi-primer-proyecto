export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white">
      <section className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center gap-14 px-6 py-24 lg:flex-row lg:px-12">
        <div className="absolute left-0 top-20 -z-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-10 right-0 -z-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-2xl flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Diseño web para negocios gastronómicos
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Tu negocio merece una web que{' '}
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-violet-400 bg-clip-text text-transparent">
              abra el apetito.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Creamos páginas web modernas para restaurantes, cafeterías y emprendimientos de comida.
            Mostrá tu menú, destacá tus productos y facilitá los pedidos por WhatsApp.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-400"
            >
              Quiero una web para mi negocio →
            </a>

            <a
              href="/proyectos"
              className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Ver demostraciones
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500">
            <span>✓ Diseño adaptable al celular</span>
            <span>✓ Menú y productos</span>
            <span>✓ Contacto directo</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-lg flex-1">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-500/20 to-violet-600/20 blur-2xl" />

          <div className="relative rotate-1 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl transition duration-500 hover:rotate-0">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85"
              alt="Pizza artesanal recién preparada"
              className="h-72 w-full object-cover sm:h-96"
            />

            <div className="bg-zinc-900/95 p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                Proyecto demostrativo
              </span>
              <h2 className="mt-2 text-2xl font-bold">Tu próxima web gastronómica</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Una experiencia visual para presentar tus platos y ayudar a tus clientes a descubrir
                tu propuesta.
              </p>
              <a
                href="/proyectos"
                className="mt-5 inline-block text-sm font-semibold text-orange-400 transition hover:text-orange-300"
              >
                Explorar proyectos →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">Diseño atractivo</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Una presencia visual que refleja la personalidad de tu negocio.
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">Experiencia móvil</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Tus clientes pueden consultar la información desde su celular.
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">Contacto sencillo</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Accesos claros para que los interesados sepan cómo comunicarse.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
          Digital Web Studio
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">
          Hagamos que tu negocio tenga su lugar en internet.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
          Contanos qué vendés y qué necesitás. Podemos pensar una web adaptada a tu negocio.
        </p>
        <a
          href="https://www.instagram.com/digital_web.studio/"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/10"
        >
          Contactar por Instagram ↗
        </a>
      </section>
    </main>
  )
}
