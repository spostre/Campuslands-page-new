import EmpleaHero from './sections/EmpleaHero'
import TechLeap from './sections/TechLeap'
import Stack from './sections/Stack'
import WhyUs from './sections/WhyUs'
import Companies from './sections/Companies'
import EmpleaContact from './sections/EmpleaContact'

// Campuslands Emplea — bandas blanco / negro (si una sección no dice color, va en blanco):
//   clara (portada con el código que se traduce) · negra (Tech Leap + testimonios)
//   · clara (especialistas) · clara con escenario de fotos (por qué nos eligen)
//   · negra (empresas que contratan) · clara (contacto + redes) · pie
export default function Emplea() {
  return (
    <>
      <EmpleaHero />
      <TechLeap />
      <Stack />
      <WhyUs />
      <Companies />
      <EmpleaContact />
    </>
  )
}
