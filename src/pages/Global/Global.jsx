import GlHero from './sections/GlHero'
import GlOrbit from './sections/GlOrbit'
import GlModel from './sections/GlModel'
import GlCompanies from './sections/GlCompanies'

// Campuslands Global — negro continuo y al final claro:
//   negra (portada partida con la Tierra al amanecer + proceso de contratación dentro)
//   · negra con luz morada desenfocada (Órbit, sin corte con la portada)
//   · negra (modelo de servicio en una tarjeta con el globo suelto)
//   · clara (empresas que contratan en rodillos horizontales) · pie
export default function Global() {
  return (
    <>
      <GlHero />
      <GlOrbit />
      <GlModel />
      <GlCompanies />
    </>
  )
}
