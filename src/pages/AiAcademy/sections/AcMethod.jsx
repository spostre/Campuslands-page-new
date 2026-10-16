import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './AcMethod.css'

// Método AI Academy (banda clara, plana). Izquierda: título, texto y botones. Derecha: los tres
// pilares en tipografía grande, uno por línea con su número y una línea fina (la "V" inicial en
// azul une las tres palabras). Abajo, lo que se obtiene en cuatro columnas numeradas.
export default function AcMethod() {
  const { method } = useLanguage().t.aiAcademy
  const pillarsRef = useReveal()

  return (
    <section className="section ac-method surface-light">
      <div className="container">
        <div className="ac-method__top">
          <div className="ac-method__copy">
            <span className="eyebrow">{method.eyebrow}</span>
            <h2 className="display h2"><Emph text={method.title} /></h2>
            <p className="lead">{method.text}</p>
            <div className="btn-row">
              <Button href={LINKS.aiAcademy.contact} arrow>{method.ctaStart}</Button>
              <Button href={LINKS.aiAcademy.masterclass} variant="ghost">{method.ctaMasterclass}</Button>
            </div>
          </div>

          <ol ref={pillarsRef} className="ac-pillars reveal-stagger">
            {method.pillars.map((p, i) => (
              <li key={i} style={{ '--i': i }}>
                <span className="ac-pillars__num">0{i + 1}</span>
                <span className="ac-pillars__word">
                  <span className="ac-pillars__initial">{p.charAt(0)}</span>
                  {p.slice(1)}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="ac-gains">
          <span className="ac-gains__title">{method.gainsTitle}</span>
          <ul>
            {method.gains.map((g, i) => (
              <li key={i}>
                <span>0{i + 1}</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
