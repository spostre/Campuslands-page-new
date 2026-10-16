import Starfield from '@/components/ui/Starfield'
import { TECH_LOGOS } from '@/data/techLogos'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './FsStack.css'

const LOGO_KEYS = { 'Next.js': 'nextjs', 'AWS Cloud': 'aws', Rust: 'rust' }

// Tech_Stack (banda negra con estrellas): título y tres tarjetas blancas simples, una por
// tecnología. Al entrar en pantalla las tres aparecen a la vez creciendo desde más pequeñas
// (escala) en 1 segundo. "FullService Core" va como etiqueta sobre el título.
export default function FsStack() {
  const { stack } = useLanguage().t.fullService
  const cardsRef = useReveal()

  return (
    <section className="section fs-stack surface-dark has-stars">
      <Starfield origin="top" density={0.7} />

      <div className="container">
        <header className="fs-stack__head">
          <span className="eyebrow">{stack.eyebrow}</span>
          <h2 className="display h2">{stack.title}</h2>
          <p className="lead fs-stack__text">{stack.text}</p>
        </header>

        <ul ref={cardsRef} className="fs-tech">
          {stack.items.map((name, i) => (
            <li key={name} className="fs-tech__card">
              <span className="fs-tech__index">0{i + 1} / 0{stack.items.length}</span>
              <svg className="fs-tech__logo" viewBox="0 0 24 24" aria-hidden="true">
                <path d={TECH_LOGOS[LOGO_KEYS[name]]} />
              </svg>
              <span className="fs-tech__name">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
