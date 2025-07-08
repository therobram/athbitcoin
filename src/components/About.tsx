import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      title: t('about.feature1.title'),
      description: t('about.feature1.description')
    },
    {
      title: t('about.feature2.title'),
      description: t('about.feature2.description')
    },
    {
      title: t('about.feature3.title'),
      description: t('about.feature3.description')
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-bitcoin-orange/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t('about.title')}
          </motion.h2>
          
          <motion.p 
            variants={fadeInUpVariants}
            className="text-lg text-white/80 mb-8"
          >
            {t('about.description')}
          </motion.p>
          
          <motion.div 
            variants={fadeInUpVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-lg p-6 hover:bg-blue-800/30 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-bitcoin-orange">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={fadeInUpVariants}
            className="mt-16 p-6 bg-gradient-to-r from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-700/30"
          >
            <h3 className="text-2xl font-semibold mb-4 text-bitcoin-orange">{t('about.vision.title')}</h3>
            <p className="text-white/80">
              {t('about.vision.description')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;