import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { LAUNCH_DATE, SOCIAL_LINKS } from '../config/config';

const Hero = () => {
  const { t } = useLanguage();
  
  // Formato de fecha para mostrar
  const formatLaunchDate = () => {
    const date = new Date(LAUNCH_DATE);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-bitcoin-orange/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">{t('hero.title')}</span>
              <span className="text-bitcoin-orange block md:inline"> (ATHB)</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              {t('hero.subtitle')}
            </p>
            
            <div className="mb-8">
              <p className="text-lg text-white/90 bg-bitcoin-orange/10 py-2 px-4 rounded-lg inline-block">
                {t('hero.launch')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={SOCIAL_LINKS.TELEGRAM}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-bitcoin-orange text-blue-950 font-bold py-3 px-8 rounded-lg hover:bg-amber-500 transition-colors duration-300 text-center"
              >
                {t('hero.join.telegram')}
              </a>
              <a 
                href={SOCIAL_LINKS.TWITTER}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-center"
              >
                {t('hero.follow.twitter')}
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  rotate: 2,
                  transition: { duration: 0.3 } 
                }}
              >
                <img 
                  src="/images/1.png" 
                  alt="ALL-TIME HIGH ATH" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;