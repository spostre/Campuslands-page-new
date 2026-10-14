// Videos confirmados (archivos en public/videos/, comprimidos para la web).
// Origen: carpeta local "Content MD/vids". Solo se agregan aquí los videos cuya
// sección está confirmada; los demás se irán sumando cuando se aclaren.
const base = `${import.meta.env.BASE_URL}videos/`
const video = (name) => ({ src: `${base}${name}.mp4`, poster: `${base}${name}.webp` })

export const VIDEOS = {
  // Inicio · Redes: video de Juliana (horizontal). Origen: Video_Campuslands_Horizontal.mp4
  juliana: video('campuslands-horizontal'),
  // Sé un camper · Historias de éxito (verticales)
  santiago: video('santiago-laguado'), // Test Santiago IA academy.mp4
  juanRubio: video('juan-rubio'), // Test Juan Rubio.mp4
  edinson: video('edinson-aparicio'), // Test Edinson San Gil.mp4
}
