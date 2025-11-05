'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsVisible } from '@/hooks/useIntersectionObserver';

export default function PromoVideoSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(containerRef, 0.5);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isVisible) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay prevented:', err);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isVisible]);

  return (
    <div id="promo-video-container" className="promo-video-section">
      <h2


        className="featured-title"
      >
        {t('tutorial.title')}
      </h2>
      <div


        className="promo-video-wrapper"
        ref={containerRef}
      >
        <video
          ref={videoRef}
          controls
          loop
          muted
          preload="none"
          playsInline
          className="promo-video"
          id="promoVideo"
        >
          <source src="/video/pub-rocket-decals.mp4" type="video/mp4" />
          {t('common.videoNotSupported')}
        </video>
      </div>
    </div>
  );
}

