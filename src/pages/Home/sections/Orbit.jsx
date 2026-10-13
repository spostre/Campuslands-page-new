import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'
import Emph from '@/components/ui/Emph'
import MacWindow from '@/components/ui/MacWindow'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import chatImage from '@/assets/images/orbit-chat.jpg'
import './Orbit.css'

// Chatbot Órbit (sección clara) con la captura real del chat de WhatsApp
export default function Orbit() {
  const { orbit } = useLanguage().t.home

  return (
    <section id="orbit" className="section orbit surface-light">
      <Divider variant="squiggle" align="end" />
      <div className="container orbit__grid">
        <div className="orbit__copy">
          <span className="eyebrow">{orbit.eyebrow}</span>
          <h2 className="display h2"><Emph text={orbit.title} /></h2>
          <p className="lead orbit__text">{orbit.text}</p>
          <Button href={LINKS.orbitChat} arrow>{orbit.cta}</Button>
        </div>

        <MacWindow className="orbit__window" title={orbit.windowTitle} url={orbit.windowUrl}>
          <img
            className="orbit__chat"
            src={chatImage}
            alt={orbit.imageLabel}
            width="700"
            height="435"
            loading="lazy"
          />
        </MacWindow>
      </div>
    </section>
  )
}
