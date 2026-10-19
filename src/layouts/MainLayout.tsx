import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Jorge Bustos. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
