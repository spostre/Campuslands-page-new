import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Estilos globales primero: así los estilos de cada componente/sección los pueden ajustar
import './styles/global.css'
// Detecta equipos modestos antes de pintar (clase .is-low-power en <html>)
import './utils/device'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
