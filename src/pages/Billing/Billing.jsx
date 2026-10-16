import { useState } from 'react'
import Button from '@/components/ui/Button'
import Emph from '@/components/ui/Emph'
import { LINKS } from '@/constants/links'
import { useLanguage } from '@/context/LanguageContext'
import { lookupInvoices } from '@/services/billing'
import Starfield from '@/components/ui/Starfield'
import logoMark from '@/assets/images/logo-mark.webp'
import logoWordmark from '@/assets/images/logo-wordmark.webp'
import './Billing.css'

/*
 * Facturación — una sola sección oscura, simple, con estrellas de fondo. Izquierda: el logo de
 * Campuslands (casco a color + nombre en blanco).
 * Derecha: título, texto y el formulario de consulta por número de documento, con el resultado
 * debajo (sin facturas / encontradas / consulta no disponible) y el contacto de soporte.
 */
export default function Billing() {
  const t = useLanguage().t.billing
  const [doc, setDoc] = useState('')
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    const value = doc.trim()
    if (!value) return setError(t.required)
    if (!/^\d{5,15}$/.test(value)) return setError(t.invalid)
    setError('')
    setLoading(true)
    setResult(await lookupInvoices(value))
    setLoading(false)
  }

  return (
    <section className="billing surface-dark has-stars">
      <Starfield origin="top" density={1} />
      <div className="container billing__grid">
        <div className="billing__brand">
          <img className="billing__mark" src={logoMark} alt="" />
          <img className="billing__word" src={logoWordmark} alt="Campuslands" />
        </div>

        <div className="billing__body">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="display h1 billing__title"><Emph text={t.title} /></h1>
          <p className="lead billing__text">{t.text}</p>

          <form className="billing__form" onSubmit={submit} noValidate>
            <label htmlFor="billing-doc">{t.label}</label>
            <div className="billing__row">
              <input
                id="billing-doc"
                inputMode="numeric"
                autoComplete="off"
                maxLength={15}
                placeholder={t.placeholder}
                value={doc}
                onChange={(e) => {
                  setDoc(e.target.value)
                  setError('')
                }}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'billing-error' : undefined}
              />
              <button type="submit" className="btn btn--primary" disabled={loading}>
                <span>{loading ? t.searching : t.submit}</span>
              </button>
            </div>
            {error && <span id="billing-error" className="billing__error">{error}</span>}
          </form>

          {result && (
            <div className={`billing__result billing__result--${result.status}`} role="status">
              {result.status === 'found' ? (
                <>
                  <strong>{t.foundTitle}</strong>
                  <ul>
                    {result.invoices.map((inv) => (
                      <li key={inv.number}>
                        <span>{inv.number}</span>
                        <span>{inv.date}</span>
                        <span>{inv.amount}</span>
                        <span>{inv.status}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : result.status === 'empty' ? (
                <>
                  <strong>{t.emptyTitle}</strong>
                  <p>{t.emptyText}</p>
                  <p>{t.emptyHint}</p>
                </>
              ) : (
                <>
                  <strong>{t.unavailableTitle}</strong>
                  <p>{t.unavailableText}</p>
                </>
              )}
              {result.status !== 'found' && (
                <div className="billing__help">
                  <span>{t.help}</span>
                  <Button href={LINKS.billing.contact} variant="secondary" arrow>{t.contact}</Button>
                </div>
              )}
            </div>
          )}

          <a className="billing__support" href={LINKS.billing.support} target="_blank" rel="noopener noreferrer">
            {t.support}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
