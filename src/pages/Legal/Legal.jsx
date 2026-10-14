import { useMemo } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import privacyText from '@/content/legal/privacidad.md?raw'
import termsText from '@/content/legal/terminos.md?raw'
import './Legal.css'

// Documentos legales (texto íntegro de Content MD/Politicas, copiado en src/content/legal).
// Solo existen en español: en inglés se muestra un aviso arriba.
const DOCS = { privacy: privacyText, terms: termsText }

// Identificador para enlazar cada título desde el índice
const slug = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

// Negritas, cursivas y enlaces dentro de una línea
function inline(text) {
  const parts = []
  const re = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g
  let last = 0
  let m
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    if (m[1]) parts.push(<strong key={m.index}>{m[1]}</strong>)
    else if (m[2]) parts.push(<em key={m.index}>{m[2]}</em>)
    else parts.push(<a key={m.index} href={m[4]} target="_blank" rel="noopener noreferrer">{m[3]}</a>)
    last = re.lastIndex
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

// Lector mínimo de markdown: títulos (#–####), párrafos, listas, citas y separadores
function parse(md) {
  const blocks = []
  let list = null
  const flush = () => {
    if (list) blocks.push(list)
    list = null
  }
  for (const raw of md.split('\n')) {
    const line = raw.trim()
    if (!line) {
      flush()
      continue
    }
    const heading = /^(#{1,4})\s+(.*)$/.exec(line)
    const bullet = /^[*-]\s+(.*)$/.exec(line)
    const numbered = /^(\d+)\.\s+(.*)$/.exec(line)
    if (heading) {
      flush()
      blocks.push({ type: `h${heading[1].length}`, text: heading[2] })
    } else if (line === '---') {
      flush()
    } else if (bullet || numbered) {
      const ordered = Boolean(numbered)
      if (!list || list.ordered !== ordered) {
        flush()
        list = { type: 'list', ordered, items: [] }
      }
      list.items.push(bullet ? bullet[1] : numbered[2])
    } else if (line.startsWith('>')) {
      flush()
      blocks.push({ type: 'quote', text: line.replace(/^>\s?/, '') })
    } else {
      flush()
      blocks.push({ type: 'p', text: line })
    }
  }
  flush()
  return blocks
}

export default function Legal({ doc }) {
  const { t, lang } = useLanguage()
  const blocks = useMemo(() => parse(DOCS[doc]), [doc])
  const [title, ...body] = blocks
  const index = body.filter((b) => b.type === 'h2')

  return (
    <section className="section legal surface-light">
      <div className="container">
        <header className="legal__head">
          <span className="eyebrow">{t.footer.legalTitle}</span>
          <h1 className="display h2">{title.text}</h1>
          {lang !== 'es' && <p className="legal__notice">{t.legal.onlySpanish}</p>}
        </header>

        <div className="legal__layout">
          <nav className="legal__index" aria-label={t.legal.index}>
            <p className="legal__index-title">{t.legal.index}</p>
            <ol>
              {index.map((h) => (
                <li key={h.text}>
                  <a href={`#${slug(h.text)}`}>{h.text}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="legal__doc" lang="es">
            {body.map((b, i) => {
              if (b.type === 'list') {
                const List = b.ordered ? 'ol' : 'ul'
                return (
                  <List key={i}>
                    {b.items.map((item, j) => <li key={j}>{inline(item)}</li>)}
                  </List>
                )
              }
              if (b.type === 'quote') return <blockquote key={i}>{inline(b.text)}</blockquote>
              if (b.type === 'p') return <p key={i}>{inline(b.text)}</p>
              const Tag = b.type === 'h1' ? 'h2' : b.type
              return (
                <Tag key={i} id={b.type === 'h2' ? slug(b.text) : undefined}>
                  {inline(b.text)}
                </Tag>
              )
            })}
          </article>
        </div>
      </div>
    </section>
  )
}
