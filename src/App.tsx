import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BrandPanelsSection } from './components/BrandPanelsSection';
import { Footer } from './components/Footer';
import { AdminLoginPage } from './components/AdminLoginPage';

const checkIsAdminRoute = () => {
  if (typeof window === 'undefined') return false;
  return (
    window.location.hash === '#admin-login' ||
    window.location.hash === '#admin' ||
    window.location.pathname === '/admin' ||
    window.location.pathname === '/login'
  );
};

export const App: React.FC = () => {
  const [isAdminView, setIsAdminView] = useState<boolean>(checkIsAdminRoute);

  useEffect(() => {
    Array.from(document.images).forEach((img) => {
      if (typeof img.decode === 'function') {
        img.decode().catch(() => {});
      }
    });
  }, []);

  useEffect(() => {
    const syncRoute = () => {
      setIsAdminView(checkIsAdminRoute());
    };
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  const openAdminLogin = () => {
    window.location.hash = 'admin-login';
    setIsAdminView(true);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const closeAdminLogin = () => {
    if (
      window.location.hash === '#admin-login' ||
      window.location.hash === '#admin'
    ) {
      window.history.pushState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }
    setIsAdminView(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  if (isAdminView) {
    return <AdminLoginPage onBackHome={closeAdminLogin} />;
  }

  return (
    <div className="site-wrapper">
      <main id="main-content">
        <Hero />
        <AboutSection />
        <BrandPanelsSection />
      </main>
      <Footer onOpenAdminLogin={openAdminLogin} />
    </div>
  );
};

export default App;
