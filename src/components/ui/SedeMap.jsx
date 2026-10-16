import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import SedeMapStatic from './SedeMapStatic'
import './SedeMap.css'

const ZOOM = 13
// OpenStreetMap (sin API key); SedeMap.css lo convierte en un mapa plano azul noche
const TILES = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
// Atribución exigida por la política de uso de OpenStreetMap
const ATTRIBUTION = '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'

// Plan B: si el proveedor de mapas no responde, se muestra la captura de la sede
const FIRST_TILE_TIMEOUT = 10000 // ms sin ninguna imagen del mapa al cargar
const MAX_CONSECUTIVE_ERRORS = 6 // errores seguidos sin ninguna carga exitosa

// Mapa plano bicolor que muestra solo la sede seleccionada.
// Si el servicio de mapas falla (temporal o permanentemente) se reemplaza por `snapshot`.
export default function SedeMap({ coords, label, snapshot }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const markerRef = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const map = L.map(containerRef.current, {
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: true,
    }).setView(coords, ZOOM)
    // Enlace "Leaflet" de la atribución: en pestaña nueva, como todos los enlaces externos
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" target="_blank" rel="noopener noreferrer">Leaflet</a>')

    const tiles = L.tileLayer(TILES, { maxZoom: 18, attribution: ATTRIBUTION }).addTo(map)
    L.control.zoom({ position: 'bottomright' }).addTo(map)

    // Detección de fallas del proveedor
    let loaded = 0
    let consecutiveErrors = 0
    tiles.on('tileload', () => {
      loaded += 1
      consecutiveErrors = 0
    })
    tiles.on('tileerror', () => {
      consecutiveErrors += 1
      if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) setFailed(true)
    })
    const timeout = setTimeout(() => {
      if (loaded === 0) setFailed(true)
    }, FIRST_TILE_TIMEOUT)

    markerRef.current = L.marker(coords, {
      icon: L.divIcon({ className: 'sede-pin', iconSize: [18, 18] }),
      keyboard: false,
    }).addTo(map)

    mapRef.current = map
    return () => {
      clearTimeout(timeout)
      mapRef.current?.remove()
      mapRef.current = null
    }
    // El mapa se crea una sola vez; los cambios de sede los maneja el efecto de abajo
  }, [])

  // Si el proveedor falló, se libera el mapa (deja de pedir imágenes) y queda la captura
  useEffect(() => {
    if (!failed) return
    mapRef.current?.remove()
    mapRef.current = null
  }, [failed])

  useEffect(() => {
    mapRef.current?.flyTo(coords, ZOOM, { duration: 1.1 })
    markerRef.current?.setLatLng(coords)
  }, [coords])

  if (failed) return <SedeMapStatic snapshot={snapshot} label={label} />

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
