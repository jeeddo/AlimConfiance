import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import App from './App.tsx'
import ThemeContextProvider from './contexts/ThemeContext.tsx'
import GlobalContextProvider from './contexts/GlobalContext.tsx'
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeContextProvider >
            <GlobalContextProvider>
                <App />
            </GlobalContextProvider>
        </ThemeContextProvider>
    </StrictMode>
)
