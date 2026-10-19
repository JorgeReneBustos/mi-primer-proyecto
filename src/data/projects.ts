import comidasImage from '../assets/projects/comidas.jpg'
import gasistaImage from '../assets/projects/gasista.jpg'
import odontologaImage from '../assets/projects/odontologa.jpg'

export interface Project {
  id: number
  title: string
  description: string
  category: string
  technologies: string[]
  image: string
  demo?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Web de comidas',
    description:
      'Sitio gastronómico moderno diseñado para mostrar productos y facilitar los pedidos de los clientes.',
    category: 'Gastronomía',
    technologies: ['React', 'TypeScript', 'Vite'],
    image: comidasImage,
  },
  {
    id: 2,
    title: 'Landing Gasista',
    description:
      'Landing profesional para servicios de gas, diseñada para transmitir confianza y facilitar el contacto.',
    category: 'Servicios',
    technologies: ['React', 'TypeScript', 'Vite'],
    image: gasistaImage,
  },
  {
    id: 3,
    title: 'Sitio para odontóloga',
    description:
      'Diseño web para consultorio odontológico, con una presentación limpia y una experiencia clara para los pacientes.',
    category: 'Salud',
    technologies: ['React', 'TypeScript', 'Vite'],
    image: odontologaImage,
  },
]
