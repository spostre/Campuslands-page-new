import Emph from '@/components/ui/Emph'
import { FULLSERVICE_CLIENTS } from '@/data/fullServiceClients'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import './FsClients.css'

const COLUMNS = 5

// Empresas que confían (banda clara). Sin carrusel: todos los logos caben en una cuadrícula.
// Idea de tragamonedas, pero sobria: cada columna es un "rodillo" que, al entrar en pantalla,
// llega desde arriba o desde abajo (alternando) y se detiene con un pequeño rebote.
export default function FsClients() {
  const { clients } = useLanguage().t.fullService
  const headRef = useReveal()
  const reelsRef = useReveal()

  const columns = Array.from({ length: COLUMNS }, (_, c) =>
    FULLSERVICE_CLIENTS.filter((_, i) => i % COLUMNS === c),
  )

  return (
    <section className="section fs-clients surface-light">
      <div className="container">
        <header ref={headRef} className="fs-clients__head reveal">
          <span className="eyebrow">{clients.eyebrow}</span>
          <h2 className="display h2"><Emph text={clients.title} /></h2>
          <p className="lead">{clients.text}</p>
        </header>

        <div ref={reelsRef} className="fs-reels">
          {columns.map((col, c) => (
            <ul key={c} className={`fs-reel fs-reel--${c % 2 ? 'up' : 'down'}`} style={{ '--c': c }}>
              {col.map((client) => (
                <li key={client.name} className="fs-client">
                  <img src={client.logo} alt={client.name} loading="lazy" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
