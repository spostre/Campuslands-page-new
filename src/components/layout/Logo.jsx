import { Link } from 'react-router-dom'
import markImage from '@/assets/images/logo-mark.png'
import wordmarkImage from '@/assets/images/logo-wordmark.png'

// Logo oficial en horizontal: casco (con su degradado) + palabra "campuslands".
// La palabra se usa como máscara, así toma el color del texto (currentColor)
// y se adapta sola al encabezado claro u oscuro.
export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`logo ${className}`} aria-label="Campuslands">
      <img src={markImage} alt="" className="logo__mark" width="872" height="682" />
      <span className="logo__word" style={{ '--wordmark': `url(${wordmarkImage})` }} aria-hidden="true" />
    </Link>
  )
}
