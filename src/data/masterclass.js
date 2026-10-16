// ============================================================================================
//  PRÓXIMA MASTERCLASS — AI Academy (/servicios/ia-academy, portada, "pase de abordaje")
// ============================================================================================
//
//  ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA ACTUALIZAR LA MASTERCLASS.
//
//  Cómo actualizarla:
//    1. Cambia los valores entre comillas de "es" (español) y de "en" (inglés).
//    2. No borres las comas ni las comillas. Si un texto lleva comilla simple ( ' ),
//       escríbela así: \'   (por ejemplo: 'Campuslands\' class').
//    3. Guarda el archivo. La página se actualiza sola.
//
//  Campos:
//    topic       → Tema de la clase (título grande del pase).
//    date        → Fecha, tal como se quiere mostrar (ej. '14 oct de 2026').
//    time        → Día y hora (ej. 'Miércoles · 9:00 AM').
//    instructor  → Nombre de quien dicta la clase.
//    role        → Cargo o especialidad del instructor.
//    code        → Código corto que aparece en el talón azul (opcional, ej. 'AI · MC').
//
//  El enlace del botón "Quiero asistir" está en src/constants/links.js → aiAcademy.masterclass.
//  Los rótulos fijos ("Fecha", "Horario", "Instructor", "Próxima Masterclass", el texto que
//  acompaña al pase) están en src/i18n/es.js y en.js → aiAcademy.masterclass.
// ============================================================================================

export const MASTERCLASS = {
  es: {
    topic: 'Ingeniería de Prompts aplicada a Gemini y otras herramientas',
    date: '14 oct de 2026',
    time: 'Miércoles · 9:00 AM',
    instructor: 'Juan Florez',
    role: 'Especialista en IA',
    code: 'AI · MC',
  },
  en: {
    topic: 'Prompt engineering applied to Gemini and other tools',
    date: 'Oct 14, 2026',
    time: 'Wednesday · 9:00 AM',
    instructor: 'Juan Florez',
    role: 'AI Specialist',
    code: 'AI · MC',
  },
}
