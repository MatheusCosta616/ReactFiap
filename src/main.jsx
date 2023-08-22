import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cabecalho from './cabecalho/cabecalho.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecalho></Cabecalho>
    <App />
  </React.StrictMode>,
)
