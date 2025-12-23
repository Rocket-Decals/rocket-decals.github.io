'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';
import { getCurrentEvent } from '@/data/events';
import { teamsCreators } from '@/data/teams-creators';
import { isVideo, scrollToElement } from '@/lib/utils';

export default function HeroSection() {
  const { t, language } = useLanguage();
  const [currentMedia, setCurrentMedia] = useState<string>('');
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const heroBgRef = useRef<HTMLDivElement>(null);

  // Get the latest 4 new decals
  const newDecals = teamsCreators.filter(decal => decal.new).slice(0, 4);

  useEffect(() => {
    // Get current event and set background
    const event = getCurrentEvent();
    if (event) {
      setCurrentMedia(event.backgroundVideo);
    }
  }, []);

  useEffect(() => {
    if (!currentMedia || !heroBgRef.current) return;

    const heroBg = heroBgRef.current;
    
    if (isVideo(currentMedia)) {
      // Clear for video
      heroBg.innerHTML = '';
      heroBg.style.backgroundImage = '';
      
      const video = document.createElement('video');
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = 'auto';
      video.src = currentMedia;
      heroBg.appendChild(video);
      video.play().catch(() => {});
      setIsImageLoaded(true);
    } else {
      setIsImageLoaded(true);
    }
  }, [currentMedia]);

  return (
    <div id="video-container" className="video-container hero-enhanced">
      <div id="heroBg" className="hero-bg" ref={heroBgRef}>
        {currentMedia && !isVideo(currentMedia) && (
          <Image
            src={currentMedia}
            alt="Hero background"
            fill
            priority
            quality={85}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            onLoadingComplete={() => setIsImageLoaded(true)}
          />
        )}
      </div>
      
      <div className="video-text-container">
        <div className="text-content">
          <h1 className="hero-title-simple">{t('hero.title')}</h1>
          <h2 className="hero-subtitle-simple">{t('hero.subtitle')}</h2>
          <div className="hero-cta-buttons">
            <a 
              href="#models-root" 
              onClick={(e) => { e.preventDefault(); scrollToElement('models-root'); }}
            >
              <button className="discover-button">
                {t('hero.cta.discover')}
              </button>
            </a>
            <a href="https://discord.gg/hzwB24PfaG" target="_blank" rel="noopener noreferrer">
              <button className="discover-button">
                {t('hero.cta.order')}
              </button>
            </a>
          </div>
          <a href="https://rocket-decals.com/game" target="_blank" rel="noopener noreferrer" className="hero-mini-game-link">
            <button className="discover-button hero-mini-game-button">
              {t('hero.cta.playMiniGame')}
            </button>
          </a>
        </div>
      </div>

      {/* New decals minimal showcase */}
      {newDecals.length > 0 && (
        <div className="hero-new-decals-minimal">
          <p className="hero-new-label">{t('hero.latestAdditions')}</p>
          <div className="hero-new-list">
            {newDecals.map((decal, index) => (
              <a
                key={decal.id}
                href={`#${decal.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(decal.id);
                }}
                className="hero-new-item"
              >
                <span className={`hero-new-name ${decal.titleClass || ''}`}>
                  {decal.title[language]}
                </span>
                {index < newDecals.length - 1 && <span className="hero-new-separator">•</span>}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Scroll arrow */}
      <a 
        href="#models-root" 
        onClick={(e) => { e.preventDefault(); scrollToElement('models-root'); }}
        aria-label="Scroll down to decals section"
        title="Scroll down to decals section"
      >
        <div className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)' }}>
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
          </svg>
        </div>
      </a>
    </div>
  );
}

