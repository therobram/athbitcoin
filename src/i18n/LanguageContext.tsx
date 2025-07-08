import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from './translations';

// Lista de idiomas soportados
export const SUPPORTED_LANGUAGES = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'pt', name: 'Português' },
  { code: 'fr', name: 'Français' },
];

// Función para obtener la configuración regional del navegador
export const getBrowserLanguage = (): string => {
  const browserLang = navigator.language.split('-')[0];
  const isSupported = SUPPORTED_LANGUAGES.some(lang => lang.code === browserLang);
  return isSupported ? browserLang : 'es'; // Español como idioma predeterminado
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const defaultValue: LanguageContextType = {
  language: 'es',
  setLanguage: () => {},
  t: (key: string) => key,
};

export const LanguageContext = createContext<LanguageContextType>(defaultValue);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('athb-language');
    if (savedLang && SUPPORTED_LANGUAGES.some(lang => lang.code === savedLang)) {
      setLanguage(savedLang);
    } else {
      const browserLang = getBrowserLanguage();
      setLanguage(browserLang);
    }
  }, []);

  const handleSetLanguage = (lang: string) => {
    if (SUPPORTED_LANGUAGES.some(l => l.code === lang)) {
      setLanguage(lang);
      localStorage.setItem('athb-language', lang);
      document.documentElement.lang = lang;
    }
  };

  // Función de traducción
  const t = (key: string): string => {
    const langData = translations[language as keyof typeof translations] || translations.es;
    return langData[key as keyof typeof langData] || key;
  };

  const contextValue = {
    language,
    setLanguage: handleSetLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);