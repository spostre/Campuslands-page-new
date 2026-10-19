// Videos confirmados (archivos en public/videos/, comprimidos para la web).
// Origen: carpeta local "Content MD/vids". Solo se agregan aquí los videos cuya
// sección está confirmada; los demás se irán sumando cuando se aclaren.
const base = `${import.meta.env.BASE_URL}videos/`
const video = (name, vertical = false) => ({ src: `${base}${name}.mp4`, poster: `${base}${name}.webp`, vertical })

export const VIDEOS = {
  // Inicio · Redes: video de Juliana (horizontal). Origen: Video_Campuslands_Horizontal.mp4
  juliana: video('campuslands-horizontal'),
  // Nosotros · Portada: Diego Tarazona, CEO (vertical, 16 s). Origen: Content MD/vids/diego.mp4
  diego: video('diego-tarazona', true),
  // Sé un camper · Historias de éxito (verticales)
  santiago: video('santiago-laguado'), // Test Santiago IA academy.mp4
  juanRubio: video('juan-rubio'), // Test Juan Rubio.mp4
  edinson: video('edinson-aparicio'), // Test Edinson San Gil.mp4

  // Nosotros · Historias de éxito (cinta). Origen: Content MD/vids/Camper_<nombre>.mp4.
  // Hay verticales y horizontales: en la cinta se ven recortados en la tarjeta vertical y al
  // tocarlos se abren en su formato real.
  aboutStories: [
    { name: 'Amed Felipe', ...video('amed-felipe') },
    { name: 'David Gomez', ...video('david-gomez') },
    { name: 'Dylan Rodriguez', ...video('dylan-rodriguez', true) },
    { name: 'Jesús Bustamante', ...video('jesus-bustamante', true) },
    { name: 'Andres Daza', ...video('andres-daza', true) },
    { name: 'David Vargas', ...video('david-vargas') },
    { name: 'Ivana Paternina', ...video('ivana-paternina', true) },
    { name: 'Jhon Hernandez', ...video('jhon-hernandez') },
  ],
}
