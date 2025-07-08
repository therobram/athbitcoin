import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ScrollContextType {
  scrollPosition: number;
  isScrolled: boolean;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollPosition: 0,
  isScrolled: false,
});

export const useScroll = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
  threshold?: number;
}

export const ScrollProvider = ({ 
  children, 
  threshold = 50 
}: ScrollProviderProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsScrolled(position > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Inicialmente también comprobar la posición por si la página carga con scroll
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return (
    <ScrollContext.Provider value={{ scrollPosition, isScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;