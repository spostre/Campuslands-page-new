# Políticas, licencias y riesgos — Campuslands (sitio web)

Qué recursos de terceros usa el sitio, qué obligaciones legales tiene cada uno, qué datos maneja, qué puede fallar y qué pasa si falla. Revisar antes de publicar, antes de vender o transferir el proyecto y cada vez que se agregue un recurso externo.

> Resume licencias y políticas públicas vigentes a octubre de 2026. **No es asesoría legal**: los puntos marcados **⚖️** deben validarse con el área legal de Campuslands.

Documentos relacionados: [README](../README.md) · [ESTRUCTURA.md](ESTRUCTURA.md).

---

## Índice

1. [Resumen ejecutivo](#1-resumen-ejecutivo)
2. [Riesgo por sección](#2-riesgo-por-sección)
3. [Software de código abierto](#3-software-de-código-abierto)
4. [Tipografías](#4-tipografías)
5. [Mapa de sedes y su plan B](#5-mapa-de-sedes-y-su-plan-b)
6. [Imágenes, videos y marcas](#6-imágenes-videos-y-marcas)
7. [Privacidad y datos personales](#7-privacidad-y-datos-personales)
8. [Contenido y textos](#8-contenido-y-textos)
9. [Lista de verificación antes de publicar](#9-lista-de-verificación-antes-de-publicar)
10. [Qué hacer si algo falla](#10-qué-hacer-si-algo-falla)
11. [Regla para recursos nuevos](#11-regla-para-recursos-nuevos)

---

## 1. Resumen ejecutivo

| Tema | Estado |
|---|---|
| **Licencias de software** | Todo libre y compatible con uso comercial (MIT, BSD-2). Avisos incluidos en `public/licenses/` y en `/creditos`. ✅ |
| **Tipografías** | SIL OFL 1.1, alojadas en el proyecto con su licencia. ✅ |
| **Servicios externos en tiempo real** | Solo uno: teselas de OpenStreetMap (mapa), con respaldo automático. ✅ |
| **Imágenes de terceros** | NASA (dominio público) y Simple Icons (CC0), acreditadas. ✅ |
| **Cookies, analítica, rastreo** | Ninguno. ✅ |
| **Pendiente ⚖️** | Autorizaciones de **logos de empresas**, **imagen de personas** en videos y fotos, licencia del **casco 3D** de Emplea y **política de privacidad** completa. |

---

## 2. Riesgo por sección

"Riesgo" = probabilidad de que algo deje de funcionar o se vea mal por una causa ajena al proyecto.

| Pieza | Depende de | Riesgo | Si falla | Plan B |
|---|---|---|---|---|
| Estructura, textos, estilos, animaciones | Nada externo | **Nulo** | — | — |
| Tipografías | Archivos propios (`src/assets/fonts/`) | **Nulo** | — | El navegador usa la fuente del sistema |
| Logos, imágenes, íconos | Archivos propios (`src/assets/`) | **Nulo** | — | — |
| Estrellas, nieve, luna, Tierra, escenas animadas | Canvas y CSS del navegador | **Nulo** | En navegadores muy antiguos no se ven | La página funciona igual; con "reducir movimiento" quedan quietas |
| **Mapa de sedes** | Teselas de OpenStreetMap | **Medio** | El mapa no cargaría | **Automático:** captura de la sede (sección 5) |
| **Videos** | Archivos propios (`public/videos/`, ~120 MB) | **Bajo** | Si un archivo falta, no se reproduce | `VideoPlayer` muestra un recuadro con el nombre. Alojar fuera si el servidor lo exige |
| Botones a WhatsApp y redes | WhatsApp, Instagram, TikTok, LinkedIn, Facebook | **Bajo** | El destino falla o cambia | Corregir en `src/constants/links.js` |
| Formulario de cotización (FullService) | Cliente de correo del visitante (`mailto:`) | **Bajo** | Si el visitante no tiene correo configurado, no se abre nada | Botón "Cotizar mi proyecto" (WhatsApp) en la misma sección. A futuro, servicio de formularios |
| Consulta de facturas | API de facturación (**no conectada**) | **N/A** | Muestra "consulta en línea no disponible" | Botón de contacto. Conectar con `VITE_BILLING_ENDPOINT` |
| Preferencia de idioma | `localStorage` | **Nulo** | Si está bloqueado, abre en español | — |
| Enlaces internos | Rutas del sitio | **Nulo** | — | No quedan enlaces a la web anterior, salvo el acceso de campers (`camper.campuslands.com/login`, plataforma vigente) |

---

## 3. Software de código abierto

| Librería | Licencia | Se publica en el sitio | Cumplimiento |
|---|---|---|---|
| React, React DOM, Scheduler | MIT | Sí | Aviso en el código empaquetado + `public/licenses/` + `/creditos` |
| React Router | MIT | Sí | Igual que arriba |
| Leaflet | BSD-2-Clause | Sí | `public/licenses/LICENSE-leaflet.txt` + `/creditos` (el empaquetado no conserva su comentario) |
| Vite, @vitejs/plugin-react | MIT | No (solo desarrollo) | No requiere aviso en el sitio |

Ninguna licencia es "copyleft" (GPL/AGPL): el código propio puede venderse o cerrarse sin obligación de publicarlo.

**Si se agrega una librería:** revisar su licencia (`node_modules/<paquete>/package.json` → `license`); si se publica en el sitio, añadir su texto a `public/licenses/` y su crédito a `/creditos` (`credits` en `src/i18n`).

---

## 4. Tipografías

**Familias:** Hanken Grotesk (texto y títulos), Newsreader cursiva (palabras destacadas) y Poppins (menú y rótulos).

- Alojadas en `src/assets/fonts/`, copiadas sin modificar de Google Fonts. **El sitio no se conecta a Google.**
- **Licencia SIL Open Font License 1.1:** uso gratuito, también comercial.
- Obligaciones al alojarlas: incluir aviso y licencia (✅ `public/licenses/OFL-*.txt` y `/creditos`); no venderlas por separado (✅); si se modifican, no usar el nombre original (✅ no se modificaron).

---

## 5. Mapa de sedes y su plan B

### OpenStreetMap (datos y teselas)

- **Datos:** © colaboradores de OpenStreetMap, licencia **ODbL**.
- **Teselas** (`tile.openstreetmap.org`): servicio **gratuito, sin garantía ni SLA**, según su [política de uso](https://operations.osmfoundation.org/policies/tiles/):
  - Puede **bloquear el acceso sin aviso** si el uso es alto; el uso comercial tiene más riesgo.
  - **Atribución obligatoria** "© OpenStreetMap contributors" con enlace → ✅ en el mapa, en cada captura y en `/creditos`.
  - Prohibido descargar teselas en masa → ✅ solo 5 capturas puntuales.
  - El navegador debe enviar `Referer` → ✅ no añadir una `Referrer-Policy` que lo bloquee.
- **Privacidad:** al ver el mapa, el navegador se conecta a OpenStreetMap (recibe la IP del visitante). Indicado en `/creditos`. **⚖️** Mencionarlo en la política de privacidad.

### Leaflet

Licencia BSD-2-Clause → aviso en `public/licenses/` y `/creditos` ✅.

### Plan B automático

`src/components/ui/SedeMap.jsx` y `SedeMapStatic.jsx`:

1. Se intenta el mapa interactivo.
2. Se cambia a la **captura de la sede** (`src/assets/images/maps/<sede>.jpg`) si no carga ninguna tesela en **10 s**, si hay **6 errores seguidos**, o si no se pudo descargar Leaflet.
3. Mientras el servicio funcione, la captura nunca se muestra.

Las capturas reproducen el mismo mapa (zoom 13, filtro azul, marcador) con la atribución incluida. **Regenerarlas** si cambian las coordenadas o se agrega una sede (`src/data/sedes.js`): página local con Leaflet a 700 × 525 px, zoom 13, mismo filtro, captura a doble densidad, guardar como JPG.

**Si el bloqueo fuera permanente:** cambiar a un proveedor con plan (MapTiler, Stadia Maps) y actualizar `TILES` y la atribución en `SedeMap.jsx`.

---

## 6. Imágenes, videos y marcas

### 6.1 Recursos libres o propios (sin pendientes)

| Recurso | Origen | Licencia / situación | Crédito |
|---|---|---|---|
| Logo de Campuslands | Propio | — | — |
| Imagen satelital (Nosotros) | NASA Earth Observatory, Blue Marble: Next Generation | Dominio público | `/creditos` |
| Tierra de noche (Global) | Render propio a partir de NASA Black Marble 2016 | Dominio público (el render es propio) | `/creditos` |
| Luna (contacto de FullService) | NASA Goddard, GSFC_20171208_Archive_e001860 | Dominio público | `/creditos` |
| Logos de tecnologías (Emplea, FullService) y de 9 herramientas de IA (AI Academy) | Simple Icons | CC0. Las marcas son de sus dueños; **uso nominativo** (solo para nombrarlas) | `/creditos` |
| Íconos de redes, servicios y tecnologías de Nosotros | Dibujados en el proyecto | Propios | — |
| Captura de WhatsApp (Órbit) | Chat oficial de Campuslands | Uso ilustrativo del canal oficial; no alterar la marca de Meta | Marcas indicadas en `/creditos` |

**Nota NASA:** acreditar la fuente y no sugerir que NASA respalda a Campuslands.

**Herramientas sin logo libre:** ChatGPT, Microsoft Copilot, Midjourney, Read AI y HeyGen se muestran con su inicial. OpenAI y Microsoft pidieron retirar sus logos de Simple Icons; **no copiarlos de otras fuentes sin permiso**.

### 6.2 Recursos que requieren autorización ⚖️

| Recurso | Dónde | Qué confirmar |
|---|---|---|
| **12 logos de aliados** | Inicio (`src/data/partners.js`) | Autorización de cada empresa; retirarlo si la alianza termina |
| **20 logos de empresas que contratan** | Emplea y Global (`src/data/hiringCompanies.js`) | Igual |
| **10 logos de clientes** | FullService (`src/data/fullServiceClients.js`) | Igual |
| **Videos de personas** | Nosotros (CEO + 8 campers: Amed Felipe, David Gomez, Dylan Rodriguez, Jesús Bustamante, Andres Daza, David Vargas, Ivana Paternina, Jhon Hernandez), Sé un camper (Santiago Laguado, Juan Rubio, Edinson Aparicio), Inicio (Juliana) | Autorización de uso de imagen de cada persona. El video de Jhon Hernandez muestra la marca **SURA**: confirmar que puede aparecer |
| **Retratos** de Cristian Velez y Clément Memain | Emplea (testimonios) | Autorización de uso de imagen |
| **Testimonios de AI Academy** (4 personas) | AI Academy | Que sean reales y haya permiso para publicarlos |
| **Casco 3D** (`src/assets/images/emplea/helmet.webp`) | Contacto de Emplea | **Proviene del material entregado por Campuslands** al desarrollador; su origen y licencia son responsabilidad de Campuslands. Parece de un banco de imágenes o generado con IA: Campuslands debe confirmar que puede usarlo comercialmente. Plan B: usar el casco del logo (`logo-mark.webp`) |
| **2 fotos de las sedes** (`src/assets/images/emplea/why-sesion.webp` y `why-sala.webp`) | Emplea, "Por qué nos eligen" | Fotos propias de Campuslands entregadas por el responsable. Se reconocen las caras de varios campers y de la expositora: autorización de uso de imagen |

### 6.3 Reglas para agregar imágenes o videos

- Solo material propio, de dominio público o con licencia que permita **uso comercial**.
- **No** usar capturas de Google Maps/Earth, Esri o Mapbox sin licencia, ni imágenes de bancos sin pagar (ej. la referencia `Content MD/ideas/png/earth.png` tiene marca de agua).
- Registrar la fuente en este documento y acreditarla en `/creditos`.

---

## 7. Privacidad y datos personales

| Tema | Situación |
|---|---|
| Cookies | **Ninguna** |
| Analítica / rastreo / píxeles | **Ninguno** |
| `localStorage` | Solo el idioma elegido (preferencia funcional) |
| Conexiones a terceros al navegar | Solo OpenStreetMap, al ver el mapa del Inicio |
| Formulario de FullService | **No envía datos a ningún servidor:** abre el correo del visitante con el mensaje; el visitante decide si lo envía |
| Consulta de facturas | Hoy no envía nada (API no conectada). **Cuando se conecte** enviará el número de documento: usar HTTPS, no guardar el número en el navegador y mencionarlo en la política de privacidad ⚖️ |
| Enlaces externos (WhatsApp, redes) | Solo se abren si el visitante hace clic |

**⚖️ Política de tratamiento de datos:** el texto publicado (`src/content/legal/privacidad.md`, copiado del original) **está incompleto**: su índice lista 7 secciones y el texto llega solo a la 3. Completarlo y añadir el servicio de mapas y, cuando existan, la consulta de facturas, formularios y cualquier analítica.

---

## 8. Contenido y textos

- Los textos salen del material original de Campuslands (`Content MD/Whole page/`).
- Los **escritos por el equipo** están marcados `[PROVISIONAL]` en `src/i18n/es.js` y `en.js`. Entre ellos: descripciones de las áreas del Inicio, descripciones de las tecnologías de Nosotros y de las herramientas de AI Academy, presentación del bloque de código de Sé un camper, texto de "Clase en vivo" y mensajes de la consulta de facturas.
- La traducción al **inglés** es propia; conviene una revisión nativa, sobre todo en los testimonios.
- **Diferencias conocidas con la web original** (decididas dejar así): match laboral 90.4% (el original muestra 85.4% en el bloque final), sin la tarjeta "Sé un Camper" en servicios del Inicio, sin la franja "Reclutando nodo Bogotá…", misión y visión con redacción ajustada, y teléfono de Emplea `+57 318 945 6901`: **corregido a propósito**; el original muestra `…690132` (12 dígitos, no existe en Colombia) pero sus propios botones de WhatsApp usan `573189456901`, así que era un error de digitación del original.
- **Masterclass:** se actualiza a mano en `src/data/masterclass.js`. El original ya muestra el **21 oct de 2026**; el sitio aún dice 14 oct.

---

## 9. Lista de verificación antes de publicar

**Técnico**
- [ ] `npm run build` sin errores.
- [ ] El hosting sirve `index.html` en cualquier ruta (`_redirects` o equivalente).
- [ ] Reglas de caché aplicadas (`_headers` o equivalente).
- [ ] No hay una `Referrer-Policy` que bloquee el `Referer` (mapa).
- [ ] Decidir dónde viven los videos (~120 MB): hosting, Git LFS o CDN.
- [ ] Medir con Lighthouse en el dominio real.
- [ ] Probar en Safari (iPhone/Mac) y Firefox.

**Atribuciones**
- [ ] "© OpenStreetMap contributors" visible en el mapa.
- [ ] `/creditos` enlazada en el pie y sus enlaces a licencias abren.
- [ ] Capturas de respaldo del mapa al día con las coordenadas de cada sede.

**Contenido**
- [ ] Fecha y datos de la masterclass actualizados.
- [x] Teléfono del equipo comercial de Emplea: `+57 318 945 6901` (coincide con los enlaces de WhatsApp del original).
- [ ] Destino de "Ir a masterclass" y "Generar diagnóstico" (hoy WhatsApp con mensaje prellenado).
- [ ] Textos `[PROVISIONAL]` revisados o aprobados.

**Legal ⚖️**
- [ ] Autorización de los logos de empresas (aliados, empresas que contratan, clientes).
- [ ] Autorización de imagen de todas las personas en videos y fotos.
- [ ] Licencia del casco 3D de Emplea (a confirmar por Campuslands, que entregó la imagen).
- [ ] Política de privacidad completa y con el servicio de mapas.

---

## 10. Qué hacer si algo falla

| Síntoma | Causa probable | Acción |
|---|---|---|
| El mapa muestra una imagen fija | OpenStreetMap no responde o bloqueó el acceso | Nada urgente: el plan B funciona. Si dura días, cambiar de proveedor (sección 5) |
| Recargar una página da error 404 | El hosting no redirige a `index.html` | Configurar la regla de `_redirects` en el hosting |
| Un botón lleva a una página de error | Cambió la URL de destino | Corregir en `src/constants/links.js` |
| Un video no se reproduce | Falta el archivo o la ruta cambió | Revisar `public/videos/` y `src/constants/videos.js` |
| Las letras se ven con otra tipografía | Falta un archivo en `src/assets/fonts/` | Restaurarlo desde el repositorio |
| El formulario de FullService "no hace nada" | El visitante no tiene cliente de correo | Usar el botón de WhatsApp de la misma sección; a futuro, servicio de formularios |
| Facturación dice "no disponible" | API no conectada (comportamiento esperado) | Definir `VITE_BILLING_ENDPOINT` cuando exista la API |

---

## 11. Regla para recursos nuevos

Todo recurso o servicio externo nuevo (tipografía, imagen, video, datos, mapa, API, analítica, formulario, chat) se registra aquí con **su licencia, su riesgo y un plan B de funcionamiento**, se acredita en **`/creditos`** y, si trata datos de visitantes, se añade a la **política de privacidad**.
