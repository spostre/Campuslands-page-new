// Modo de bajo consumo: se activa solo en equipos modestos (4 núcleos o menos, 4 GB de memoria
// o menos) o con "ahorro de datos" activado. Ahí se dibujan menos estrellas, a menos cuadros por
// segundo, y se apagan los movimientos continuos más costosos (clase .is-low-power en <html>).
// El diseño se ve igual; solo cambia cuánto se mueve.
const nav = typeof navigator !== 'undefined' ? navigator : {}

export const isLowPower = Boolean(
  (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) ||
    (nav.deviceMemory && nav.deviceMemory <= 4) ||
    nav.connection?.saveData,
)

if (typeof document !== 'undefined') document.documentElement.classList.toggle('is-low-power', isLowPower)
