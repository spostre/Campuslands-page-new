import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import SocialIcon from '@/components/ui/SocialIcon'
import { NETWORKS } from '@/pages/Home/sections/Social'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { VIDEOS } from '@/constants/videos'
import './AboutStories.css'

// Historias de éxito (banda negra): cinta de 8 videos verticales que se recorre con las
// flechas (o deslizando). Detrás, una luz naranja de varios tonos (como la de Idea 2),
// suave y por debajo de los videos para no estorbar. Debajo de la cinta, las redes
// (antes sección propia "Síguenos") en una fila compacta junto a las flechas.
// La entrada desde la banda clara anterior es un desvanecido suave (degradado estático).
export default function AboutStories() {
  const { t } = useLanguage()
  const { stories } = t.about
  const { social } = t.home
  const videos = VIDEOS.aboutStories
  const [playing, setPlaying] = useState(null) // video abierto en la ventana (o null)

  const trackRef = useRef(null)
  const [edges, setEdges] = useState({ start: true, end: false })

  const updateEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setEdges({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    })
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  // Avanza o retrocede exactamente un video (ancho de la tarjeta + separación)
  const move = (direction) => {
    const el = trackRef.current
    const card = el?.firstElementChild
    if (!card) return
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <section className="section about-stories surface-dark">
      <div className="about-stories__glow" aria-hidden="true">
        <span /><span /><span />
      </div>

      <div className="container">
        <div className="about-stories__head">
          <header>
            <span className="eyebrow">{stories.eyebrow}</span>
            <h2 className="display h2"><Emph text={stories.title} /></h2>
            <p className="lead about-stories__text">{stories.text}</p>
          </header>
          <div className="btn-row">
            <Button href={LINKS.about.start}>{stories.cta}</Button>
            <Button href={LINKS.about.advice} variant="ghost" arrow>{stories.secondary}</Button>
          </div>
        </div>

        <ul ref={trackRef} className="reel-track" onScroll={updateEdges}>
          {videos.map((v, i) => (
            <li key={v.name} className="reel-card">
              <button
                type="button"
                className="reel-card__btn"
                onClick={() => setPlaying(v)}
                aria-label={`${stories.watch} ${v.name}`}
              >
                <img className="reel-card__poster" src={v.poster} alt="" loading="lazy" />
                <span className="reel-card__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
                </span>
                <span className="reel-card__caption">
                  <span className="reel-card__num">{String(i + 1).padStart(2, '0')} · {stories.video}</span>
                  <span className="reel-card__label">{v.name}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="reel-foot">
          <div className="follow">
            <span className="follow__label">{social.eyebrow}</span>
            <ul className="follow__list">
              {NETWORKS.map((n) => (
                <li key={n.key}>
                  <a className="follow__link" href={n.href} target="_blank" rel="noopener noreferrer">
                    <SocialIcon name={n.key} className="follow__icon" />
                    <span className="follow__name">{n.name}</span>
                    <span className="follow__handle">{n.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reel-controls">
            <button
              type="button"
              className="reel-controls__btn"
              onClick={() => move(-1)}
              disabled={edges.start}
              aria-label={stories.prev}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button
              type="button"
              className="reel-controls__btn"
              onClick={() => move(1)}
              disabled={edges.end}
              aria-label={stories.next}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
      {playing && <VideoModal video={playing} closeLabel={stories.close} onClose={() => setPlaying(null)} />}
    </section>
  )
}

// Ventana con el video en su formato real (vertical u horizontal). Se cierra con el botón, con
// Esc o tocando fuera del video; mientras está abierta, la página de fondo no se desplaza.
function VideoModal({ video, closeLabel, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="reel-modal" role="dialog" aria-modal="true" aria-label={video.name} onClick={onClose}>
      <div className={`reel-modal__box${video.vertical ? ' is-vertical' : ''}`} onClick={(e) => e.stopPropagation()}>
        <video className="reel-modal__video" src={video.src} poster={video.poster} controls autoPlay playsInline />
        <div className="reel-modal__bar">
          <span>{video.name}</span>
          <button ref={closeRef} type="button" className="reel-modal__close" onClick={onClose} aria-label={closeLabel}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}
