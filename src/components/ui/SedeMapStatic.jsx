import './SedeMap.css'

// Plan B del mapa de sedes: captura del mismo mapa (generada con OpenStreetMap, con su
// atribución incluida en la imagen). Se usa SOLO si el proveedor de mapas falla o si no se
// pudo descargar el código del mapa interactivo. No depende de ningún servicio externo.
export default function SedeMapStatic({ snapshot, label }) {
  return (
    <div className="sede-map sede-map--static" role="img" aria-label={label}>
      {snapshot && <img src={snapshot} alt="" loading="lazy" />}
    </div>
  )
}
