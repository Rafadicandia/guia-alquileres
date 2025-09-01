import React from 'react'
import ReactDOM from 'react-dom/client'
// Asegúrate que el nombre del archivo App sea correcto (App.jsx)
import App from './App.jsx'
// Asegúrate que el nombre del archivo CSS sea correcto (index.css o similar)
import './index.css'

// Esta parte monta tu aplicación en el HTML
// Busca el elemento con id="root" en tu index.html
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("No se encontró el elemento con id 'root'. Asegúrate de que exista en tu index.html");
}

// Crea la raíz de React y renderiza la aplicación
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
