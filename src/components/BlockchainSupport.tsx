import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { CONTRACTS, EXPLORER_LINKS, DEX_LINKS, BLOCKCHAIN_STATUS, TOTAL_SUPPLY } from '../config/config';
import { Copy, CheckCircle, ArrowSquareOut } from 'phosphor-react';
import { useState } from 'react';

const BlockchainSupport = () => {
  const { t } = useLanguage();
  const [copiedContract, setCopiedContract] = useState<string | null>(null);

  const blockchains = [
    {
      id: 'bsc',
      name: t('blockchain.bsc'),
      icon: '/images/blockchains/bsc.png',
      contract: CONTRACTS.BSC,
      explorerLink: EXPLORER_LINKS.BSC,
      dexLink: DEX_LINKS.PANCAKESWAP,
      dexName: 'PancakeSwap',
      status: BLOCKCHAIN_STATUS.BSC,
    },
    {
      id: 'solana',
      name: t('blockchain.solana'),
      icon: '/images/blockchains/solana.jpg',
      contract: CONTRACTS.SOLANA,
      explorerLink: EXPLORER_LINKS.SOLANA,
      dexLink: DEX_LINKS.RAYDIUM,
      dexName: 'Raydium',
      status: BLOCKCHAIN_STATUS.SOLANA,
    },
    {
      id: 'ethereum',
      name: t('blockchain.ethereum'),
      icon: '/images/blockchains/ethereum.png',
      contract: CONTRACTS.ETHEREUM,
      explorerLink: EXPLORER_LINKS.ETHEREUM,
      dexLink: DEX_LINKS.UNISWAP,
      dexName: 'Uniswap',
      status: BLOCKCHAIN_STATUS.ETHEREUM,
    }
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedContract(id);
    setTimeout(() => setCopiedContract(null), 2000);
  };

  const truncateAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };

  return (
    <section id="blockchains" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-bitcoin-orange/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multi-Blockchain <span className="text-bitcoin-orange">ATHB</span>
            </h2>
            <p className="text-lg text-white/80">
              {TOTAL_SUPPLY} ATHB tokens - Supply distribuido en múltiples redes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blockchains.map((blockchain, index) => (
              <motion.div
                key={blockchain.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-lg p-6 relative overflow-hidden"
              >
                {/* Status badge */}
                <div className={`absolute top-4 right-4 px-2 py-1 rounded-md text-xs font-bold ${
                  blockchain.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {blockchain.status === 'active' 
                    ? t('blockchain.status.active') 
                    : t('blockchain.status.coming_soon')}
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 bg-blue-800/50 rounded-full flex items-center justify-center">
                    {blockchain.icon ? (
                      <img src={blockchain.icon} alt={blockchain.name} className="w-6 h-6" />
                    ) : (
                      <div className="w-6 h-6 bg-blue-700 rounded-full"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{blockchain.name}</h3>
                </div>

                {blockchain.status === 'active' ? (
                  <>
                    <div className="mb-4">
                      <p className="text-sm text-white/70 mb-1">{t('blockchain.contract')}:</p>
                      <div className="flex items-center bg-blue-950/50 p-2 rounded-lg">
                        <p className="text-xs md:text-sm text-white/90 truncate flex-1">
                          {truncateAddress(blockchain.contract)}
                        </p>
                        <button 
                          onClick={() => copyToClipboard(blockchain.contract, blockchain.id)}
                          className="ml-2 text-white/70 hover:text-white transition-colors"
                          aria-label="Copy contract address"
                        >
                          {copiedContract === blockchain.id ? (
                            <CheckCircle size={18} weight="fill" className="text-green-500" />
                          ) : (
                            <Copy size={18} />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {blockchain.explorerLink && (
                        <a 
                          href={blockchain.explorerLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 bg-blue-800/30 hover:bg-blue-800/50 text-white/90 text-sm py-2 px-3 rounded-lg transition-colors"
                        >
                          {t('blockchain.view')} <ArrowSquareOut size={14} className="ml-1" />
                        </a>
                      )}
                      
                      {blockchain.dexLink && (
                        <a 
                          href={blockchain.dexLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 bg-bitcoin-orange text-blue-950 text-sm font-medium py-2 px-3 rounded-lg hover:bg-amber-500 transition-colors"
                        >
                          {t('blockchain.buy')} {blockchain.dexName}
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="py-6 text-center">
                    <p className="text-white/70 mb-2">
                      {t('blockchain.status.coming_soon')}
                    </p>
                    <p className="text-xs text-white/50">
                      Las actualizaciones se anunciarán en nuestros canales oficiales
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlockchainSupport;