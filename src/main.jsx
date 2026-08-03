import { StrictMode } from 'react' // React-Modus für zusätzliche Entwicklungsprüfungen importieren
import { createRoot } from 'react-dom/client' // API zum Rendern der App in den DOM importieren
import './index.css' // Globale Basis-Styles laden
import App from './App.jsx' // Root-Komponente der Anwendung importieren

createRoot(document.getElementById('root')).render( // React-App in das HTML-Element #root rendern
  <StrictMode> {/* StrictMode aktiviert zusätzliche Warnungen in der Entwicklung */}
    <App /> {/* Hauptkomponente der App einbinden */}
  </StrictMode>, // Ende von StrictMode
) // Ende des render-Aufrufs
