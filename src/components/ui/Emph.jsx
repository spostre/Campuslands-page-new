// Convierte "texto con *palabra* destacada" en texto con <em>palabra</em>.
// La palabra destacada se muestra en serif cursiva (ver .display em en global.css).
export default function Emph({ text }) {
  return text.split(/(\*[^*]+\*)/).map((part, i) =>
    part.startsWith('*') && part.endsWith('*') ? <em key={i}>{part.slice(1, -1)}</em> : part,
  )
}

// Versión sin marcas, para atributos como alt o aria-label
export const plain = (text) => text.replace(/\*/g, '')
