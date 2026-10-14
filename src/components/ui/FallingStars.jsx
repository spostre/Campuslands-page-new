import { useEffect, useRef } from 'react'
import './FallingStars.css'

/*
 * Estrellas cayendo. Por defecto fijas a la ventana (cubren toda la página); con `contained`
 * ocupan solo la sección que las contiene y se pausan cuando no está en pantalla.
 * Puntos pequeños que caen despacio con una leve deriva y algunos con estela corta.
 * ~30 fps, pausado con la pestaña oculta; quietas con "reducir movimiento".
 */
const FPS = 30

export default function FallingStars({ density = 1, contained = false }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let stars = []
    let frame = 0
    let last = 0
    let visible = true

    const spawn = (y) => ({
      x: Math.random() * width,
      y: y ?? Math.random() * height,
      r: Math.random() * 1 + 0.3,
      vy: Math.random() * 28 + 12, // px/s
      vx: Math.random() * 6 - 3,
      trail: Math.random() < 0.18 ? Math.random() * 18 + 8 : 0,
      alpha: Math.random() * 0.5 + 0.25,
      color: Math.random() < 0.3 ? '200,218,255' : '255,255,255', // algunas azul pálido, como en el Home
    })

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = contained ? canvas.clientWidth : window.innerWidth
      height = contained ? canvas.clientHeight : window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(140, Math.round(((width * height) / 14000) * density))
      stars = Array.from({ length: count }, () => spawn())
      draw(0)
    }

    const draw = (dt) => {
      ctx.clearRect(0, 0, width, height)
      for (const s of stars) {
        if (dt) {
          s.y += s.vy * dt
          s.x += s.vx * dt
          if (s.y - s.trail > height) Object.assign(s, spawn(-10))
        }
        if (s.trail) {
          const grad = ctx.createLinearGradient(s.x, s.y - s.trail, s.x, s.y)
          grad.addColorStop(0, `rgba(${s.color},0)`)
          grad.addColorStop(1, `rgba(${s.color},${s.alpha})`)
          ctx.strokeStyle = grad
          ctx.lineWidth = s.r
          ctx.beginPath()
          ctx.moveTo(s.x - (s.vx / s.vy) * s.trail, s.y - s.trail)
          ctx.lineTo(s.x, s.y)
          ctx.stroke()
        }
        ctx.fillStyle = `rgba(${s.color},${s.alpha})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = (time) => {
      frame = requestAnimationFrame(loop)
      if (document.hidden || !visible) {
        last = time
        return
      }
      if (time - last < 1000 / FPS) return
      const dt = last ? Math.min((time - last) / 1000, 0.1) : 0
      last = time
      draw(dt)
    }

    resize()
    window.addEventListener('resize', resize)
    const resizeObserver = contained ? new ResizeObserver(resize) : null
    resizeObserver?.observe(canvas)
    const visibilityObserver = contained
      ? new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
      : null
    visibilityObserver?.observe(canvas)
    if (!reduce) frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      resizeObserver?.disconnect()
      visibilityObserver?.disconnect()
    }
  }, [density, contained])

  return <canvas ref={canvasRef} className={`falling-stars ${contained ? 'falling-stars--contained' : ''}`} aria-hidden="true" />
}
