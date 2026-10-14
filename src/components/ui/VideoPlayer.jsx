import { useEffect, useState } from 'react'
import VideoFrame from './VideoFrame'
import './VideoPlayer.css'

// Reproductor de video con póster. No descarga el video hasta que se presiona reproducir
// (preload="none"). Plan B: si el archivo o el póster no cargan, muestra el recuadro
// reservado (VideoFrame) con el nombre del video.
export default function VideoPlayer({ src, poster, label, kind, vertical = false, className = '' }) {
  const [failed, setFailed] = useState(!src)

  // Si el póster no existe, lo más probable es que el video tampoco: se pasa al plan B
  useEffect(() => {
    if (!poster) return
    const img = new Image()
    img.onerror = () => setFailed(true)
    img.src = poster
  }, [poster])

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
    <div className={`player ${vertical ? 'player--vertical' : ''} ${className}`}>
      <video
        className="player__video"
        src={src}
        poster={poster}
        controls
        preload="none"
        playsInline
        aria-label={label}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
