import CamperHero from './sections/CamperHero'
import Programs from './sections/Programs'
import Stories from './sections/Stories'
import FinalCta from './sections/FinalCta'
import './Camper.css'

// Sé un camper — variante "monocromo" (inspirada en Idea/3.jpg): negro puro, bordes finos,
// luces suaves en lugar de estrellas y el casco del logo iluminado desde atrás.
export default function Camper() {
  return (
    <div className="camper-page surface-dark">
      <CamperHero />
      <Programs />
      <Stories />
      <FinalCta />
    </div>
  )
}
