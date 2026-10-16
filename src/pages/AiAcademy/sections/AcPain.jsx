import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './AcPain.css'

// Diagnóstico (banda clara). Las tres frustraciones como el registro de advertencias de un
// sistema: un panel plano con su barra de título, una fila por advertencia (código + ícono)
// y al pie la conclusión. Las filas aparecen una tras otra al entrar en pantalla.
export default function AcPain() {
  const { pain } = useLanguage().t.aiAcademy
  const headRef = useReveal()
  const logRef = useReveal()

  return (
    <section className="section ac-pain surface-light">
      <div className="container ac-pain__grid">
        <header ref={headRef} className="ac-pain__head reveal">
          <span className="eyebrow">{pain.eyebrow}</span>
          <h2 className="display h2"><Emph text={pain.title} /></h2>
        </header>

        <div className="ac-log">
          <div className="ac-log__bar">
            <span>diagnostico_ia.log</span>
            <span>{pain.items.length} WARN</span>
          </div>

          <ol ref={logRef} className="ac-log__list reveal-stagger">
            {pain.items.map((item, i) => (
              <li key={i} className="ac-log__row" style={{ '--i': i }}>
                <span className="ac-log__code">WARN_0{i + 1}</span>
                <svg className="ac-log__icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3 2 20h20L12 3Z" />
                  <path d="M12 10v4.5M12 17.2v.3" />
                </svg>
                <span className="ac-log__text">{item}</span>
              </li>
            ))}
          </ol>

          <div className="ac-log__foot">
            <p>{pain.close}</p>
            <Button href={LINKS.aiAcademy.contact} arrow>{pain.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
