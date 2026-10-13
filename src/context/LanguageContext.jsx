import { createContext, useContext, useEffect, useState } from 'react'
import es from '@/i18n/es'
import en from '@/i18n/en'

const DICTIONARIES = { es, en }
const LanguageContext = createContext(null)

const initialLang = () => (document.documentElement.lang === 'en' ? 'en' : 'es')

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // almacenamiento no disponible: el idioma solo dura la sesión
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: DICTIONARIES[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
