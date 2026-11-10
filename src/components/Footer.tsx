import React from 'react';
import { BRANDS, SOCIAL_LINKS } from '../data/brands';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <p className="site-footer__eyebrow">STAY IN GOOD COMPANY.</p>
            <h2 className="site-footer__statement">See you at the table.</h2>
            <div className="site-footer__brand-block site-footer__brand-block--desktop">
              <p className="site-footer__wordmark">THE KONG GROUP</p>
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
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__divider" aria-hidden="true" />

        <div className="site-footer__bottom">
          <div className="site-footer__bottom-brand-mobile">
            <p className="site-footer__wordmark">THE KONG GROUP</p>
            <p className="site-footer__tagline">
              Lifestyle. Food. Beverage. Malaysia.
            </p>
          </div>
          <p className="site-footer__copyright">
            © {currentYear} The Kong Group. All rights reserved.
          </p>
          <a href="#home" className="site-footer__back-to-top">
            <span>BACK TO TOP</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
