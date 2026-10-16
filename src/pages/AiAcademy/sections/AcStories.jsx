import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import logoMark from '@/assets/images/logo-mark.webp'
import './AcStories.css'

const initials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('')

// Historias + cierre (banda clara). El casco del logo va en la esquina superior derecha,
// inclinado ligeramente. Cuatro testimonios planos en cuadrícula de 2 × 2 separados
// por líneas finas (comilla en serif cursiva, iniciales en un cuadro). Al final, una banda negra
// rectangular con el llamado "Implementa IA con acompañamiento experto" y su botón.
export default function AcStories() {
  const { stories, final } = useLanguage().t.aiAcademy

  return (
    <section className="section ac-stories surface-light">
      <img className="ac-stories__logo" src={logoMark} alt="" aria-hidden="true" loading="lazy" />
      <div className="container">
        <header className="ac-stories__head">
          <span className="eyebrow">{stories.eyebrow}</span>
          <h2 className="display h2"><Emph text={stories.title} /></h2>
        </header>

        <ul className="ac-quotes">
          {stories.items.map((s, i) => (
            <li key={i} className="ac-quote">
              <span className="ac-quote__mark" aria-hidden="true">“</span>
              <blockquote>{s.quote}</blockquote>
              <div className="ac-quote__who">
                <span className="ac-quote__avatar" aria-hidden="true">{initials(s.name)}</span>
                <span>
                  <strong>{s.name}</strong>
                  <span>{s.role}</span>
                </span>
                <time>{s.when}</time>
              </div>
            </li>
          ))}
        </ul>

        <div className="ac-final">
          <div>
            <h2 className="display h2"><Emph text={final.title} /></h2>
            <p>{final.text}</p>
          </div>
          <Button href={LINKS.aiAcademy.enroll} arrow>{final.cta}</Button>
        </div>
      </div>
    </section>
  )
}
