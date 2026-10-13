import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './SedeMap.css'

const ZOOM = 13
// OpenStreetMap (sin API key); SedeMap.css lo convierte en un mapa plano azul noche
const TILES = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

// Mapa plano bicolor que muestra solo la sede seleccionada.
export default function SedeMap({ coords, label }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const markerRef = useRef(null)

  useEffect(() => {
    const map = L.map(containerRef.current, {
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: true,
    }).setView(coords, ZOOM)

    L.tileLayer(TILES, {
      maxZoom: 18,
      attribution: '© OpenStreetMap',
    }).addTo(map)
    L.control.zoom({ position: 'bottomright' }).addTo(map)

    markerRef.current = L.marker(coords, {
      icon: L.divIcon({ className: 'sede-pin', iconSize: [18, 18] }),
      keyboard: false,
    }).addTo(map)

    mapRef.current = map
    return () => map.remove()
    // El mapa se crea una sola vez; los cambios de sede los maneja el efecto de abajo
  }, [])

  useEffect(() => {
    mapRef.current?.flyTo(coords, ZOOM, { duration: 1.1 })
    markerRef.current?.setLatLng(coords)
  }, [coords])

  return (
    <>
      <div ref={containerRef} className="sede-map" role="img" aria-label={label} />
      {/* Filtro bicolor: oscuro → azul claro #8fb2ff, claro → azul noche #0e1a33 */}
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
        <filter id="sede-map-night" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="-0.1076 -0.3619 -0.0365 0 0.561
                    -0.1267 -0.4263 -0.0430 0 0.698
                    -0.1701 -0.5722 -0.0578 0 1
                    0 0 0 1 0"
          />
        </filter>
      </svg>
    </>
  )
}
