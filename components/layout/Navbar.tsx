'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { scrollToElement } from '@/lib/utils';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [showCollection, setShowCollection] = useState(false);

  // Check if easter egg collection should be shown
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkCollection = () => {
        try {
          const collectionStr = localStorage.getItem('easterEggCollection');
          if (collectionStr) {
            const collection = JSON.parse(collectionStr);
            setShowCollection(collection.length > 0 && window.innerWidth >= 768);
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

  const handleLanguageToggle = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Clean URL hash
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <>
      <div className="navbar-bg" />
      <nav className="navbar">
        <a href="#" onClick={handleLogoClick} className="logo-container">
          <div className="logo">
            <div className="branding">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                id="brand-logo"
                src="/img/logo.png"
                alt="Logo"
                width={75}
                height={75}
                className="brand-logo"
                title="The quietest doors require two knocks."
              />
              <div className="branding-text">
                <p>Rocket Decals</p>
                <p className="small-credits">{t('footer.credits')}</p>
              </div>
            </div>
          </div>
        </a>

        <div className="menu">
          <ul>
            {/* Dropdown Stickers */}
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
                    onClick={(e) => { e.preventDefault(); scrollToElement('title-3d'); }}
                  >
                    {t('decals.teams')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#title-images"
                    onClick={(e) => { e.preventDefault(); scrollToElement('title-images'); }}
                  >
                    {t('decals.clients')}
                  </a>
                </li>
              </ul>
            </li>

            {/* Menu Items */}
            <li>
              <a
                href="#promo-video-container"
                className="nav-items"
                onClick={(e) => { e.preventDefault(); scrollToElement('promo-video-container'); }}
              >
                {t('nav.discover')}
              </a>
            </li>
            <li>
              <a
                href="#reviews-container"
                className="nav-items"
                onClick={(e) => { e.preventDefault(); scrollToElement('reviews-container'); }}
              >
                {t('nav.reviews')}
              </a>
            </li>
            <li>
              <a
                href="#tuto-container"
                className="nav-items"
                onClick={(e) => { e.preventDefault(); scrollToElement('tuto-container'); }}
              >
                {t('nav.tutorial')}
              </a>
            </li>
            <li>
              <a
                href="#contact-container"
                className="nav-items"
                onClick={(e) => { e.preventDefault(); scrollToElement('contact-container'); }}
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
                  onClick={() => window.location.hash = 'collection'}
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

