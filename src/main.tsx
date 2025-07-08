import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ScrollProvider } from './providers/ScrollProvider'
import './index.css'
import App from './App'

// Función para cargar las imágenes previamente
const preloadImages = () => {
  const imagePaths = ['/images/1.png', '/images/blockchains/bsc.png', '/images/blockchains/solana.svg', '/images/blockchains/ethereum.png'];
  
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
};

// Precargar imágenes
preloadImages();

// Detectar el idioma del navegador y guardar en localStorage si no existe
const setInitialLanguage = () => {
  if (!localStorage.getItem('athb-language')) {
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['es', 'en', 'zh', 'pt', 'fr'];
    const lang = supportedLangs.includes(browserLang) ? browserLang : 'es';
    localStorage.setItem('athb-language', lang);
    document.documentElement.lang = lang;
  } else {
    document.documentElement.lang = localStorage.getItem('athb-language') || 'es';
  }
};

setInitialLanguage();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </ErrorBoundary>
  </StrictMode>,
)
