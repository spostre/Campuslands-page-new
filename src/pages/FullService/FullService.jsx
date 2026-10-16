import FsHero from './sections/FsHero'
import FsPhases from './sections/FsPhases'
import FsServices from './sections/FsServices'
import FsStack from './sections/FsStack'
import FsClients from './sections/FsClients'
import FsContact from './sections/FsContact'

// FullService — bandas negro / blanco:
//   negra (portada: estrella → hexágono) · negro→blanco (fases sobre el borde)
//   · clara (servicios) · negra con estrellas (Tech_Stack en órbita)
//   · clara (clientes en rodillos) · negra con la Luna (contacto + formulario) · pie
export default function FullService() {
  return (
    <>
      <FsHero />
      <FsPhases />
      <FsServices />
      <FsStack />
      <FsClients />
      <FsContact />
    </>
  )
}
