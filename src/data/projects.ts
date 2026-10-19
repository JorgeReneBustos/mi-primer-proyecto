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
    title: 'Web gastronómica',
    description:
      'Una web moderna para restaurantes, rotiserías y locales de comida. Presenta el menú, los precios, las promociones y facilita los pedidos por WhatsApp.',
    category: 'Gastronomía',
    technologies: ['React', 'TypeScript', 'Vite'],
    image: comidasImage,
  },
  {
    id: 2,
    title: 'Web para gasista',
    description:
      'Una página profesional para mostrar servicios, transmitir confianza y facilitar las consultas de potenciales clientes desde el celular.',
    category: 'Servicios',
    technologies: ['React', 'TypeScript', 'Vite'],
    image: gasistaImage,
  },
  {
    id: 3,
    title: 'Web para consultorio',
    description:
      'Una propuesta de diseño para profesionales de la salud, con presentación de servicios, información del consultorio y vías de contacto.',
    category: 'Salud',
    technologies: ['React', 'TypeScript', 'Vite'],
    image: odontologaImage,
  },
]
