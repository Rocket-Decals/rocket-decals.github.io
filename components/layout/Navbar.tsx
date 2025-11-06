'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { scrollToElement } from '@/lib/utils';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [showCollection, setShowCollection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Check if easter egg collection should be shown
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkCollection = () => {
        try {
          const collectionStr = localStorage.getItem('easterEggCollection');
          if (collectionStr) {
            const collection = JSON.parse(collectionStr);
            setShowCollection(collection.length > 0 && window.innerWidth >= 1024);
          }
        } catch (e) {
          setShowCollection(false);
        }
      };

      checkCollection();
      
      // Listen for storage changes
      window.addEventListener('storage', checkCollection);
      
      // Check periodically
      const interval = setInterval(checkCollection, 1000);
      
      return () => {
        window.removeEventListener('storage', checkCollection);
        clearInterval(interval);
      };
    }
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLanguageToggle = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Clean URL hash
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleMenuItemClick = (elementId: string) => {
    setMobileMenuOpen(false);
    scrollToElement(elementId);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="navbar-bg" />
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <nav className="navbar">
        <a href="#" onClick={handleLogoClick} className="logo-container">
          <div className="logo">
            <div className="branding">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                id="brand-logo"
                src="/img/logo.svg"
                alt="Logo"
                width={75}
                height={75}
                className="brand-logo"
                title="The quietest doors require two knocks."
                fetchPriority="high"
              />
              <div className="branding-text">
                <p>Rocket Decals</p>
                <p className="small-credits">{t('footer.credits')}</p>
              </div>
            </div>
          </div>
        </a>

        {/* Burger Menu Button */}
        <button 
          className={`burger-menu ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            {/* Stickers - Dropdown on desktop, direct link on mobile */}
            {isMobile ? (
              <li>
                <a
                  href="#title-3d"
                  className="nav-items"
                  onClick={(e) => { e.preventDefault(); handleMenuItemClick('title-3d'); }}
                >
                  {t('nav.stickers')}
                </a>
              </li>
            ) : (
              <li className="dropdown nav-items">
                <a className="stickers-menu-title">
                  <p>
                    <span>{t('nav.stickers')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)' }}>
                      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                    </svg>
                  </p>
                </a>
                <ul className="dropdown-content">
                  <li>
                    <a 
                      href="#title-3d"
                      onClick={(e) => { e.preventDefault(); handleMenuItemClick('title-3d'); }}
                    >
                      {t('decals.teams')}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#title-images"
                      onClick={(e) => { e.preventDefault(); handleMenuItemClick('title-images'); }}
                    >
                      {t('decals.clients')}
                    </a>
                  </li>
                </ul>
              </li>
            )}

            {/* Menu Items */}
            <li>
              <a
                href="#promo-video-container"
                className="nav-items"
                onClick={(e) => { e.preventDefault(); handleMenuItemClick('promo-video-container'); }}
              >
                {t('nav.discover')}
              </a>
            </li>
            <li>
              <a
                href="#reviews-container"
                className="nav-items"
                onClick={(e) => { e.preventDefault(); handleMenuItemClick('reviews-container'); }}
              >
                {t('nav.reviews')}
              </a>
            </li>
            <li>
              <a
                href="#tuto-container"
                className="nav-items"
                onClick={(e) => { e.preventDefault(); handleMenuItemClick('tuto-container'); }}
              >
                {t('nav.tutorial')}
              </a>
            </li>
            <li>
              <a
                href="#contact-container"
                className="nav-items"
                onClick={(e) => { e.preventDefault(); handleMenuItemClick('contact-container'); }}
              >
                {t('nav.contact')}
              </a>
            </li>

            {/* Collection Button (Easter Egg) */}
            {showCollection && (
              <li>
                <button
                  id="collectionBtn"
                  className="collection-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.hash = 'collection';
                  }}
                >
                  🃏
                </button>
              </li>
            )}

            {/* Language Toggle */}
            <li>
              <button
                id="toggleLangBtn"
                className="toggle-lang-btn"
                onClick={handleLanguageToggle}
              >
                {language === 'fr' ? 'EN' : 'FR'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

