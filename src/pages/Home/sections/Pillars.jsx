import Divider from '@/components/ui/Divider'
import Emph from '@/components/ui/Emph'
import { useLanguage } from '@/context/LanguageContext'
import './Pillars.css'

// ¿Qué aprenden nuestros campers? – 4 pilares con descripción breve (sección clara)
export default function Pillars() {
  const { pillars } = useLanguage().t.home

  return (
    <section id="formacion" className="section pillars surface-light">
      <Divider variant="squiggle" />
      <div className="container">
        <h2 className="display h2 section-head"><Emph text={pillars.title} /></h2>
        <ol className="pillars__grid">
          {pillars.items.map((item, i) => (
            <li key={item.title} className="pillar">
              <span className="pillar__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="pillar__title">{item.title}</h3>
              <p className="pillar__text">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
