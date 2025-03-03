import App from './App.tsx'
import './assets/css/index.css'
import GlobalContextProvider from './contexts/global/GlobalContext.tsx'
import ThemeContextProvider from './contexts/theme/ThemeContext.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </ThemeContextProvider>
  </StrictMode>
)
