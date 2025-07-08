import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Community from './components/Community';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { LanguageProvider } from './i18n/LanguageContext';
import BlockchainSupport from './components/BlockchainSupport';
import BitcoinMilestones from './components/BitcoinMilestones';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <LanguageProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white overflow-x-hidden">
          <Navbar />
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            <Hero />
            <About />
            <BlockchainSupport />
            <Tokenomics />
            <BitcoinMilestones />
            <Community />
            <Roadmap />
            <Footer />
          </motion.div>
        </div>
      </ErrorBoundary>
    </LanguageProvider>
  );
}

export default App;
