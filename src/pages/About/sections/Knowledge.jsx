import { useState } from 'react'
import Emph from '@/components/ui/Emph'
import TechIcon from '@/components/ui/TechIcon'
import Snowfall from '@/components/ui/Snowfall'
import { useLanguage } from '@/context/LanguageContext'
import './Knowledge.css'

// Ícono de cada tecnología, en el mismo orden que knowledge.today / knowledge.future
const TODAY_ICONS = [
  'ai', 'code', 'robot', 'data', 'cloud', 'english', 'security',
  'metaverse', 'blocks', 'chain', 'edge', 'vr', 'gear', 'g5',
]
const FUTURE_ICONS = ['arm', 'atom', 'neural', 'hologram', 'web3', 'fusion']

// Tarjetas por fila en escritorio (hoy: 14 = 2 filas de 7; futuro: 1 fila de 6)
const PER_ROW = 7

// La tercera generación del conocimiento (banda clara con nieve ligera). Arriba, una persiana
// de franjas negras que se abre con el scroll hace la transición desde la banda negra anterior.
// Tarjetas oscuras (hoy) y azules (futuro) en filas que se reparten todo el ancho: al presionar
// una, se ensancha, su ícono y título pasan a la izquierda, el ícono se dibuja y aparece la
// descripción. Todo con CSS (transform/opacity y el ancho de la fila), sin librerías.
export default function Knowledge() {
  const { knowledge } = useLanguage().t.about
  const [open, setOpen] = useState(null)
  const toggle = (key) => setOpen((current) => (current === key ? null : key))

  return (
    <section className="section knowledge surface-light">
      <Snowfall />
      <div className="blinds" aria-hidden="true">
        {Array.from({ length: 7 }, (_, i) => <span key={i} style={{ '--i': i }} />)}
      </div>

      <div className="container">
        <header className="section-head knowledge__head">
          <span className="eyebrow">{knowledge.eyebrow}</span>
          <h2 className="display h2"><Emph text={knowledge.title} /></h2>
        </header>

        <Era
          id="today"
          index="01"
          title={knowledge.todayTitle}
          items={knowledge.today}
          icons={TODAY_ICONS}
          open={open}
          onToggle={toggle}
        />
        <Era
          id="future"
          index="02"
          title={knowledge.futureTitle}
          items={knowledge.future}
          icons={FUTURE_ICONS}
          open={open}
          onToggle={toggle}
        />
      </div>
    </section>
  )
}

function Era({ id, index, title, items, icons, open, onToggle }) {
  const rows = []
  for (let i = 0; i < items.length; i += PER_ROW) rows.push(items.slice(i, i + PER_ROW))

  return (
    <div className={`knowledge__era knowledge__era--${id}`}>
      <p className="knowledge__era-title">
        <span className="knowledge__tag">{index}</span>
        {title}
      </p>
      <div className="tech-rows">
        {rows.map((row, r) => (
          <ul key={r} className="tech-row">
            {row.map((tech, j) => {
              const i = r * PER_ROW + j
              const key = `${id}-${i}`
              return (
                <TechCard
                  key={key}
                  number={String(i + 1).padStart(2, '0')}
                  tech={tech}
                  icon={icons[i]}
                  isOpen={open === key}
                  onToggle={() => onToggle(key)}
                />
              )
            })}
          </ul>
        ))}
      </div>
    </div>
  )
}

function TechCard({ number, tech, icon, isOpen, onToggle }) {
  return (
    <li className={`tech-card ${isOpen ? 'is-open' : ''}`}>
      <button type="button" className="tech-card__btn" aria-expanded={isOpen} onClick={onToggle}>
        <span className="tech-card__num">{number}</span>
        <span className="tech-card__id">
          <TechIcon name={icon} className="tech-card__icon" />
          <span className="tech-card__name">{tech.name}</span>
        </span>
        <span className="tech-card__text">{tech.text}</span>
        <span className="tech-card__toggle" aria-hidden="true" />
      </button>
    </li>
  )
}
