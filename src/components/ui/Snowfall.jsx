import { useEffect, useRef } from 'react'
import './Snowfall.css'

/*
 * Nieve ligera para el fondo de las secciones claras.
 * - Copos pequeños en gris azulado, muy tenues, que caen despacio con un leve vaivén.
 * - Ligero: ~30 fps en un canvas; se pausa fuera de pantalla o con la pestaña oculta.
 * - Con "reducir movimiento" se dibujan quietos.
 * Uso: dentro de una sección con position: relative (el canvas queda detrás del contenido).
 */
const FPS = 30

export default function Snowfall({ density = 1 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let flakes = []
    let frame = 0
    let last = 0
    let visible = false

    const createFlakes = () => {
      const count = Math.min(140, Math.round(((width * height) / 14000) * density))
      flakes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.8 + Math.random() * 1.8,
        speed: 0.25 + Math.random() * 0.45,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.006 + Math.random() * 0.01,
        alpha: 0.18 + Math.random() * 0.3,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const f of flakes) {
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(120, 138, 168, ${f.alpha})`
        ctx.fill()
      }
    }

    const step = () => {
      for (const f of flakes) {
        f.sway += f.swaySpeed
        f.y += f.speed
        f.x += Math.sin(f.sway) * 0.3
        if (f.y > height + 4) {
          f.y = -4
          f.x = Math.random() * width
        }
      }
    }

    const loop = (time) => {
      frame = requestAnimationFrame(loop)
      if (time - last < 1000 / FPS) return
      last = time
      step()
      draw()
    }

    const start = () => {
      if (reduce || frame || !visible || document.hidden) return
      frame = requestAnimationFrame(loop)
    }

    const stop = () => {
      cancelAnimationFrame(frame)
      frame = 0
    }

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * ratio
      canvas.height = height * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      createFlakes()
      draw()
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas.parentElement)

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })
    io.observe(canvas)

    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      resizeObserver.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [density])

  return <canvas ref={canvasRef} className="snowfall" aria-hidden="true" />
}
