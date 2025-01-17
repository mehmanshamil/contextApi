import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalProvider from './assets/context/GlobalProvider.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <App />
    </GlobalProvider>
)
