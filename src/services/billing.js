import { apiFetch } from '@/services/api'

/*
 * Consulta de facturas por número de documento.
 * Hoy no hay API conectada: si VITE_BILLING_ENDPOINT no está definida, la página muestra
 * "consulta en línea no disponible" y ofrece el contacto (nunca dice que no hay facturas).
 * Cuando exista la API, definir VITE_BILLING_ENDPOINT (p. ej. /billing/invoices); se llama a
 * `${VITE_API_URL}${VITE_BILLING_ENDPOINT}?document=<número>` y se espera una lista de
 * { number, date, amount, status }.
 */
const ENDPOINT = import.meta.env.VITE_BILLING_ENDPOINT

export async function lookupInvoices(documentNumber) {
  if (!ENDPOINT) return { status: 'unavailable' }
  try {
    const invoices = await apiFetch(`${ENDPOINT}?document=${encodeURIComponent(documentNumber)}`)
    if (!Array.isArray(invoices) || invoices.length === 0) return { status: 'empty' }
    return { status: 'found', invoices }
  } catch {
    return { status: 'unavailable' }
  }
}
