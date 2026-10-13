import './VideoFrame.css'

// Recuadro de video 16:9 con borde fino y discreto y botón de reproducción.
// Hoy es un espacio reservado (no hay videos todavía): cuando exista el archivo o el
// enlace del video, se reemplaza el contenido por el reproductor.
export default function VideoFrame({ label, kind, className = '' }) {
  return (
    <div className={`video-frame ${className}`} role="img" aria-label={label}>
      <span className="video-frame__play" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
      </span>
      {kind && <span className="video-frame__kind">{kind}</span>}
      <span className="video-frame__label">{label}</span>
    </div>
  )
}
