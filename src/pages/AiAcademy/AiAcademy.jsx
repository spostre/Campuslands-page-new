import AcHero from './sections/AcHero'
import AcPain from './sections/AcPain'
import AcMissions from './sections/AcMissions'
import AcMethod from './sections/AcMethod'
import AcTools from './sections/AcTools'
import AcStories from './sections/AcStories'

// Campuslands AI Academy — tema de misiones espaciales, bandas negro / blanco:
//   negra (portada + pase de la próxima masterclass) · clara (diagnóstico como registro)
//   · negra (misiones en secuencia de lanzamiento, #misiones) · clara (método V·V·V)
//   · negra (módulos + herramientas desplegables) · clara (historias + banda de cierre) · pie
export default function AiAcademy() {
  return (
    <>
      <AcHero />
      <AcPain />
      <AcMissions />
      <AcMethod />
      <AcTools />
      <AcStories />
    </>
  )
}
