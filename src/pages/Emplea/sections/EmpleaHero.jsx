import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import CodeTranslator from './CodeTranslator'
import './EmpleaHero.css'

// Portada de Emplea (banda clara, pantalla completa): texto, botón y cifra a la izquierda;
// a la derecha, un programa sencillo en Python que se traduce a palabras bloque por bloque.
export default function EmpleaHero() {
  const { hero } = useLanguage().t.emplea

  return (
    <section className="emplea-hero surface-light">
      <div className="container emplea-hero__grid">
        <div className="emplea-hero__copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="display h1 emplea-hero__title"><Emph text={hero.title} /></h1>
          <p className="lead emplea-hero__text">{hero.text}</p>
          <div className="btn-row">
            <Button href={LINKS.partnersContact} arrow>{hero.cta}</Button>
          </div>

          <p className="emplea-hero__stat">
            <strong>{hero.statValue}</strong>
            <span>{hero.statLabel}</span>
          </p>
        </div>

        <div className="emplea-hero__window">
          <CodeTranslator
            file={hero.file}
            blocks={hero.blocks}
            codeLabel={hero.codeLabel}
            plainLabel={hero.plainLabel}
            replayLabel={hero.replay}
          />
        </div>
      </div>
    </section>
  )
}
