import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './styles/globals.css'

import { FiltersProvider } from './providers/filters.provider.tsx'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </StrictMode>
)
