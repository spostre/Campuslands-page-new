import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import Starfield from '@/components/ui/Starfield'
import '@/pages/NotFound/NotFound.css'

export default function ComingSoon() {
  const { comingSoon } = useLanguage().t

  return (
    <section className="section status-page surface-dark has-stars">
      <Starfield />
      <div className="container">
        <h1 className="display h2">{comingSoon.title}</h1>
        <p className="lead">{comingSoon.text}</p>
        <Link to="/" className="status-page__back">← {comingSoon.back}</Link>
      </div>
    </section>
  )
}
