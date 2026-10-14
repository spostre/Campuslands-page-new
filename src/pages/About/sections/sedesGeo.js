// Posición de cada sede sobre la imagen satelital (latam-satellite.webp).
// La imagen es un recorte del Blue Marble de NASA en proyección equirectangular:
// longitud -112° a -48° y latitud 24° a -16° (64° × 40°, proporción 1,6).
export const GEO = { lonMin: -112, lonMax: -48, latMax: 24, latMin: -16 }
export const GEO_RATIO = (GEO.lonMax - GEO.lonMin) / (GEO.latMax - GEO.latMin)

function point(lon, lat) {
  return {
    x: ((lon - GEO.lonMin) / (GEO.lonMax - GEO.lonMin)) * 100,
    y: ((GEO.latMax - lat) / (GEO.latMax - GEO.latMin)) * 100,
  }
}

// Mismo orden que impact.countries[].sedes en los textos (i18n).
// side: lado del rótulo respecto a la marca.
export const SEDES = [
  [
    { ...point(-73.12, 7.12), side: 'left' }, // Bucaramanga
    { ...point(-74.07, 4.71), side: 'right' }, // Bogotá
    { ...point(-72.5, 7.89), side: 'right' }, // Norte de Santander (Cúcuta)
    { ...point(-74.8, 10.96), side: 'right' }, // Barranquilla
    { ...point(-76.53, 3.45), side: 'left' }, // Cali
  ],
  [
    { ...point(-90.51, 14.63), side: 'right' }, // Ciudad de Guatemala
  ],
]
