// Símbolo de cada opción de staffing (trazos en un lienzo de 200 × 200). Los usan la portada
// (vista previa de las opciones) y los paneles de StOptions.
export const STAFFING_SYMBOLS = {
  // Global: globo terráqueo
  global: (
    <>
      <circle cx="100" cy="100" r="92" />
      <ellipse cx="100" cy="100" rx="46" ry="92" />
      <ellipse cx="100" cy="100" rx="78" ry="92" />
      <path d="M100 8v184M8 100h184M20 58h160M20 142h160" />
    </>
  ),
  // Nacional: pin de ubicación con anillos de alcance
  national: (
    <>
      <ellipse cx="100" cy="160" rx="80" ry="22" />
      <ellipse cx="100" cy="160" rx="48" ry="12" />
      <path d="M100 160s-46-48-46-84a46 46 0 0 1 92 0c0 36-46 84-46 84Z" />
      <circle cx="100" cy="76" r="17" />
    </>
  ),
  // Full Service: hexágono con un hexágono interior (como la portada de FullService)
  fullService: (
    <>
      <polygon points="100,8 180,54 180,146 100,192 20,146 20,54" />
      <polygon points="100,40 152,70 152,130 100,160 48,130 48,70" />
      <path d="M100 40v120M48 70l104 60M152 70 48 130" />
    </>
  ),
}
