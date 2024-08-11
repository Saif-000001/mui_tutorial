import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './Components/TheamProviderMUI.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    
  </StrictMode>,
)
