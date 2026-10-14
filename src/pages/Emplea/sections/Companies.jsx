import Emph from '@/components/ui/Emph'
import { HIRING_COMPANIES } from '@/data/hiringCompanies'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './Companies.css'

// Empresas que contratan (banda negra): tarjetas verticales con el logo y el nombre abajo,
// en una cinta continua a todo el ancho (como los aliados del Inicio). Al entrar en pantalla
// las tarjetas aparecen en orden, cada una desplegándose de arriba hacia abajo ("bandera"),
// y recién entonces la cinta empieza a correr. No es interactiva.
export default function Companies() {
  const { companies } = useLanguage().t.emplea
  const headRef = useReveal()
  const beltRef = useReveal()

  return (
    <section className="section companies surface-dark">
      <div className="container">
        <header ref={headRef} className="companies__head reveal">
          <span className="eyebrow">{companies.eyebrow}</span>
          <h2 className="display h2"><Emph text={companies.title} /></h2>
          <p className="lead companies__text">{companies.text}</p>
        </header>
      </div>

      <div ref={beltRef} className="companies__belt">
        {/* Dos copias de la lista para que el bucle no tenga cortes */}
        <ul className="companies__track">
          {[...HIRING_COMPANIES, ...HIRING_COMPANIES].map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              className="company-card"
              style={{ '--i': i % HIRING_COMPANIES.length }}
              aria-hidden={i >= HIRING_COMPANIES.length || undefined}
            >
              <img src={c.logo} alt={c.name} loading="lazy" />
              <span className="company-card__name">{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
