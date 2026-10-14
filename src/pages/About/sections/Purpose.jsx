import Emph from '@/components/ui/Emph'
import { useLanguage } from '@/context/LanguageContext'
import './Purpose.css'

// Misión y visión (banda negra): dos citas grandes separadas por una línea fina.
// Su transición hacia la banda clara siguiente es la persiana de Tecnologías (Knowledge).
export default function Purpose() {
  const { purpose } = useLanguage().t.about

  return (
    <section className="section purpose surface-dark">
      <div className="container purpose__grid">
        {[purpose.mission, purpose.vision].map((item) => (
          <figure key={item.eyebrow} className="purpose__item">
            <span className="eyebrow">{item.eyebrow}</span>
            <h2 className="display h2 purpose__title"><Emph text={item.title} /></h2>
            <blockquote className="purpose__quote">
              <span className="purpose__mark" aria-hidden="true">“</span>
              {item.quote}
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  )
}
