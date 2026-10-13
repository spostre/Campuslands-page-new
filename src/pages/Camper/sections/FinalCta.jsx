import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import './FinalCta.css'

// Cierre centrado (patrón "Built by you" de Idea 3): título, texto y botones.
export default function FinalCta() {
  const { final } = useLanguage().t.camper

  return (
    <section className="final-cta camper-glow">
      <div className="container final-cta__inner">
        <h2 className="display h2 final-cta__title"><Emph text={final.title} /></h2>
        <p className="final-cta__text">{final.text}</p>
        <div className="btn-row final-cta__ctas">
          <Button href={LINKS.camper.start}>{final.cta}</Button>
          <Button href="#rutas" variant="ghost">{final.secondary}</Button>
        </div>
      </div>
    </section>
  )
}
