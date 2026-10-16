import Emph from '@/components/ui/Emph'
import { useLanguage } from '@/context/LanguageContext'
import { useCountUp } from '@/hooks/useCountUp'
import { useNearViewport } from '@/hooks/useNearViewport'
import mapLarge from '@/assets/images/maps/latam-satellite.webp'
import mapSmall from '@/assets/images/maps/latam-satellite-1200.webp'
import { GEO_RATIO, SEDES } from './sedesGeo'
import './Impact.css'

// Nuestras sedes: imagen satelital real de Centroamérica y el norte de Sudamérica
// (NASA Blue Marble, dominio público) ocupando toda la sección, con las sedes marcadas
// (marcas fijas; la sede nueva en azul). Encima, a la izquierda sobre el océano,
// el título y las tres tarjetas de cifras.
export default function Impact() {
  const { impact } = useLanguage().t.about

  return (
    <section className="impact surface-dark">
      <figure className="geo" style={{ '--geo-ratio': GEO_RATIO }} aria-label={impact.mapLabel}>
        <img
          className="geo__img"
          src={mapLarge}
          srcSet={`${mapSmall} 1200w, ${mapLarge} 2400w`}
          sizes="100vw"
          alt=""
          loading="lazy"
          decoding="async"
        />

        <ul className="geo__sedes">
          {impact.countries.flatMap((country, ci) =>
            country.sedes.map((sede, si) => {
              const pos = SEDES[ci][si]
              return (
                <li
                  key={sede.name}
                  className={`sede-pin sede-pin--${pos.side} ${sede.isNew ? 'is-new' : ''}`}
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                  <span className="sede-pin__mark" aria-hidden="true" />
                  <span className="sede-pin__label">
                    <strong>{sede.name}</strong>
                    <span>
                      {sede.isNew
                        ? impact.newLabel
                        : sede.capacity
                          ? `${impact.capacityLabel}: ${sede.capacity} ${impact.capacity}`
                          : impact.noData}
                    </span>
                  </span>
                </li>
              )
            }),
          )}
        </ul>
      </figure>

      <div className="container impact__content">
        <header className="impact__head">
          <span className="eyebrow">{impact.eyebrow}</span>
          <h2 className="display h2"><Emph text={impact.title} /></h2>
        </header>

        <ul className="impact__stats">
          {impact.stats.map((stat, i) => (
            <Stat key={i} {...stat} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function Stat({ label, value, note }) {
  const [ref, visible] = useNearViewport('0px')
  const isNumber = /\d/.test(value) && !/[a-z]/i.test(value)
  return (
    <li ref={ref} className="impact-stat">
      <span className="impact-stat__label">{label}</span>
      {isNumber && visible ? <Counter value={value} /> : <strong className="impact-stat__value">{isNumber ? '0' : value}</strong>}
      {note && <span className="impact-stat__note">{note}</span>}
    </li>
  )
}

function Counter({ value }) {
  const display = useCountUp(value)
  return (
    <strong className="impact-stat__value">
      <span aria-hidden="true">{display}</span>
      <span className="visually-hidden">{value}</span>
    </strong>
  )
}
