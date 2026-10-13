import Emph from '@/components/ui/Emph'
import VideoFrame from '@/components/ui/VideoFrame'
import { useLanguage } from '@/context/LanguageContext'
import './Stories.css'

// Historias de éxito en mosaico (patrón "Recently shipped" de Idea 3):
// una tarjeta grande a la izquierda y dos apiladas a la derecha, cada una con su video.
export default function Stories() {
  const { t } = useLanguage()
  const { stories } = t.camper
  const [main, ...rest] = stories.items

  return (
    <section className="stories camper-glow">
      <div className="container">
        <header className="stories__head">
          <span className="mono-label stories__eyebrow">{stories.eyebrow}</span>
          <h2 className="display h2"><Emph text={stories.title} /></h2>
          <p className="stories__text">{stories.text}</p>
        </header>

        <div className="stories__grid">
          <article className="story story--main">
            {/* Trazos decorativos de fondo, en la línea de Idea 3 */}
            <span className="story__lines" aria-hidden="true" />
            <VideoFrame label={`${stories.videoPrefix} ${main.name}`} kind={t.placeholder.video} />
            <StoryCaption story={main} />
          </article>

          {rest.map((story) => (
            <article key={story.name} className="story story--side">
              <StoryCaption story={story} />
              <VideoFrame label={`${stories.videoPrefix} ${story.name}`} kind={t.placeholder.video} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StoryCaption({ story }) {
  return (
    <div className="story__caption">
      <p className="story__name">{story.name}</p>
      <p className="story__role">{story.role}</p>
    </div>
  )
}
