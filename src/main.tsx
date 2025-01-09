import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DBG from './dbg'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <DBG />
  </StrictMode>,
)
