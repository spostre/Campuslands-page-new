import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import MacWindow from '@/components/ui/MacWindow'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import chatImage from '@/assets/images/orbit-chat.webp'
import '@/pages/Home/sections/Orbit.css'
import './GlOrbit.css'

// Órbit en WhatsApp: la misma sección del Inicio (texto + ventana con la captura del chat),
// aquí sobre negro con una luz morada desenfocada detrás de la ventana. Empieza con el mismo
// negro en que termina la portada, así no se ve ningún corte entre las dos.
export default function GlOrbit() {
  const { orbit } = useLanguage().t.global
  const { orbit: homeOrbit } = useLanguage().t.home
  const copyRef = useReveal()
  const windowRef = useReveal()

  return (
    <section className="section orbit gl-orbit surface-dark">
      <div className="gl-orbit__glow" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container orbit__grid">
        <div ref={copyRef} className="orbit__copy reveal-stagger">
          <span className="eyebrow" style={{ '--i': 0 }}>{orbit.eyebrow}</span>
          <h2 className="display h2" style={{ '--i': 1 }}><Emph text={orbit.title} /></h2>
          <p className="lead orbit__text" style={{ '--i': 2 }}>{orbit.text}</p>
          <div style={{ '--i': 3 }}>
            <Button href={LINKS.global.orbit} arrow>{orbit.cta}</Button>
          </div>
        </div>

        <div ref={windowRef} className="reveal reveal--right">
          <MacWindow className="orbit__window" title={homeOrbit.windowTitle} url={homeOrbit.windowUrl}>
            <img
              className="orbit__chat"
              src={chatImage}
              alt={homeOrbit.imageLabel}
              width="700"
              height="435"
              loading="lazy"
            />
          </MacWindow>
        </div>
      </div>
    </section>
  )
}
