import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { BITCOIN_MILESTONES } from '../config/config';
import { CheckCircle, Clock } from 'phosphor-react';

const BitcoinMilestones = () => {
  const { t } = useLanguage();

  return (
    <section id="milestones" className="py-20 bg-blue-950/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('milestones.title')}
            </h2>
            <p className="text-lg text-white/80">
              {t('milestones.subtitle')}
            </p>
          </div>

          <div className="p-6 bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-lg mb-8">
            <p className="text-center text-white/90 mb-4">
              {t('milestones.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BITCOIN_MILESTONES.map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-b from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-700/30 p-6 text-center"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-bitcoin-orange">
                    ${milestone.price.toLocaleString()}
                  </h3>
                  <p className="text-sm text-white/70">
                    {t('milestones.price')}
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-lg font-semibold">
                    {milestone.distribution}%
                  </p>
                  <p className="text-sm text-white/70">
                    {t('milestones.distribution')}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  {milestone.completed ? (
                    <CheckCircle size={20} weight="fill" className="text-green-500" />
                  ) : (
                    <Clock size={20} weight="fill" className="text-amber-500" />
                  )}
                  <span className={milestone.completed ? "text-green-500" : "text-amber-500"}>
                    {milestone.completed 
                      ? t('milestones.status.completed') 
                      : t('milestones.status.pending')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BitcoinMilestones;