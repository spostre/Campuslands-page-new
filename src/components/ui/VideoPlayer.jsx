import { useEffect, useRef, useState } from 'react'
import VideoFrame from './VideoFrame'
import './VideoPlayer.css'

// Reproductor de video con póster. No descarga el video hasta que se presiona reproducir
// (preload="none"). Antes de empezar, todo el recuadro es un botón con un "Play" grande y claro;
// después se usan los controles normales del navegador.
// Plan B: si el archivo o el póster no cargan, muestra el recuadro reservado (VideoFrame).
export default function VideoPlayer({ src, poster, label, kind, vertical = false, className = '' }) {
  const [failed, setFailed] = useState(!src)
  const [started, setStarted] = useState(false)
  const videoRef = useRef(null)

  // Si el póster no existe, lo más probable es que el video tampoco: se pasa al plan B
  useEffect(() => {
    if (!poster) return
    const img = new Image()
    img.onerror = () => setFailed(true)
    img.src = poster
  }, [poster])

  const start = () => {
    setStarted(true)
    videoRef.current?.play().catch(() => {})
  }

  if (failed) {
    return (
      <VideoFrame
        label={label}
        kind={kind}
        className={`${vertical ? 'video-frame--vertical' : ''} ${className}`}
      />
    )
  }

  return (
    <div className={`player ${vertical ? 'player--vertical' : ''} ${started ? 'is-started' : ''} ${className}`}>
      <video
        ref={videoRef}
        className="player__video"
        src={src}
        poster={poster}
        controls={started}
        preload="none"
        playsInline
        aria-label={label}
        onError={() => setFailed(true)}
      />
      {!started && (
        <button type="button" className="player__start" onClick={start} aria-label={label}>
          <span className="player__play" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
          </span>
        </button>
      )}
    </div>
  )
}
