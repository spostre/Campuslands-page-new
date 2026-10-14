# Políticas, licencias y riesgos – Campuslands (nueva web)

Qué recursos de terceros usa el sitio, qué obligaciones legales tiene cada uno, qué puede fallar y qué pasa si falla. Revisar antes de publicar y cada vez que se agregue un recurso externo.

> Este documento resume obligaciones de licencias y políticas de uso públicas a la fecha (octubre 2026). No es asesoría legal: los puntos marcados **⚖️** conviene validarlos con el área legal de Campuslands.

---

## 1. Resumen de riesgo por sección

"Riesgo" = probabilidad de que la sección deje de funcionar o se vea mal por algo ajeno al proyecto.

| Sección / pieza | Depende de | Riesgo | Si falla… | Plan B |
|---|---|---|---|---|
| Encabezado, pie, hero, pilares, servicios, redes | Nada externo (todo está en el proyecto) | **Nulo** | — | — |
| Tipografías | Archivos propios en `src/assets/fonts/` | **Nulo** | — | Si un archivo faltara, el navegador usa la fuente de respaldo del sistema. |
| Logos de aliados, mascota, logo, captura del chat | Archivos propios en `src/assets/` | **Nulo** | — | — |
| Estrellas (fijas y cayendo), luna de fondo, nieve, persiana (animación por scroll), desvanecidos, luz naranja de Historias, animaciones de tarjetas e íconos, sonido de la mascota | Funciones del navegador (canvas, Web Audio, scroll) — **ningún servicio externo** | **Nulo** | En navegadores muy antiguos simplemente no se ven / no suenan. | La página funciona igual. Con "reducir movimiento" quedan quietas. |
| **Mapa de sedes** | Servidores de mapas de OpenStreetMap | **Medio** | Sin plan B, el recuadro quedaría vacío. | **Automático:** se muestra una captura del mismo mapa para la sede elegida (sección 4). |
| Botones a WhatsApp y redes | WhatsApp, Instagram, TikTok, LinkedIn, Facebook | **Bajo** | El botón abre una página caída o con error. | Depende del tercero; actualizar la URL en `links.js` si cambia. |
| **Botones marcados `[ANTIGUA]`** (servicios, políticas, "contratar talento") | La web anterior `campuslands.com` | **Medio–alto a futuro** | Cuando se retire la web antigua, esos botones darán error 404. | Cambiarlos por rutas internas a medida que se construyan las páginas nuevas (`src/constants/links.js`). |
| **Imagen satelital** (sedes de Nosotros) | Archivo propio en `src/assets/images/maps/latam-satellite*.webp` (recorte de NASA Blue Marble, dominio público) | **Nulo** | — | Si se quisiera otra imagen: usar solo fuentes de dominio público o con licencia comercial (NASA, USGS/Landsat). **No** usar capturas de Google Maps/Earth ni de Esri/Mapbox sin licencia. Si se cambia el recorte, actualizar los límites en `sedesGeo.js`. |
| **Videos** (Inicio, Sé un camper) | Archivos propios en `public/videos/` (material de Campuslands) | **Bajo** | Si un archivo falta o no carga, el recuadro queda vacío. | **Automático:** `VideoPlayer` muestra el recuadro reservado con el nombre del video. A futuro, si pesan demasiado para el servidor, alojarlos en YouTube/Vimeo o un CDN y cambiar la ruta en `src/constants/videos.js`. |
| Preferencia de idioma | `localStorage` del navegador | **Nulo** | Si está bloqueado, el sitio abre en español. | — |

---

> **Regla:** todo recurso o servicio externo nuevo (tipografía, imagen, datos, mapa, API, analítica, etc.) se registra en este archivo con su licencia, su riesgo y un **plan B** de funcionamiento, y se acredita en la página **/creditos**.

---

## 2. Tipografías — SIL Open Font License 1.1

**Familias:** Hanken Grotesk, Newsreader (cursiva) y Poppins.

- **Dónde están:** alojadas en el propio proyecto (`src/assets/fonts/`), copiadas sin modificar de Google Fonts. **El sitio ya no se conecta a Google** para cargarlas.
- **Licencia:** SIL Open Font License 1.1 (OFL). Permite usarlas gratis, también en sitios comerciales, e incluirlas en el sitio.
- **Obligaciones al redistribuirlas** (alojarlas cuenta como redistribución):
  - Acompañarlas del aviso de copyright y del texto de la licencia → ✅ `public/licenses/OFL-*.txt` y página **/creditos**.
  - No venderlas por separado → ✅ no aplica.
  - Si se modificaran, no usar el nombre original de la fuente → ✅ no se modificaron.
- **Si se agrega otra fuente:** verificar que sea OFL (u otra licencia libre), descargar sus archivos, añadir su `@font-face` en `fonts.css`, su licencia en `public/licenses/` y su crédito en `src/i18n` (`credits`).

---

## 3. Mapa de sedes — OpenStreetMap y Leaflet

### Datos y servicio de mapas (OpenStreetMap)

- **Datos:** © colaboradores de OpenStreetMap, bajo la **Open Database License (ODbL)**.
- **Servicio de imágenes del mapa** (`tile.openstreetmap.org`): lo ofrece la OpenStreetMap Foundation de forma **gratuita, sin garantía ni SLA**. Según su [política de uso](https://operations.osmfoundation.org/policies/tiles/):
  - Pueden **bloquear el acceso sin aviso** si el uso es alto o degrada el servicio. Los servicios comerciales tienen más riesgo de que les retiren el acceso.
  - **Atribución obligatoria** y visible: "© OpenStreetMap contributors" con enlace a la página de copyright → ✅ en el mapa interactivo, en cada captura de respaldo y en **/creditos**.
  - Prohibido descargar mapas en masa o para uso sin conexión → ✅ solo se generaron 5 capturas puntuales (una por sede), no se precargan zonas.
  - El navegador debe enviar la cabecera `Referer` → ✅ no se usa una `Referrer-Policy` restrictiva. **No añadir** una que la bloquee.
- **Privacidad:** al ver el mapa interactivo, el navegador del visitante se conecta a los servidores de OpenStreetMap (que reciben su IP). Está indicado en **/creditos**. **⚖️** Recomendable mencionarlo también en la Política de tratamiento de datos personales de Campuslands.

### Librería del mapa (Leaflet)

- Licencia **BSD-2-Clause**: exige reproducir su aviso de copyright → ✅ `public/licenses/LICENSE-leaflet.txt` y **/creditos** (el código empaquetado no conserva el comentario de licencia, por eso se publica aparte).

---

## 4. Plan B del mapa (captura de respaldo)

**Objetivo:** que el recuadro del mapa nunca quede vacío aunque OpenStreetMap corte el servicio, temporal o permanentemente.

**Cómo funciona** (`src/components/ui/SedeMap.jsx` y `SedeMapStatic.jsx`):
1. Se intenta mostrar el mapa interactivo normal.
2. Se activa el plan B si:
   - no carga **ninguna** imagen del mapa en **10 segundos**, o
   - hay **6 errores seguidos** al cargar imágenes (p. ej. bloqueo o caída a mitad de la visita), o
   - no se pudo descargar el propio código del mapa.
3. En ese caso se libera el mapa (deja de pedir imágenes) y se muestra la **captura de la sede seleccionada** (`src/assets/images/maps/<sede>.jpg`). Al cambiar de sede en el selector, cambia la captura.
4. Mientras el servicio funcione, la captura **nunca** se muestra.

**Las capturas** reproducen el mismo mapa (zoom 13, centrado en las coordenadas de la sede, mismo filtro azul noche, mismo marcador) con la atribución de OpenStreetMap incluida en la imagen. Se probó bloqueando el servidor de mapas: aparece la captura y el resto de la página sigue normal.

**Cuándo regenerarlas:** si cambian las coordenadas de una sede o se agrega una sede nueva (`src/data/sedes.js`, campo `snapshot`). Procedimiento: abrir una página HTML local con Leaflet a 700 × 525 px, zoom 13, mismo filtro y marcador, capturarla con Edge sin ventana a doble densidad (`--force-device-scale-factor=2`) y guardarla como JPG en `src/assets/images/maps/`. Generar solo las capturas necesarias (nada de descargas masivas).

**Si el bloqueo fuera permanente:** el sitio seguirá mostrando las capturas, pero lo recomendable es cambiar a un proveedor de mapas con plan (p. ej. MapTiler o Stadia Maps) y actualizar `TILES` y la atribución en `SedeMap.jsx`.

---

## 5. Software de código abierto

| Librería | Licencia | Cumplimiento |
|---|---|---|
| React, React DOM, Scheduler | MIT | Aviso conservado en el código empaquetado + `public/licenses/` + /creditos |
| React Router | MIT | Igual que arriba |
| Leaflet | BSD-2-Clause | `public/licenses/` + /creditos |
| Vite y plugins | MIT | Solo herramientas de desarrollo; no se publican en el sitio |

Si se agrega una librería, revisar su licencia (`node_modules/<paquete>/package.json` → `license`) y, si se incluye en el sitio, añadirla a `public/licenses/` y a /creditos.

---

## 6. Marcas e imágenes

| Recurso | Situación | Recomendación |
|---|---|---|
| Logo y mascota de Campuslands | Propios | — |
| **Logos de los 24 aliados** | Marcas de cada empresa, entregadas por Campuslands | **⚖️** Confirmar que existe autorización de cada aliado para mostrar su logo; retirarlo si la alianza termina. Están listados en `src/data/partners.js`. |
| Captura de WhatsApp (Órbit) | Muestra la interfaz de WhatsApp (marca de Meta) con el chat oficial de Campuslands | Uso ilustrativo del canal oficial; no alterar la marca. |
| Íconos de redes sociales | Dibujados en el proyecto, inspirados en cada marca | Riesgo bajo; si se prefiere, reemplazar por los íconos oficiales que cada red ofrece en su guía de marca. |
| Nombres de redes y de WhatsApp | Marcas de sus titulares | Indicado en /creditos. |
| Videos de testimonios y de Campuslands | Propios (entregados por Campuslands) | **⚖️** Confirmar que las personas que aparecen autorizaron el uso de su imagen en la web. |
| Imagen satelital | NASA Blue Marble: Next Generation — dominio público | Mantener el crédito en /creditos ("NASA Earth Observatory"); no sugerir respaldo de NASA. |
| Fotos o videos de terceros | **No se usan** | Si se agregan, usar solo material propio o con licencia que permita uso comercial, y registrar la fuente. |

---

## 7. Privacidad

- **Sin cookies** y sin herramientas de analítica o seguimiento.
- `localStorage` guarda solo el idioma elegido (preferencia funcional).
- **Conexiones a terceros desde el navegador:** solo los servidores de mapas de OpenStreetMap (al ver el mapa). Google Fonts ya no se usa.
- Los enlaces externos (WhatsApp, redes) solo se abren si el visitante hace clic.
- **⚖️** Al publicar, revisar que la Política de tratamiento de datos personales mencione el servicio de mapas de terceros y cualquier herramienta que se agregue después (formularios, analítica, chat, etc.).

---

## 8. Lista de verificación antes de publicar

- [ ] La atribución "© OpenStreetMap contributors" se ve en el mapa.
- [ ] La página **/creditos** está enlazada en el pie y sus enlaces a licencias abren (`/licenses/...`).
- [ ] Las capturas de respaldo del mapa corresponden a las coordenadas actuales de cada sede.
- [ ] No hay una `Referrer-Policy` que bloquee el `Referer` en el servidor.
- [ ] Revisados los enlaces `[ANTIGUA]` en `src/constants/links.js`.
- [ ] **⚖️** Autorización de uso de logos de aliados.
- [ ] **⚖️** Política de tratamiento de datos actualizada (servicio de mapas).
- [ ] **⚖️** Autorización de imagen de las personas en los videos.
- [ ] Videos pesados: `public/videos/` suma ~31 MB; antes de subir al repositorio/servidor decidir si se alojan fuera (YouTube/Vimeo/CDN).
- [ ] `npm run build` sin errores.

---

## 9. Qué hacer si algo falla

| Síntoma | Causa probable | Acción |
|---|---|---|
| El mapa muestra una imagen fija en vez del mapa interactivo | OpenStreetMap no responde o bloqueó el acceso | Nada urgente: el plan B está funcionando. Si persiste días, cambiar de proveedor (sección 4). |
| Un botón lleva a una página de error | Cambió o se retiró la URL de destino | Corregir la URL en `src/constants/links.js`. |
| Las letras se ven con otra tipografía | Falta un archivo en `src/assets/fonts/` | Restaurarlo desde el repositorio o volver a descargarlo (ver `fonts.css`). |
