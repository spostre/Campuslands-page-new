import Emph from '@/components/ui/Emph'
import { HIRING_COMPANIES } from '@/data/hiringCompanies'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './GlCompanies.css'

const ROWS = 4

// Empresas que contratan (banda clara). Mismo efecto de tragamonedas que los clientes de
// FullService, pero en horizontal: cada fila es un rodillo que entra desde la izquierda o la
// derecha (alternando) y se detiene con un pequeño rebote. Todas las empresas caben, sin carrusel.
// Overlay: arcos finos de latitud, como un globo visto de cerca, en la esquina superior.
export default function GlCompanies() {
  const { companies } = useLanguage().t.global
  const headRef = useReveal()
  const reelsRef = useReveal()
  const perRow = Math.ceil(HIRING_COMPANIES.length / ROWS)
  const rows = Array.from({ length: ROWS }, (_, r) => HIRING_COMPANIES.slice(r * perRow, (r + 1) * perRow))

  return (
    <section className="section gl-companies surface-light">
      <div className="container">
        <header ref={headRef} className="gl-companies__head reveal">
          <span className="eyebrow">{companies.eyebrow}</span>
          <h2 className="display h2"><Emph text={companies.title} /></h2>
          <p className="lead">{companies.text}</p>
        </header>

        <div ref={reelsRef} className="gl-reels">
          {rows.map((row, r) => (
            <ul key={r} className={`gl-reel gl-reel--${r % 2 ? 'left' : 'right'}`} style={{ '--r': r }}>
              {row.map((c) => (
                <li key={c.name} className="gl-company">
                  <img src={c.logo} alt={c.name} loading="lazy" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
