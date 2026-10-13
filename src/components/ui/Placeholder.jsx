import './Placeholder.css'

// Espacio reservado para imágenes, videos o logos que aún no tenemos.
export default function Placeholder({ kind, label, ratio = '16 / 9', className = '' }) {
  return (
    <div className={`placeholder ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <span className="placeholder__kind">{kind}</span>
      <span className="placeholder__label">{label}</span>
    </div>
  )
}
