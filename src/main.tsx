import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import App from './App.tsx'
import ThemeContextProvider from './context/themeContext.tsx'
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeContextProvider >
            <App />
        </ThemeContextProvider>
    </StrictMode>
)
