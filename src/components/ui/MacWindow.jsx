import './MacWindow.css'

// Ventana estilo macOS (Idea 1) para cuadros de información destacados.
export default function MacWindow({ title, url, children, className = '' }) {
  return (
    <div className={`mac ${className}`}>
      <div className="mac__chrome">
        <div className="mac__bar">
          <span className="mac__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          {title && <span className="mac__tab">{title}</span>}
        </div>
        {url && (
          <div className="mac__url">
            <span className="mac__url-dot" aria-hidden="true" />
            {url}
          </div>
        )}
      </div>
      <div className="mac__body">{children}</div>
    </div>
  )
}
