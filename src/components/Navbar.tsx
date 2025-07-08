import { useState } from 'react';
import { motion } from 'framer-motion';
import { List, X } from 'phosphor-react';
import { useScroll } from '../providers/ScrollProvider';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { DEXSCREENER_LINK } from '../config/config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled: scrolled } = useScroll();
  const { t } = useLanguage();

  // Enlaces de navegación
  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.tokenomics'), href: '#tokenomics' },
    { name: t('nav.community'), href: '#community' },
    { name: t('nav.roadmap'), href: '#roadmap' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-blue-950/90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <img 
            src="/images/1.png" 
            alt="ATH Bitcoin Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-xl text-white">
            ATH<span className="text-bitcoin-orange">B</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-6"
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-white/80 hover:text-bitcoin-orange transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          
          {/* DexScreener Link */}
          <a
            href={DEXSCREENER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800/50 hover:bg-blue-700/50 text-white py-1.5 px-3 rounded-lg transition-colors duration-300 text-sm"
          >
            DexScreener
          </a>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </motion.nav>

        {/* Mobile Navigation - Right side items */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Language Switcher for Mobile */}
          <LanguageSwitcher />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-blue-950/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-white/80 hover:text-bitcoin-orange py-2 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              {/* DexScreener Link for Mobile */}
              <a
                href={DEXSCREENER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800/50 hover:bg-blue-700/50 text-white py-2 px-3 rounded-lg transition-colors duration-300 text-sm inline-block"
                onClick={() => setIsOpen(false)}
              >
                DexScreener
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;