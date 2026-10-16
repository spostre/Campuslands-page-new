import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import mascotImage from '@/assets/images/mascot.png'
import './Mascot.css'

// Mascota oficial como sticker flotante. Detalle opcional:
// para quitarla basta con borrar <Mascot /> de MainLayout.
//
// "Muelle": si la página tiene un elemento con el atributo data-mascot-dock (hoy solo
// Facturación), la mascota vuela desde la esquina hasta ese lugar y toma su tamaño; lo sigue al
// hacer scroll o cambiar el tamaño de la ventana. Al ir a otra página vuelve a la esquina.
const FLIGHT_MS = 900

const EMOTES = [
  'OK!', "Let's go!", '¡Vamos!', '#GoForIt', 'Hi!', 'Yay!', 'Wow!', 'Go!', '¡Uy!',
  '🚀', '✨', '💙', '👋', '⭐', '🛰️', '🌎', '💡', '🎉',
]

// Cada reacción: animación del cuerpo + melodía corta (multiplicadores de tono)
const REACTIONS = {
  bounce: [1, 1.5],
  spin: [1, 1.25, 1.5, 2],
  hop: [1.5, 1],
  wiggle: [1, 1.12, 1, 1.12],
  flip: [1, 1.5, 2],
}
const REACTION_NAMES = Object.keys(REACTIONS)
const COMBO_SOUND = [1, 1.25, 1.5, 2, 2.5]

const COMBO_CLICKS = 5 // toques seguidos para el combo
const COMBO_WINDOW = 700 // ms máximos entre toques del combo
const IDLE_WAVE_MS = 45000 // saludo ocasional si nadie la toca

const random = (list) => list[Math.floor(Math.random() * list.length)]

export default function Mascot() {
  const { t, lang } = useLanguage()
  const [bursts, setBursts] = useState([])
  const [reaction, setReaction] = useState({ id: 0, name: null })
  const nextId = useRef(1)
  const audioRef = useRef(null)
  const streak = useRef({ count: 0, last: 0 })
  const lastInteraction = useRef(Date.now())
  const rootRef = useRef(null)
  const { pathname } = useLocation()

  const emit = (texts) => {
    setBursts((list) => [
      ...list.slice(-6),
      ...texts.map((text, i) => {
        const id = nextId.current++
        return {
          id,
          text,
          tone: (id % 4) + 1,
          dx: texts.length > 1 ? (i - (texts.length - 1) / 2) * 34 : Math.round(Math.random() * 44 - 22),
          delay: i * 90,
        }
      }),
    ])
  }

  const react = (name) => setReaction({ id: nextId.current++, name })

  const poke = () => {
    const now = Date.now()
    lastInteraction.current = now
    const s = streak.current
    s.count = now - s.last < COMBO_WINDOW ? s.count + 1 : 1
    s.last = now

    if (s.count >= COMBO_CLICKS) {
      s.count = 0
      react('flip')
      emit(['🎉', lang === 'es' ? '¡Combo!' : 'Combo!', '🚀'])
      playMelody(audioRef, COMBO_SOUND, 0.1)
      return
    }

    const name = random(REACTION_NAMES)
    react(name)
    emit([random(EMOTES)])
    playMelody(audioRef, REACTIONS[name])
  }

  // Reacciona (en silencio) al cambiar de idioma; no en la primera carga
  const prevLang = useRef(lang)
  useEffect(() => {
    if (prevLang.current === lang) return
    prevLang.current = lang
    react('hop')
    emit([lang === 'es' ? '¡Hola!' : 'Hello!'])
  }, [lang])

  // Saludo ocasional si nadie interactúa (sin sonido)
  useEffect(() => {
    const timer = setInterval(() => {
      if (document.hidden || Date.now() - lastInteraction.current < IDLE_WAVE_MS) return
      lastInteraction.current = Date.now()
      react('wiggle')
      emit(['👋'])
    }, 15000)
    return () => clearInterval(timer)
  }, [])

  // Muelle: mueve la mascota (ambas capas) hasta el elemento [data-mascot-dock] de la página
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let flightTimer = 0

    const fly = () => {
      if (reduce) return
      root.classList.add('is-flying')
      clearTimeout(flightTimer)
      flightTimer = setTimeout(() => root.classList.remove('is-flying'), FLIGHT_MS + 50)
    }

    const btn = root.querySelector('.mascot:not(.mascot--outline) .mascot__btn')
    let dock = null

    // Posición natural (esquina inferior derecha) calculada igual que en Mascot.css
    const place = () => {
      if (!dock || !btn) return
      const vw = document.documentElement.clientWidth
      const vh = window.innerHeight
      const gap = Math.min(28, Math.max(14, window.innerWidth * 0.02))
      const w = btn.offsetWidth
      const h = btn.offsetHeight
      const r = dock.getBoundingClientRect()
      const s = r.width / w
      const tx = r.left - (vw - gap - w)
      const ty = r.top + (r.height - h * s) / 2 - (vh - gap - h)
      root.style.setProperty('--mascot-tf', `translate(${tx}px, ${ty}px) scale(${s})`)
    }
    const onChange = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(place)
    }

    // Espera a que la página nueva esté pintada antes de medir
    const start = requestAnimationFrame(() => {
      dock = document.querySelector('[data-mascot-dock]')
      if (dock) {
        root.classList.add('is-docked')
        fly()
        place()
        window.addEventListener('scroll', onChange, { passive: true })
        window.addEventListener('resize', onChange)
      } else if (root.classList.contains('is-docked')) {
        root.classList.remove('is-docked')
        fly()
        root.style.removeProperty('--mascot-tf')
      }
    })

    return () => {
      cancelAnimationFrame(start)
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onChange)
      window.removeEventListener('resize', onChange)
    }
  }, [pathname])

  const removeBurst = (id) => setBursts((list) => list.filter((b) => b.id !== id))

  return (
    <div ref={rootRef} className="mascot-root">
      {/* Borde reflectivo: silueta algo más grande en modo "diferencia", invierte el color de lo que
          tenga detrás. Va en su propia capa (hermana de la mascota) para poder mezclarse con la
          página, y repite la misma flotación, inclinación y reacción para ir siempre alineada. */}
      <div className="mascot mascot--outline" aria-hidden="true">
        <div className="mascot__btn">
          <MascotFigure reaction={reaction} className="mascot__img mascot__img--outline" />
        </div>
      </div>

      <div className="mascot">
      {bursts.map((b) => (
        <span
          key={b.id}
          className={`mascot__burst mascot__burst--tone-${b.tone}`}
          style={{ '--dx': `${b.dx}px`, animationDelay: `${b.delay}ms` }}
          onAnimationEnd={() => removeBurst(b.id)}
          aria-hidden="true"
        >
          {b.text}
        </span>
      ))}

      <button type="button" className="mascot__btn" onClick={poke} aria-label={t.mascot.label} title={t.mascot.label}>
        <MascotFigure reaction={reaction} className="mascot__img" />
      </button>
      </div>
    </div>
  )
}

// Capas: flotación horizontal, vertical, inclinación al pasar el cursor y reacción
function MascotFigure({ reaction, className }) {
  return (
    <span className="mascot__drift-x">
      <span className="mascot__drift-y">
        <span className="mascot__hover">
          <span
            key={reaction.id}
            className={reaction.name ? `mascot__react mascot__react--${reaction.name}` : 'mascot__react'}
          >
            <img src={mascotImage} alt="" className={className} draggable="false" />
          </span>
        </span>
      </span>
    </span>
  )
}

// Melodía corta tipo "blip" generada con Web Audio (sin archivos).
// La nota base varía en cada toque para que no suene repetitivo.
function playMelody(audioRef, steps, volume = 0.11) {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (!Ctx) return
    audioRef.current ??= new Ctx()
    const ctx = audioRef.current
    if (ctx.state === 'suspended') ctx.resume()

    const now = ctx.currentTime
    const base = 480 + Math.random() * 240

    steps.forEach((step, i) => {
      const freq = base * step
      const start = now + i * 0.07
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(freq, start)
      osc.frequency.exponentialRampToValueAtTime(freq * 1.3, start + 0.06)
      gain.gain.setValueAtTime(0.0001, start)
      gain.gain.exponentialRampToValueAtTime(volume, start + 0.012)
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.11)
      osc.connect(gain).connect(ctx.destination)
      osc.start(start)
      osc.stop(start + 0.12)
    })
  } catch {
    // Sin audio disponible: la mascota funciona igual en silencio
  }
}
