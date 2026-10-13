// Sedes del selector "Localizar sede" (Content MD/home.md).
// Las coordenadas son aproximadas a nivel de ciudad/zona: reemplazar por la
// ubicación exacta de cada sede cuando se tenga. Igual con `address`.
//
// `snapshot`: captura del mismo mapa (zoom 13, centrada en `coords`) que se muestra SOLO si el
// proveedor de mapas falla. Si cambian las coordenadas, hay que regenerar la captura
// (ver docs/POLITICAS.md).
import zonaFrancaMap from '@/assets/images/maps/zona-franca.jpg'
import cajasanMap from '@/assets/images/maps/cajasan.jpg'
import cucutaMap from '@/assets/images/maps/cucuta.jpg'
import sanGilMap from '@/assets/images/maps/san-gil.jpg'
import guatemalaMap from '@/assets/images/maps/guatemala.jpg'

export const SEDES = [
  {
    id: 'zona-franca',
    name: 'Zona Franca (Anillo Vial)',
    place: { es: 'Floridablanca, Santander · Colombia', en: 'Floridablanca, Santander · Colombia' },
    coords: [7.0786, -73.1436],
    address: null,
    snapshot: zonaFrancaMap,
  },
  {
    id: 'cajasan',
    name: 'Cajasan (Bucaramanga)',
    place: { es: 'Bucaramanga, Santander · Colombia', en: 'Bucaramanga, Santander · Colombia' },
    coords: [7.1193, -73.1227],
    address: null,
    snapshot: cajasanMap,
  },
  {
    id: 'cucuta',
    name: 'Cúcuta',
    place: { es: 'Cúcuta, Norte de Santander · Colombia', en: 'Cúcuta, Norte de Santander · Colombia' },
    coords: [7.8939, -72.5078],
    address: null,
    snapshot: cucutaMap,
  },
  {
    id: 'san-gil',
    name: 'San Gil',
    place: { es: 'San Gil, Santander · Colombia', en: 'San Gil, Santander · Colombia' },
    coords: [6.5554, -73.1342],
    address: null,
    snapshot: sanGilMap,
  },
  {
    id: 'guatemala',
    name: 'Guatemala',
    place: { es: 'Ciudad de Guatemala · Guatemala', en: 'Guatemala City · Guatemala' },
    coords: [14.6349, -90.5069],
    address: null,
    snapshot: guatemalaMap,
  },
]
