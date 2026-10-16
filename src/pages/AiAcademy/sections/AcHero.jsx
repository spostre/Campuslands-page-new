import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import Starfield from '@/components/ui/Starfield'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { MASTERCLASS } from '@/data/masterclass'
import './AcHero.css'

/*
 * Portada de AI Academy (banda negra con estrellas). Izquierda: título, texto, la frase
 * "No te falta visión…" destacada con una barra azul y los dos botones. Derecha: la próxima
 * masterclass: una línea de presentación, el pase de abordaje (talón perforado y código de
 * barras) y debajo, fuera del pase, el botón "Quiero asistir" bien visible. Detrás, una órbita
 * fina con un punto de luz que gira despacio. Fondo: luz desenfocada naranja suave y azul a la
 * izquierda y estrellas a la derecha.
 */
export default function AcHero() {
  const { lang, t } = useLanguage()
  const { hero, masterclass } = t.aiAcademy
  // Datos de la próxima masterclass (se editan a mano en src/data/masterclass.js)
  const mc = MASTERCLASS[lang]

  return (
    <section className="ac-hero surface-dark has-stars">
      {/* Luz de color desenfocada solo a la izquierda; a la derecha quedan las estrellas */}
      <div className="ac-hero__glow" aria-hidden="true">
        <span />
        <span />
      </div>
      <Starfield origin="right" density={0.8} />

      <div className="container ac-hero__grid">
        <div className="ac-hero__copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="display h1 ac-hero__title"><Emph text={hero.title} /></h1>
          <p className="lead ac-hero__text">{hero.text}</p>
          <p className="ac-hero__punch">{hero.punch}</p>
          <div className="btn-row">
            <Button href={LINKS.aiAcademy.programs} arrow>{hero.ctaPrograms}</Button>
            <Button href={LINKS.aiAcademy.contact} variant="ghost">{hero.ctaContact}</Button>
          </div>
        </div>

        {/* ==================================================================================
            PRÓXIMA MASTERCLASS (pase de abordaje)
            - Para cambiar tema, fecha, horario o instructor: src/data/masterclass.js
            - Rótulos fijos y texto de presentación: src/i18n/es.js / en.js → aiAcademy.masterclass
            - Enlace del botón "Quiero asistir": src/constants/links.js → aiAcademy.masterclass
            ================================================================================== */}
        <div className="ac-pass-wrap">
          <span className="ac-orbit" aria-hidden="true"><span /></span>

          <div className="ac-pass-intro">
            <span className="ac-pass-intro__kicker">{masterclass.kicker}</span>
            <p>{masterclass.lead}</p>
          </div>

          <article className="ac-pass">
            <div className="ac-pass__main">
              <span className="ac-pass__status">
                <span className="ac-pass__dot" aria-hidden="true" />
                {masterclass.status}
              </span>
              <h2 className="ac-pass__topic">{mc.topic}</h2>

              <dl className="ac-pass__fields">
                <div>
                  <dt>{masterclass.dateLabel}</dt>
                  <dd>{mc.date}</dd>
                </div>
                <div>
                  <dt>{masterclass.timeLabel}</dt>
                  <dd>{mc.time}</dd>
                </div>
                <div className="ac-pass__wide">
                  <dt>{masterclass.instructorLabel}</dt>
                  <dd>
                    {mc.instructor}
                    <span>{mc.role}</span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="ac-pass__stub">
              <span className="ac-pass__code">{mc.code}</span>
              <span className="ac-pass__barcode" aria-hidden="true" />
            </div>
          </article>

          <div className="ac-pass-cta">
            <Button href={LINKS.aiAcademy.masterclass} arrow>{masterclass.cta}</Button>
          </div>
        </div>
        {/* ===================== FIN PRÓXIMA MASTERCLASS ===================== */}
      </div>
    </section>
  )
}
