import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import Starfield from '@/components/ui/Starfield'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { useReveal } from '@/hooks/useReveal'
import moon from '@/assets/images/fullservice/moon.webp'
import moonSmall from '@/assets/images/fullservice/moon-1100.webp'
import './FsContact.css'

const LIMITS = { company: 30, email: 50, words: 250 }
const countWords = (text) => (text.trim() ? text.trim().split(/\s+/).length : 0)

// ¿Tienes un desafío? (banda negra, ancla #contacto). Como la página original, con la Luna
// (foto de la NASA, dominio público) de fondo, pero aquí sale por debajo y gira muy despacio,
// con un borde de luz azul. A la izquierda el título y el botón; a la derecha el formulario,
// que abre el correo del usuario con el mensaje listo (no hay servidor que lo reciba).
export default function FsContact() {
  const { contact } = useLanguage().t.fullService
  const moonRef = useReveal()
  const copyRef = useReveal()
  const formRef = useReveal()
  const [values, setValues] = useState({ company: '', email: '', needs: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const words = countWords(values.needs)

  const update = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }))
    setErrors((er) => ({ ...er, [name]: undefined }))
    setSent(false)
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!values.company.trim()) next.company = contact.required
    if (!values.email.trim()) next.email = contact.required
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = contact.invalidEmail
    if (!words) next.needs = contact.required
    else if (words > LIMITS.words) next.needs = contact.tooManyWords
    setErrors(next)
    if (Object.keys(next).length) return

    const body = `${contact.company}: ${values.company}\n${contact.email}: ${values.email}\n\n${values.needs}`
    window.location.href = `mailto:${LINKS.fullService.email}?subject=${encodeURIComponent(contact.mailSubject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field = (name, label, counter, input) => (
    <label className={`fs-field${errors[name] ? ' has-error' : ''}`}>
      <span className="fs-field__top">
        <span>{label}</span>
        <span className="fs-field__count">{counter}</span>
      </span>
      {input}
      {errors[name] && <span className="fs-field__error">{errors[name]}</span>}
    </label>
  )

  return (
    <section id="contacto" className="section fs-contact surface-dark has-stars">
      <Starfield origin="top-left" density={0.6} />

      <div ref={moonRef} className="fs-contact__moon reveal reveal--fade" aria-hidden="true">
        <img src={moon} srcSet={`${moonSmall} 1100w, ${moon} 2000w`} sizes="(max-width: 900px) 120vw, 75vw" alt="" loading="lazy" />
      </div>

      <div className="container fs-contact__grid">
        <div ref={copyRef} className="fs-contact__copy reveal-stagger">
          <h2 className="display h2" style={{ '--i': 0 }}><Emph text={contact.title} /></h2>
          <p className="lead" style={{ '--i': 1 }}>{contact.text}</p>
          <div style={{ '--i': 2 }}>
            <Button href={LINKS.fullService.quote} arrow>{contact.cta}</Button>
          </div>
        </div>

        <form ref={formRef} className="fs-form reveal reveal--right" onSubmit={submit} noValidate>
          {field('company', contact.company, `${values.company.length}/${LIMITS.company}`,
            <input type="text" maxLength={LIMITS.company} value={values.company} onChange={update('company')} autoComplete="organization" />)}
          {field('email', contact.email, `${values.email.length}/${LIMITS.email}`,
            <input type="email" maxLength={LIMITS.email} value={values.email} onChange={update('email')} autoComplete="email" />)}
          {field('needs', contact.needs, `${words}/${LIMITS.words} ${contact.words}`,
            <textarea rows={4} value={values.needs} onChange={update('needs')} />)}

          <button type="submit" className="btn btn--primary fs-form__submit">
            <span>{contact.submit}</span>
          </button>
          <p className="fs-form__consent">
            {contact.consentBefore}
            <Link to={LINKS.legal.privacy}>{contact.consentLink}</Link>
          </p>
          {sent && <p className="fs-form__sent" role="status">{contact.sent}</p>}
        </form>
      </div>
    </section>
  )
}
