import Hero from './sections/Hero'
import Pillars from './sections/Pillars'
import Services from './sections/Services'
import Partners from './sections/Partners'
import Orbit from './sections/Orbit'
import Locations from './sections/Locations'
import Social from './sections/Social'
import './Home.css'

// Bandas: negra (hero) · clara (pilares) · negra (servicios + aliados)
//         · clara (Órbit + sedes) · negra (redes + pie)
export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Services />
      <Partners />
      {/* Banda clara con cuadrícula sutil de fondo, continua entre las dos secciones */}
      <div className="band-grid">
        <Orbit />
        <Locations />
      </div>
      <Social />
    </>
  )
}
