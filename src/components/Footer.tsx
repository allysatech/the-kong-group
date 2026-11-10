import React from 'react';
import { BRANDS, SOCIAL_LINKS } from '../data/brands';

interface FooterProps {
  onOpenAdminLogin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdminLogin }) => {
  const currentYear = new Date().getFullYear();

  const handleAdminClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onOpenAdminLogin) {
      event.preventDefault();
      onOpenAdminLogin();
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <p className="site-footer__eyebrow">STAY IN GOOD COMPANY.</p>
            <h2 className="site-footer__statement">See you at the table.</h2>
            <div className="site-footer__brand-block site-footer__brand-block--desktop">
              <img
                src="/assets/logo/the-kong-group-logo-white.png"
                width={807}
                height={487}
                alt="The Kong Group"
                className="site-footer__logo"
                decoding="async"
                draggable={false}
              />
              <p className="site-footer__tagline">
                Lifestyle. Food. Beverage. Malaysia.
              </p>
            </div>
          </div>

          <div className="site-footer__columns">
            <nav
              className="site-footer__col site-footer__col--explore"
              aria-label="Footer explore navigation"
            >
              <h3 className="site-footer__col-title">EXPLORE</h3>
              <ul className="site-footer__list">
                <li>
                  <a href="#home" className="site-footer__link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="site-footer__link">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#brands" className="site-footer__link">
                    Our platforms
                  </a>
                </li>
              </ul>
            </nav>

            <nav
              className="site-footer__col site-footer__col--brands"
              aria-label="Footer brands navigation"
            >
              <h3 className="site-footer__col-title">OUR BRANDS</h3>
              <ul className="site-footer__list">
                {BRANDS.map((brand) => (
                  <li key={brand.id}>
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-footer__link"
                    >
                      {brand.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="site-footer__col site-footer__col--connect">
              <h3 className="site-footer__col-title">CONNECT</h3>
              <ul className="site-footer__list">
                <li>
                  <a
                    href={SOCIAL_LINKS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__link"
                  >
                    <span>Instagram</span>{' '}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__handle"
                  >
                    {SOCIAL_LINKS.instagramHandle}
                  </a>
                </li>
                <li className="site-footer__admin-item">
                  <a
                    href="#admin-login"
                    onClick={handleAdminClick}
                    className="site-footer__admin-btn"
                  >
                    <span
                      className="site-footer__admin-dot"
                      aria-hidden="true"
                    />
                    <span>ADMIN LOGIN</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__divider" aria-hidden="true" />

        <div className="site-footer__bottom">
          <div className="site-footer__bottom-brand-mobile">
            <img
              src="/assets/logo/the-kong-group-logo-white.png"
              width={807}
              height={487}
              alt="The Kong Group"
              className="site-footer__logo site-footer__logo--mobile"
              decoding="async"
              draggable={false}
            />
            <p className="site-footer__tagline">
              Lifestyle. Food. Beverage. Malaysia.
            </p>
          </div>
          <p className="site-footer__copyright">
            © {currentYear} The Kong Group. All rights reserved.
          </p>
          <div className="site-footer__bottom-actions">
            <a
              href="#admin-login"
              onClick={handleAdminClick}
              className="site-footer__admin-bottom-link"
            >
              <span>ADMIN LOGIN</span>
            </a>
            <a href="#home" className="site-footer__back-to-top">
              <span>BACK TO TOP</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
