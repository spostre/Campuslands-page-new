import Emph from '@/components/ui/Emph'
import VideoPlayer from '@/components/ui/VideoPlayer'
import { VIDEOS } from '@/constants/videos'
import { useLanguage } from '@/context/LanguageContext'
import './Stories.css'

// Video de cada historia, en el mismo orden que stories.items (Santiago, Juan, Edinson)
const STORY_VIDEOS = [VIDEOS.santiago, VIDEOS.juanRubio, VIDEOS.edinson]

// Historias de éxito: una sola fila con el texto de la sección a la izquierda y los tres
// videos verticales al lado, cada uno con el nombre y el rol debajo (sin espacios vacíos).
export default function Stories() {
  const { t } = useLanguage()
  const { stories } = t.camper

  return (
    <section className="stories section-rule">
      <div className="container stories__layout">
        <header className="stories__head">
          <span className="mono-label stories__eyebrow">{stories.eyebrow}</span>
          <h2 className="display h2"><Emph text={stories.title} /></h2>
          <p className="stories__text">{stories.text}</p>
        </header>

        <div className="stories__videos">
          {stories.items.map((story, i) => (
            <article key={story.name} className="story">
              <VideoPlayer
                src={STORY_VIDEOS[i]?.src}
                poster={STORY_VIDEOS[i]?.poster}
                label={`${stories.videoPrefix} ${story.name}`}
                kind={t.placeholder.video}
                vertical
                className="story__video"
              />
              <div className="story__caption">
                <p className="story__name">{story.name}</p>
                <p className="story__role">{story.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
