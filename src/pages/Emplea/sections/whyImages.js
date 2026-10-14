// Imágenes de fondo de "Por qué las empresas líderes nos eligen", una por modelo y en el mismo
// orden que emplea.why.slides. Imágenes generadas con Gemini (entregadas por el responsable;
// originales de 1376 × 768 en Idea/), escaladas a 2560 y 1440 px de ancho (Lanczos + enfoque leve).
import cuotaSena from '@/assets/images/emplea/why-cuota-sena.webp'
import cuotaSenaSm from '@/assets/images/emplea/why-cuota-sena-1440.webp'
import talentPool from '@/assets/images/emplea/why-talent-pool.webp'
import talentPoolSm from '@/assets/images/emplea/why-talent-pool-1440.webp'
import staffing from '@/assets/images/emplea/why-staffing.webp'
import staffingSm from '@/assets/images/emplea/why-staffing-1440.webp'
import ceroRiesgo from '@/assets/images/emplea/why-cero-riesgo.webp'
import ceroRiesgoSm from '@/assets/images/emplea/why-cero-riesgo-1440.webp'

const image = (large, small, position = 'center') => ({
  src: large,
  srcSet: `${small} 1440w, ${large} 2560w`,
  position,
})

// Cuota Sena: dos astronautas, uno le enseña al otro (formación)
// Talent Pool: grupo de cuatro (talento listo para elegir)
// Staffing: uno de pie al centro, listo para sumarse al equipo
// Cero riesgo: uno apoyado en la pared, tranquilo
export const WHY_IMAGES = [
  image(cuotaSena, cuotaSenaSm, 'center 40%'),
  image(talentPool, talentPoolSm, 'center 45%'),
  image(staffing, staffingSm, 'center 40%'),
  image(ceroRiesgo, ceroRiesgoSm, '60% 45%'),
]
