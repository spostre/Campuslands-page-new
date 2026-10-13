import { lazy, Suspense, useState } from 'react'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { SEDES } from '@/data/sedes'
import { useLanguage } from '@/context/LanguageContext'
import { useNearViewport } from '@/hooks/useNearViewport'
import SedeMapStatic from '@/components/ui/SedeMapStatic'
import './Locations.css'

// Leaflet pesa ~150KB: el mapa se descarga solo cuando la sección se acerca a la pantalla
// Si no se pudiera descargar el código del mapa, se usa la captura de la sede (plan B)
const SedeMap = lazy(() =>
  import('@/components/ui/SedeMap').catch(() => ({ default: SedeMapStatic })),
)

export default function Locations() {
  const { t, lang } = useLanguage()
  const { locations } = t.home
  const [sedeId, setSedeId] = useState(SEDES[0].id)
  const sede = SEDES.find((s) => s.id === sedeId)
  const [mapRef, mapVisible] = useNearViewport()

  return (
    <section id="sedes" className="section locations surface-light">
      <Divider variant="planet" align="start" />
      <div className="container locations__grid">
        <div className="locations__copy">
          <span className="eyebrow">{locations.eyebrow}</span>
          <h2 className="display h2"><Emph text={locations.title} /></h2>
          <p className="lead locations__text">{locations.text}</p>

          <label className="locations__field">
            <span>{locations.selectLabel}</span>
            <select value={sedeId} onChange={(e) => setSedeId(e.target.value)}>
              {SEDES.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </label>

          <Button href={LINKS.scheduleVisit} arrow>{locations.cta}</Button>
        </div>

        <figure className="locations__map" ref={mapRef}>
          {mapVisible ? (
            <Suspense fallback={<div className="sede-map sede-map--loading" />}>
              <SedeMap coords={sede.coords} label={sede.name} snapshot={sede.snapshot} />
            </Suspense>
          ) : (
            <div className="sede-map sede-map--loading" />
          )}
          <figcaption className="locations__info" aria-live="polite">
            <strong>{sede.name}</strong>
            <span>{sede.place[lang]}</span>
            <span>{sede.address ?? locations.addressPending}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
