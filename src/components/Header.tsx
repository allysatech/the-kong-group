import React, { useEffect, useRef, useState } from 'react';
import { BRANDS, NAV_ITEMS } from '../data/brands';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openedViaKeyboard, setOpenedViaKeyboard] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const regularLinks = NAV_ITEMS.filter((item) => item.variant !== 'primary');
  const primaryCta = NAV_ITEMS.find((item) => item.variant === 'primary');

  const closeMenu = (returnFocus = false) => {
    setMenuOpen(false);
    setOpenedViaKeyboard(false);
    if (returnFocus) {
      requestAnimationFrame(() => {
        menuButtonRef.current?.focus();
      });
    }
  };

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    const isKeyboard = event.detail === 0;
    setOpenedViaKeyboard(isKeyboard);
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const timer = openedViaKeyboard
      ? requestAnimationFrame(() => {
          firstLinkRef.current?.focus();
        })
      : 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key === 'Tab' && menuPanelRef.current) {
        const focusable = menuPanelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          menuButtonRef.current?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          menuButtonRef.current?.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === menuButtonRef.current
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const handlePointerDownOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (
        target &&
        !menuPanelRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDownOutside);
    document.addEventListener('touchstart', handlePointerDownOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      if (timer) cancelAnimationFrame(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDownOutside);
      document.removeEventListener('touchstart', handlePointerDownOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`site-header${scrolled ? ' site-header--scrolled' : ''}${
        menuOpen ? ' site-header--menu-open' : ''
      }`}
      role="banner"
    >
      <div className="site-header__inner">
        <a
          href="#home"
          className="site-header__brand"
          aria-label="The Kong Group Malaysia — Return to home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/assets/logo/the-kong-group-logo-white.png"
            width={807}
            height={487}
            alt="The Kong Group"
            className="site-header__logo"
            decoding="sync"
            draggable={false}
          />
        </a>

        <nav className="site-header__nav-desktop" aria-label="Primary navigation">
          <ul className="site-header__nav-list">
            {regularLinks.map((item) => (
              <li key={item.label} className="site-header__nav-item">
                <a href={item.href} className="site-header__nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          {primaryCta && (
            <a
              href={primaryCta.href}
              className="site-header__cta-desktop"
            >
              <span>{primaryCta.label}</span>
              <span aria-hidden="true" className="site-header__cta-arrow">
                ↓
              </span>
            </a>
          )}

          <div className="site-header__mobile-controls">
            <button
              ref={menuButtonRef}
              type="button"
              className={`site-header__burger-btn${
                menuOpen ? ' site-header__burger-btn--open' : ''
              }`}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={toggleMenu}
            >
              <span className="site-header__burger-box" aria-hidden="true">
                <span className="site-header__burger-line" />
                <span className="site-header__burger-line" />
                <span className="site-header__burger-line" />
              </span>
            </button>

            <div
              id="mobile-navigation-menu"
              ref={menuPanelRef}
              className={`site-header__mobile-menu${
                menuOpen ? ' site-header__mobile-menu--open' : ''
              }`}
              hidden={!menuOpen}
            >
              <nav aria-label="Mobile navigation">
                <ul className="site-header__mobile-list">
                  {regularLinks.map((item, idx) => (
                    <li key={item.label} className="site-header__mobile-item">
                      <a
                        ref={idx === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        className="site-header__mobile-link"
                        onClick={() => closeMenu(false)}
                      >
                        <span>{item.label}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="site-header__mobile-divider" aria-hidden="true" />

                <p className="site-header__mobile-eyebrow">OUR BRANDS</p>
                <ul className="site-header__mobile-brands">
                  {BRANDS.map((brand) => (
                    <li key={brand.id}>
                      <a
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="site-header__mobile-brand-link"
                        onClick={() => closeMenu(false)}
                      >
                        <span>{brand.name}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>

                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="site-header__mobile-cta"
                    onClick={() => closeMenu(false)}
                  >
                    <span>{primaryCta.label} OUR WORLD</span>
                    <span aria-hidden="true">↓</span>
                  </a>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
