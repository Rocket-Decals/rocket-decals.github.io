'use client';

import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { getCurrentEvent } from '@/data/events';
import { isVideo, scrollToElement } from '@/lib/utils';

export default function HeroSection() {
  const { t } = useLanguage();
  const [currentMedia, setCurrentMedia] = useState<string>('');
  const heroBgRef = useRef<HTMLDivElement>(null);

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
    
    // Clear existing content
    heroBg.innerHTML = '';
    heroBg.style.backgroundImage = '';

    if (isVideo(currentMedia)) {
      const video = document.createElement('video');
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = 'auto'; // Changed from 'metadata' to 'auto' for faster loading
      video.src = currentMedia;
      heroBg.appendChild(video);
      video.play().catch(() => {});
    } else {
      heroBg.style.backgroundImage = `url('${currentMedia}')`;
    }
  }, [currentMedia]);

  return (
    <div id="video-container" className="video-container">
      <div id="heroBg" className="hero-bg" ref={heroBgRef} />
      
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

      <div className="video-text-container">
        <div className="text-content">
          <h1>{t('hero.title')}</h1>
          <h1>{t('hero.subtitle')}</h1>
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
        </div>
      </div>
    </div>
  );
}

