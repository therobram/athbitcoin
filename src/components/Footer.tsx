import { TwitterLogo, TelegramLogo, GlobeSimple, DiscordLogo } from 'phosphor-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SOCIAL_LINKS } from '../config/config';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'Website',
      url: 'https://athbitcoin.xyz',
      icon: <GlobeSimple size={24} weight="bold" />
    },
    {
      name: 'Twitter',
      url: SOCIAL_LINKS.TWITTER,
      icon: <TwitterLogo size={24} weight="fill" />
    },
    {
      name: 'Telegram',
      url: SOCIAL_LINKS.TELEGRAM,
      icon: <TelegramLogo size={24} weight="fill" />
    },
    {
      name: 'Discord',
      url: SOCIAL_LINKS.DISCORD,
      icon: <DiscordLogo size={24} weight="fill" />
    }
  ];

  // Enlaces de navegación traducidos
  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.tokenomics'), href: '#tokenomics' },
    { name: t('nav.community'), href: '#community' },
    { name: t('nav.roadmap'), href: '#roadmap' },
  ];

  return (
    <footer className="py-12 bg-blue-950 border-t border-blue-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/1.png" 
                alt="ATH Bitcoin Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-lg text-white">
                ATH<span className="text-bitcoin-orange">B</span>
              </span>
            </div>
            <p className="text-white/60 text-sm text-center md:text-left max-w-xs">
              ATH Bitcoin (ATHB) - Multi-Blockchain Token
            </p>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/80">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-white/60 hover:text-bitcoin-orange transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Social links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/80">Comunidad</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-bitcoin-orange transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright & Disclaimer */}
        <div className="mt-12 pt-6 border-t border-blue-900/30 text-center">
          <p className="text-white/50 text-sm mb-2">
            © {currentYear} ATH Bitcoin. {t('footer.rights')}
          </p>
          <p className="text-white/40 text-xs max-w-3xl mx-auto">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;