import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import Starfield from '@/components/ui/Starfield'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import helmetImage from '@/assets/images/logo-mark.png'
import './FsHero.css'

/*
 * Portada de FullService (banda negra, pantalla completa). Secuencia al cargar:
 *   1. Aparece el texto de la izquierda (título, texto y botón).
 *   2. Una estrella llega desde la esquina superior derecha y choca en el centro del escenario.
 *   3. Destello y onda expansiva: la estrella se convierte en un hexágono que gira muy despacio,
 *      con el casco del logo tenue en su interior.
 *   4. Del choque salen las tres etiquetas de servicios, y se enciende el fondo de estrellas.
 * Todo con CSS (transform/opacity); el estado final es el estilo normal de cada pieza.
 */
export default function FsHero() {
  const { hero } = useLanguage().t.fullService

  return (
    <section className="fs-hero surface-dark has-stars">
      {/* Fondo de estrellas: se enciende justo después del choque */}
      <div className="fs-hero__sky" aria-hidden="true">
        <Starfield origin="right" density={0.9} />
      </div>
      {/* Overlay que deja la onda del choque: retícula de puntos + luz blanca alrededor del hexágono */}
      <div className="fs-hero__veil" aria-hidden="true" />
      <span className="fs-hero__shock" aria-hidden="true" />

      <div className="container fs-hero__grid">
        <div className="fs-hero__copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="display h1 fs-hero__title"><Emph text={hero.title} /></h1>
          <p className="lead fs-hero__text">{hero.text}</p>
          <div className="btn-row">
            <Button href={LINKS.fullService.quote} arrow>{hero.cta}</Button>
          </div>
        </div>

        <div className="fs-stage">
          <span className="fs-stage__star" aria-hidden="true" />
          <span className="fs-stage__flash" aria-hidden="true" />
          <span className="fs-stage__wave" aria-hidden="true" />

          <div className="fs-hex" aria-hidden="true">
            <span className="fs-hex__glow" />
            <svg className="fs-hex__shape" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="fs-hex-stroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="0.5" stopColor="#8a9099" />
                  <stop offset="1" stopColor="#f2f4f7" />
                </linearGradient>
                <linearGradient id="fs-hex-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#24272d" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#0c0d10" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <polygon points="100,6 181,53 181,147 100,194 19,147 19,53" fill="url(#fs-hex-fill)" stroke="url(#fs-hex-stroke)" strokeWidth="1.4" />
              <polygon points="100,22 167,61 167,139 100,178 33,139 33,61" fill="none" stroke="rgb(255 255 255 / 0.14)" strokeWidth="0.8" />
            </svg>
            <img className="fs-hex__logo" src={helmetImage} alt="" />
          </div>

          <ul className="fs-tags">
            {hero.tags.map((tag, i) => (
              <li key={tag} className="fs-tag" style={{ '--i': i }}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
