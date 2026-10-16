import CamperHero from './sections/CamperHero'
import Programs from './sections/Programs'
import Stories from './sections/Stories'
import FallingStars from '@/components/ui/FallingStars'

// Sé un camper — variante "monocromo" (inspirada en Content MD/ideas/web pages idea/3.jpg): negro puro, bordes finos,
// overlay continuo (grano + líneas guía) y el casco del logo iluminado desde atrás.
export default function Camper() {
  return (
    <div className="page-mono surface-dark">
      <FallingStars />
      <CamperHero />
      <Programs />
      <Stories />
    </div>
  )
}
