import './Divider.css'

// Separador decorativo entre secciones con los colores pastel/neón.
// Variantes: 'squiggle' (onda + destellos), 'planet' (planeta con anillo y estrellas),
// 'dots' (constelación de puntos). `align`: start | center | end.
export default function Divider({ variant = 'squiggle', align = 'center' }) {
  return (
    <div className={`divider divider--${align}`} aria-hidden="true">
      <div className="container">
        <svg className={`divider__art divider__art--${variant}`} viewBox="0 0 220 48">
          {ART[variant]}
        </svg>
      </div>
    </div>
  )
}

// Destello de 4 puntas centrado en (x, y)
const Sparkle = ({ x, y, r, className }) => (
  <path
    className={className}
    d={`M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z`}
  />
)

const ART = {
  squiggle: (
    <>
      <path className="d-stroke d-c1" d="M18 26c10-12 20-12 30 0s20 12 30 0 20-12 30 0 20 12 30 0" />
      <circle className="d-fill d-c2" cx="160" cy="26" r="5" />
      <Sparkle className="d-fill d-c3 d-twinkle" x={186} y={18} r={8} />
      <circle className="d-fill d-c4" cx="202" cy="34" r="2.5" />
    </>
  ),
  planet: (
    <>
      <Sparkle className="d-fill d-c4 d-twinkle" x={40} y={16} r={6} />
      <circle className="d-fill d-c2" cx="64" cy="34" r="2.5" />
      <g className="d-spin">
        <circle className="d-fill d-c1" cx="110" cy="24" r="11" />
        <ellipse className="d-stroke d-c3" cx="110" cy="24" rx="21" ry="6.5" transform="rotate(-18 110 24)" />
      </g>
      <circle className="d-fill d-c4" cx="152" cy="14" r="2" />
      <Sparkle className="d-fill d-c2 d-twinkle d-twinkle--late" x={174} y={32} r={7} />
    </>
  ),
  dots: (
    <>
      <circle className="d-fill d-c1" cx="30" cy="28" r="4" />
      <circle className="d-fill d-c2" cx="62" cy="18" r="6" />
      <circle className="d-fill d-c3" cx="98" cy="30" r="3" />
      <path className="d-stroke d-c4 d-thin" d="M62 18 98 30 132 16" />
      <circle className="d-fill d-c4" cx="132" cy="16" r="5" />
      <Sparkle className="d-fill d-c1 d-twinkle" x={168} y={28} r={8} />
      <circle className="d-fill d-c3" cx="194" cy="20" r="2.5" />
    </>
  ),
}
