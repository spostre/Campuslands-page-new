import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Estilos globales primero: así los estilos de cada componente/sección los pueden ajustar
import './styles/global.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
