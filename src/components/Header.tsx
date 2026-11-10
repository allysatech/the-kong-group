import React, { useEffect, useRef, useState } from 'react';
import { NAV_ITEMS } from '../data/brands';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = (returnFocus = false) => {
    setMenuOpen(false);
    if (returnFocus) {
      requestAnimationFrame(() => {
        menuButtonRef.current?.focus();
      });
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const timer = requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

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
      cancelAnimationFrame(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDownOutside);
      document.removeEventListener('touchstart', handlePointerDownOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <a
          href="#home"
          className="site-header__brand"
          aria-label="THE KONG GROUP Malaysia — Return to home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="site-header__wordmark">THE KONG GROUP</span>
          <span className="site-header__sublabel">MALAYSIA</span>
        </a>

        <nav className="site-header__nav-desktop" aria-label="Primary navigation">
          <ul className="site-header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="site-header__nav-item">
                <a
                  href={item.href}
                  className={
                    item.variant === 'primary'
                      ? 'site-header__pill site-header__pill--primary'
                      : 'site-header__pill'
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__mobile-controls">
          <button
            ref={menuButtonRef}
            type="button"
            className="site-header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMenu}
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>

          <div
            id="mobile-navigation-menu"
            ref={menuPanelRef}
            className={`site-header__mobile-menu ${
              menuOpen ? 'site-header__mobile-menu--open' : ''
            }`}
            hidden={!menuOpen}
          >
            <nav aria-label="Mobile navigation">
              <ul className="site-header__mobile-list">
                {NAV_ITEMS.map((item, idx) => (
                  <li key={item.label} className="site-header__mobile-item">
                    <a
                      ref={idx === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      className={
                        item.variant === 'primary'
                          ? 'site-header__mobile-link site-header__mobile-link--primary'
                          : 'site-header__mobile-link'
                      }
                      onClick={() => closeMenu(false)}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
