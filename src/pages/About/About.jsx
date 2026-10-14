import AboutHero from './sections/AboutHero'
import Impact from './sections/Impact'
import Purpose from './sections/Purpose'
import Knowledge from './sections/Knowledge'
import AboutStories from './sections/AboutStories'

// Nosotros — misma sencillez que el Inicio, en bandas:
//   negra (portada, con estrellas) · mapa satelital (sedes) · negra (misión y visión)
//   → persiana → clara (tecnologías, con nieve) → desvanecido → negra (historias + redes, luz naranja) · pie
export default function About() {
  return (
    <div className="about-page">
      <AboutHero />
      <Impact />
      <Purpose />
      <Knowledge />
      <AboutStories />
    </div>
  )
}
