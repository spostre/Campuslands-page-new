import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import Starfield from '@/components/ui/Starfield'
import './NotFound.css'

export default function NotFound() {
  const { notFound } = useLanguage().t

  return (
    <section className="section status-page surface-dark has-stars">
      <Starfield />
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="display h2">{notFound.title}</h1>
        <p className="lead">{notFound.text}</p>
        <Link to="/" className="status-page__back">← {notFound.back}</Link>
      </div>
    </section>
  )
}
