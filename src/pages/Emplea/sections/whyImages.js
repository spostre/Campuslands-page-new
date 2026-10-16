// Imágenes de fondo de "Por qué las empresas líderes nos eligen". Rotan solas, sin relación con
// el texto (que solo cambia con las flechas o los nombres de los modelos).
// Fotos de las sedes de Campuslands entregadas por el responsable (originales de 2364 × 1330 en
// Content MD/ideas/images/: IMG_1264 y IMG_8158), en WebP a tamaño original y a 1440 px.
// Para agregar otra: WebP en src/assets/images/emplea/ + una línea más en WHY_IMAGES.
import sesion from '@/assets/images/emplea/why-sesion.webp'
import sesionSm from '@/assets/images/emplea/why-sesion-1440.webp'
import sala from '@/assets/images/emplea/why-sala.webp'
import salaSm from '@/assets/images/emplea/why-sala-1440.webp'

const image = (large, small, position = 'center') => ({
  src: large,
  srcSet: `${small} 1440w, ${large} 2364w`,
  position,
})

// Sesión: campers en las gradas alrededor de la expositora
// Sala: campers en la sala de cómputo frente a la pantalla
export const WHY_IMAGES = [
  image(sesion, sesionSm, 'center 42%'),
  image(sala, salaSm, 'center 40%'),
]
