import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Encuentra el elemento de la raíz de tu aplicación
const rootElement = document.getElementById('root');

// Usa createRoot en lugar de ReactDOM.render
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
