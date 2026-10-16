// Imágenes de fondo de "Por qué las empresas líderes nos eligen", una por modelo y en el mismo
// orden que emplea.why.slides. Imágenes generadas con Gemini (entregadas por el responsable;
// originales de 1376 × 768 en Content MD/ideas/ai images/), llevadas a 4K: reducción leve de ruido, escalado Lanczos a
// 3840 px y realce de nitidez adaptativo (ffmpeg); se sirven a 1440, 2560 o 3840 px según la pantalla.
import cuotaSena from '@/assets/images/emplea/why-cuota-sena.webp'
import cuotaSenaSm from '@/assets/images/emplea/why-cuota-sena-1440.webp'
import cuotaSenaXl from '@/assets/images/emplea/why-cuota-sena-3840.webp'
import talentPool from '@/assets/images/emplea/why-talent-pool.webp'
import talentPoolSm from '@/assets/images/emplea/why-talent-pool-1440.webp'
import talentPoolXl from '@/assets/images/emplea/why-talent-pool-3840.webp'
import staffing from '@/assets/images/emplea/why-staffing.webp'
import staffingSm from '@/assets/images/emplea/why-staffing-1440.webp'
import staffingXl from '@/assets/images/emplea/why-staffing-3840.webp'
import ceroRiesgo from '@/assets/images/emplea/why-cero-riesgo.webp'
import ceroRiesgoSm from '@/assets/images/emplea/why-cero-riesgo-1440.webp'
import ceroRiesgoXl from '@/assets/images/emplea/why-cero-riesgo-3840.webp'

const image = (large, small, xl, position = 'center') => ({
  src: large,
  srcSet: `${small} 1440w, ${large} 2560w, ${xl} 3840w`,
  position,
})

// Cuota Sena: dos astronautas, uno le enseña al otro (formación)
// Talent Pool: grupo de cuatro (talento listo para elegir)
// Staffing: uno de pie al centro, listo para sumarse al equipo
// Cero riesgo: uno apoyado en la pared, tranquilo
export const WHY_IMAGES = [
  image(cuotaSena, cuotaSenaSm, cuotaSenaXl, 'center 40%'),
  image(talentPool, talentPoolSm, talentPoolXl, 'center 45%'),
  image(staffing, staffingSm, staffingXl, 'center 40%'),
  image(ceroRiesgo, ceroRiesgoSm, ceroRiesgoXl, '60% 45%'),
]
