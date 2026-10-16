import Emph from '@/components/ui/Emph'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import CodeTranslator from './CodeTranslator'
import './CamperCode.css'

// "Tu primer programa, en palabras" (monocromo, entre la portada y las rutas). Texto a la
// izquierda y, a la derecha, el programa en Python que se traduce a palabras bloque por bloque
// (antes vivía en la portada de Emplea). La traducción empieza al verse el bloque en pantalla.
export default function CamperCode() {
  const { code } = useLanguage().t.camper
  const copyRef = useReveal()

  return (
    <section className="camper-code section-rule">
      <div className="container camper-code__grid">
        <div ref={copyRef} className="camper-code__copy reveal-stagger">
          <span className="mono-label camper-code__eyebrow" style={{ '--i': 0 }}>{code.eyebrow}</span>
          <h2 className="display h2" style={{ '--i': 1 }}><Emph text={code.title} /></h2>
          <p className="camper-code__text" style={{ '--i': 2 }}>{code.text}</p>
        </div>

        <div className="camper-code__window">
          <CodeTranslator
            file={code.file}
            blocks={code.blocks}
            codeLabel={code.codeLabel}
            plainLabel={code.plainLabel}
            replayLabel={code.replay}
          />
        </div>
      </div>
    </section>
  )
}
