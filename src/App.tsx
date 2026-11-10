import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BrandPanelsSection } from './components/BrandPanelsSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    Array.from(document.images).forEach((img) => {
      if (typeof img.decode === 'function') {
        img.decode().catch(() => {});
      }
    });
  }, []);

  return (
    <div className="site-wrapper">
      <main id="main-content">
        <Hero />
        <AboutSection />
        <BrandPanelsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
