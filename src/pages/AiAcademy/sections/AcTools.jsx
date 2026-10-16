import { useState } from 'react'
import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './AcTools.css'

// Módulos y herramientas (banda negra). Arriba los cuatro módulos formativos en columnas
// numeradas. Abajo las 14 herramientas como barras desplegables en dos columnas (una abierta a
// la vez): al abrir, la barra muestra una descripción breve. Sin logos de marcas: cada
// herramienta lleva su inicial en un cuadro, para no depender de licencias de logos.
export default function AcTools() {
  const { modules, tools } = useLanguage().t.aiAcademy
  const [open, setOpen] = useState(0)
  const modulesRef = useReveal()

  return (
    <section className="section ac-tools surface-dark">
      <div className="container">
        <header className="ac-tools__head">
          <span className="eyebrow">{modules.eyebrow}</span>
          <h2 className="display h2"><Emph text={modules.title} /></h2>
        </header>

        <ol ref={modulesRef} className="ac-modules reveal-stagger">
          {modules.items.map((m, i) => (
            <li key={m.title} style={{ '--i': i }}>
              <span className="ac-modules__code">Module 0{i + 1}</span>
              <h3 className="ac-modules__title">{m.title}</h3>
              <p className="ac-modules__text">{m.text}</p>
            </li>
          ))}
        </ol>

        <div className="ac-tools__body">
          <div className="ac-tools__intro">
            <h3 className="ac-tools__title"><Emph text={tools.title} /></h3>
            <p>{modules.text}</p>
            <div className="btn-row">
              <Button href={LINKS.aiAcademy.contact} arrow>{modules.ctaPlan}</Button>
              <Button href={LINKS.aiAcademy.diagnosis} variant="ghost">{modules.ctaDiagnosis}</Button>
            </div>
          </div>

          <ul className="ac-acc">
            {tools.items.map((tool, i) => {
              const isOpen = open === i
              const id = `ac-tool-${i}`
              return (
                <li key={tool.name} className={`ac-acc__item${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="ac-acc__btn"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="ac-acc__mark" aria-hidden="true">{tool.name.charAt(0)}</span>
                    <span className="ac-acc__name">{tool.name}</span>
                    <span className="ac-acc__plus" aria-hidden="true" />
                  </button>
                  <div id={id} className="ac-acc__panel" role="region">
                    <p>{tool.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
