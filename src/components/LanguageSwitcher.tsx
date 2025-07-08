import { useState } from 'react';
import { useLanguage, SUPPORTED_LANGUAGES } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Check, Globe } from 'phosphor-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = SUPPORTED_LANGUAGES.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-white/80 hover:text-white transition-colors duration-300 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe size={18} weight="bold" />
        <span className="text-sm hidden md:inline">{currentLanguage?.name}</span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-48 bg-blue-900/95 backdrop-blur-md rounded-lg shadow-lg py-2 z-50"
        >
          <div className="py-1">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-blue-800/50 flex items-center justify-between"
              >
                <span>{lang.name}</span>
                {language === lang.code && <Check size={16} weight="bold" className="text-bitcoin-orange" />}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher;