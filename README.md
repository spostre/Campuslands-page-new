# Campuslands – Nueva página

Frontend en React + Vite.

## Scripts

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
```

## Estructura

```
src/
├── assets/          # imágenes, fuentes, etc.
├── components/
│   ├── layout/      # Header, Footer, MainLayout
│   └── ui/          # componentes reutilizables (Button…)
├── constants/       # valores constantes (navegación…)
├── context/         # React Context (estado global)
├── hooks/           # custom hooks
├── pages/           # una carpeta por página/ruta
├── routes/          # definición de rutas
├── services/        # llamadas a la API
├── styles/          # CSS global y variables
├── utils/           # funciones auxiliares
├── App.jsx
└── main.jsx
```

Alias `@` → `src/` (ej. `import Button from '@/components/ui/Button'`).

Variables de entorno: copia `.env.example` a `.env`.
