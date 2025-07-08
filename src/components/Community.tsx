import { motion } from 'framer-motion';
import { TwitterLogo, TelegramLogo, DiscordLogo } from 'phosphor-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SOCIAL_LINKS } from '../config/config';

const Community = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    {
      name: t('community.twitter'),
      url: SOCIAL_LINKS.TWITTER,
      icon: <TwitterLogo size={32} weight="fill" />,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      name: t('community.telegram'),
      url: SOCIAL_LINKS.TELEGRAM,
      icon: <TelegramLogo size={32} weight="fill" />,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      name: t('community.discord'),
      url: SOCIAL_LINKS.DISCORD,
      icon: <DiscordLogo size={32} weight="fill" />,
      color: 'bg-indigo-600',
      hoverColor: 'hover:bg-indigo-700'
    }
  ];

  const communityBenefits = [
    {
      title: "Noticias y Actualizaciones",
      description: "Recibe las últimas noticias sobre ATHB y el mercado de Bitcoin."
    },
    {
      title: "Gobernanza Comunitaria",
      description: "Participa en decisiones sobre quema de tokens y airdrops."
    },
    {
      title: "Soporte Multi-Chain",
      description: "Información sobre el despliegue en múltiples blockchains."
    }
  ];

  return (
    <section id="community" className="py-20 relative">
      {/* Background decorative element */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('community.title')}
          </h2>
          
          <p className="text-lg text-white/80 mb-10">
            {t('community.description')}
          </p>
          
          {/* Social links */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className={`${link.color} ${link.hoverColor} text-white py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-colors duration-300 min-w-[200px]`}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>
          
          {/* Community benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {communityBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-lg p-6 hover:bg-blue-800/30 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-bitcoin-orange">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 p-8 bg-gradient-to-r from-bitcoin-orange/20 to-blue-800/20 rounded-xl border border-bitcoin-orange/30"
          >
            <h3 className="text-2xl font-bold mb-4">¡Únete a la revolución ATHB!</h3>
            <p className="text-white/80 mb-6">
              No te pierdas las últimas novedades, eventos exclusivos y la oportunidad de formar parte
              de una de las comunidades de meme tokens más emocionantes en múltiples blockchains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={SOCIAL_LINKS.TELEGRAM}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-bitcoin-orange text-blue-950 font-bold py-3 px-8 rounded-lg hover:bg-amber-500 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <TelegramLogo weight="fill" />
                {t('hero.join.telegram')}
              </a>
              <a 
                href={SOCIAL_LINKS.TWITTER}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <TwitterLogo weight="fill" />
                {t('hero.follow.twitter')}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;