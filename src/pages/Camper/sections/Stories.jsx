import { useEffect, useRef, useState } from 'react'
import Emph from '@/components/ui/Emph'
import VideoPlayer from '@/components/ui/VideoPlayer'
import { VIDEOS } from '@/constants/videos'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './Stories.css'

// Video de cada historia, en el mismo orden que stories.items (Santiago, Juan, Edinson)
const STORY_VIDEOS = [VIDEOS.santiago, VIDEOS.juanRubio, VIDEOS.edinson]

// Historias de éxito: una sola fila con el texto de la sección a la izquierda y los tres
// videos verticales al lado, cada uno con el nombre y el rol debajo (sin espacios vacíos).
// Entrada: al llegar por primera vez, la sección pasa de negro a blanco con una apertura
// circular desde arriba (amanece después de que la luna se oculta en Rutas) y se queda blanca
// hasta recargar la página. Fondo claro con trama de puntos fina y un brillo azul suave arriba.
export default function Stories() {
  const { t } = useLanguage()
  const { stories } = t.camper
  const sectionRef = useRef(null)
  const [day, setDay] = useState(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setDay(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDay(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`stories section-rule ${day ? 'is-day' : ''}`}>
      <div className="stories__day" aria-hidden="true" />
      <div className="container stories__layout">
        <header className="stories__head">
          <span className="mono-label stories__eyebrow">{stories.eyebrow}</span>
          <h2 className="display h2"><Emph text={stories.title} /></h2>
          <p className="stories__text">{stories.text}</p>
        </header>

        <div className="stories__videos">
          {stories.items.map((story, i) => (
            <StoryCard
              key={story.name}
              index={i}
              story={story}
              video={STORY_VIDEOS[i]}
              label={`${stories.videoPrefix} ${story.name}`}
              kind={t.placeholder.video}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Cada video entra subiendo con un leve giro, uno tras otro
function StoryCard({ index, story, video, label, kind }) {
  const ref = useReveal()
  return (
    <article ref={ref} className="story reveal reveal--rotate" style={{ '--d': `${index * 0.12}s` }}>
      <VideoPlayer src={video?.src} poster={video?.poster} label={label} kind={kind} vertical className="story__video" />
      <div className="story__caption">
        <p className="story__name">{story.name}</p>
        <p className="story__role">{story.role}</p>
      </div>
    </article>
  )
}
