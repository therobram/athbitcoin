import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { TOTAL_SUPPLY } from '../config/config';

const Tokenomics = () => {
  const { t } = useLanguage();
  
  const tokenomicsData = [
    { name: t('tokenomics.total_supply'), value: TOTAL_SUPPLY + ' ATHB' },
    { name: t('tokenomics.networks'), value: 'BSC, Solana, Ethereum' },
    { name: t('tokenomics.liquidity'), value: '40% bloqueada por 1 año' },
    { name: t('tokenomics.marketing'), value: '15% (vesting mensual)' },
    { name: t('tokenomics.development'), value: '10% (vesting trimestral)' },
    { name: t('tokenomics.community'), value: '25% (eventos, airdrops, competencias)' },
    { name: t('tokenomics.team'), value: '10% (bloqueado 6 meses, vesting 18 meses)' }
  ];

  const tokenUtilities = [
    {
      title: t('tokenomics.utility1.title'),
      description: t('tokenomics.utility1.description')
    },
    {
      title: t('tokenomics.utility2.title'),
      description: t('tokenomics.utility2.description')
    },
    {
      title: t('tokenomics.utility3.title'),
      description: t('tokenomics.utility3.description')
    },
    {
      title: t('tokenomics.utility4.title'),
      description: t('tokenomics.utility4.description')
    }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-blue-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('tokenomics.title')}
            </h2>
            <p className="text-lg text-white/80">
              {t('tokenomics.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tokenomics data */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-bitcoin-orange">{t('tokenomics.details.title')}</h3>
              
              <ul className="space-y-4">
                {tokenomicsData.map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-blue-800/30 pb-2">
                    <span className="text-white/80">{item.name}</span>
                    <span className="font-medium text-white">{item.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Token Utility */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-bitcoin-orange">{t('tokenomics.utility.title')}</h3>
              
              <div className="space-y-4">
                {tokenUtilities.map((utility, index) => (
                  <div key={index} className="p-4 bg-blue-900/50 rounded-lg">
                    <h4 className="font-semibold mb-2">{utility.title}</h4>
                    <p className="text-white/80">{utility.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tax information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 bg-gradient-to-r from-bitcoin-orange/20 to-blue-800/20 rounded-lg border border-bitcoin-orange/30"
          >
            <h3 className="text-xl font-bold mb-4 text-center">{t('tokenomics.tax.title')}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-blue-900/40 rounded-lg">
                <h4 className="font-semibold mb-2">{t('tokenomics.tax.buy')}</h4>
                <p className="text-2xl font-bold text-bitcoin-orange">5%</p>
                <p className="text-sm text-white/70 mt-1">3% Marketing / 2% Liquidez</p>
              </div>
              
              <div className="p-4 bg-blue-900/40 rounded-lg">
                <h4 className="font-semibold mb-2">{t('tokenomics.tax.sell')}</h4>
                <p className="text-2xl font-bold text-bitcoin-orange">7%</p>
                <p className="text-sm text-white/70 mt-1">4% Marketing / 3% Liquidez</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;