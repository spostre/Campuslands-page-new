import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { STAFFING_SYMBOLS } from '../staffingSymbols'
import logoMark from '@/assets/images/logo-mark.png'
import './StHero.css'

/*
 * Portada de Staffing tecnológico (banda negra) partida por una diagonal de luz.
 * - Izquierda (negro liso): título, texto y el botón que baja a las opciones.
 * - Derecha: azul sólido (contraste) con el casco del logo en blanco de fondo y la vista previa
 *   de las tres opciones (cada una enlaza a su panel) en escalones paralelos a la diagonal.
 * Al cargar (en orden): el logo aparece solo en el centro sobre negro → se dibuja la diagonal,
 * entra el azul y el logo se desplaza a su lugar → sube el texto → llegan las opciones.
 */
export default function StHero() {
  const { hero, options } = useLanguage().t.staffing

  return (
    <section className="st-hero surface-dark">
      {/* Lado derecho de la diagonal: azul sólido */}
      <div className="st-hero__side" aria-hidden="true" />

      {/* Logo de Campuslands en blanco: aparece primero en el centro y luego pasa al lado azul */}
      <img className="st-hero__logo" src={logoMark} alt="" aria-hidden="true" />

      <svg className="st-hero__line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <line x1="64" y1="0" x2="34" y2="100" />
      </svg>

      <div className="container st-hero__grid">
        <div className="st-hero__copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="display h1 st-hero__title"><Emph text={hero.title} /></h1>
          <p className="lead st-hero__text">{hero.text}</p>
          <Button href={LINKS.staffing.options}>
            {hero.cta}
            <span aria-hidden="true"> ↓</span>
          </Button>
        </div>

        <nav className="st-preview" aria-label={hero.preview}>
          <span className="st-preview__label">{hero.preview}</span>
          <ul>
            {options.items.map((item, i) => (
              <li key={item.key} style={{ '--i': i }}>
                <a href={`#opcion-${item.key}`} className="st-preview__item">
                  <svg viewBox="0 0 200 200" aria-hidden="true">{STAFFING_SYMBOLS[item.key]}</svg>
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.badge}</small>
                  </span>
                  <span className="st-preview__arrow" aria-hidden="true">↓</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
