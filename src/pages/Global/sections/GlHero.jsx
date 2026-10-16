import { useLayoutEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import Starfield from '@/components/ui/Starfield'
import earth from '@/assets/images/global/earth-globe.webp'
import earthSmall from '@/assets/images/global/earth-globe-1800.webp'
import earthMobile from '@/assets/images/global/earth-globe-1100.webp'
import './GlHero.css'

/*
 * Portada de Campuslands Global (negra, pantalla completa), "pantalla partida":
 * - Fondo: estrellas y la Tierra de noche (render propio con el mapa Black Marble 2016 de NASA,
 *   dominio público) asomando por abajo y girando muy despacio, como la Luna de FullService.
 * - Izquierda: vidrio esmerilado hasta justo después de "GL". La palabra gigante "Global" va
 *   dos veces superpuesta: sólida en tinta oscura sobre el vidrio y blanca a la derecha. El
 *   corte se mide en el navegador (entre la L y la O) para que nunca parta una letra.
 * - Abajo: a la izquierda el título, el texto y el botón; a la derecha, el proceso de
 *   contratación en tres pasos (la "segunda sección" va integrada aquí).
 * Al cargar: el vidrio se abre de izquierda a derecha, sube la palabra y luego el resto.
 */
export default function GlHero() {
  const { hero, process } = useLanguage().t.global
  const sectionRef = useRef(null)
  const splitRef = useRef(null)

  // Punto de corte = mitad del espacio entre la L y la O, en px desde el borde izquierdo
  useLayoutEffect(() => {
    const section = sectionRef.current
    const marker = splitRef.current
    if (!section || !marker) return
    const measure = () => {
      const left = section.getBoundingClientRect().left
      const r = marker.getBoundingClientRect()
      section.style.setProperty('--split', `${Math.round(r.left - left)}px`)
    }
    measure()
    document.fonts?.ready.then(measure)
    const ro = new ResizeObserver(measure)
    ro.observe(section)
    return () => ro.disconnect()
  }, [hero.word])

  const head = hero.word.slice(0, 2)
  const tail = hero.word.slice(2)

  return (
    <section ref={sectionRef} className="gl-hero surface-dark">
      <div className="gl-hero__sky" aria-hidden="true">
        <Starfield origin="top" density={0.6} />
      </div>
      {/* En pantallas angostas el vidrio cubre todo y desenfoca la Tierra: basta la versión liviana */}
      <picture>
        <source media="(max-width: 900px)" srcSet={earthMobile} />
        <img
          className="gl-hero__earth"
          src={earth}
          srcSet={`${earthSmall} 1800w, ${earth} 3600w`}
          sizes="140vw"
          alt=""
          fetchPriority="high"
        />
      </picture>
      <div className="gl-hero__glass" aria-hidden="true" />

      <div className="gl-hero__word gl-hero__word--ink" aria-hidden="true">
        <span>{head}<span ref={splitRef} className="gl-hero__split" />{tail}</span>
      </div>
      <div className="gl-hero__word gl-hero__word--white" aria-hidden="true">
        <span>{head}<span className="gl-hero__split" />{tail}</span>
      </div>

      <div className="container gl-hero__grid">
        <div className="gl-hero__copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="gl-hero__title"><Emph text={hero.title} /></h1>
          <p className="gl-hero__text">{hero.text}</p>
          <Button href={LINKS.global.candidates} arrow>{hero.cta}</Button>
        </div>

        <div className="gl-process">
          <h2 className="gl-process__title">{process.title}</h2>
          <p className="gl-process__text">{process.text}</p>
          <ol className="gl-process__steps">
            {process.steps.map((step, i) => (
              <li key={i} className="gl-step" style={{ '--i': i }}>
                <span className="gl-step__num">0{i + 1}</span>
                <h3 className="gl-step__title">{step.title}</h3>
                <p className="gl-step__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
