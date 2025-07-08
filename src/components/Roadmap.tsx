import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const Roadmap = () => {
  const { t } = useLanguage();
  
  // Roadmap actualizado para reflejar el enfoque multi-blockchain
  const roadmapItems = [
    {
      phase: t('roadmap.phase1.title'),
      title: "Q2 2025",
      items: [
        t('roadmap.phase1.item1'),
        t('roadmap.phase1.item2'),
        t('roadmap.phase1.item3'),
        "Implementación de soporte multi-idioma",
        "Auditoría de seguridad"
      ],
      current: true
    },
    {
      phase: t('roadmap.phase2.title'),
      title: "Q3 2025",
      items: [
        t('roadmap.phase2.item1'),
        t('roadmap.phase2.item2'),
        t('roadmap.phase2.item3'),
        "Implementación de hitos de Bitcoin",
        "Expansión de comunidad internacional"
      ],
      current: false
    },
    {
      phase: t('roadmap.phase3.title'),
      title: "Q4 2025",
      items: [
        t('roadmap.phase3.item1'),
        t('roadmap.phase3.item2'),
        t('roadmap.phase3.item3'),
        "Desarrollo de dApp para gobernanza",
        "Sistema de votación para hitos de Bitcoin"
      ],
      current: false
    }
  ];
  
  return (
    <section id="roadmap" className="py-20 bg-blue-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('roadmap.title')}
            </h2>
            <p className="text-lg text-white/80">
              {t('roadmap.subtitle')}
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bitcoin-orange/30 hidden md:block"></div>
            
            {/* Roadmap items */}
            <div className="space-y-16 md:space-y-0 relative">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row md:items-center gap-8 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Status for mobile */}
                  <div className="md:hidden text-center mb-2">
                    {item.current && (
                      <span className="inline-block py-1 px-3 bg-green-500/20 rounded text-green-400 text-sm">
                        En progreso
                      </span>
                    )}
                  </div>
                  
                  {/* Left side or right side depending on index */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-lg p-6 
                      ${item.current ? 'border-bitcoin-orange/50' : ''}
                      ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-bitcoin-orange">{item.phase}</h3>
                        {/* Status for desktop */}
                        {item.current && (
                          <span className="hidden md:inline-block py-1 px-3 bg-green-500/20 rounded text-green-400 text-sm">
                            En progreso
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                      <ul className={`space-y-2 text-white/80 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        {item.items.map((listItem, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="text-bitcoin-orange mt-1">•</span>
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="hidden md:flex md:w-0 relative justify-center items-center">
                    <div className={`w-5 h-5 rounded-full ${item.current ? 'bg-green-500' : 'bg-bitcoin-orange'} border-4 border-blue-950 z-10`}></div>
                  </div>
                  
                  {/* Empty div for layout on the other side */}
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Future Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 p-8 bg-gradient-to-r from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-700/30 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-bitcoin-orange">Visión a Largo Plazo</h3>
            <p className="text-white/80 max-w-3xl mx-auto">
              Mientras Bitcoin continúa su camino hacia nuevos máximos históricos, ATHB evolucionará 
              para ofrecer más utilidades, experiencias y valor a su comunidad en múltiples blockchains. 
              Nuestra meta es crecer junto con el mercado de criptomonedas y celebrar cada nuevo ATH de Bitcoin 
              con nuestra comunidad global.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;