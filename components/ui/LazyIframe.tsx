'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyIframeProps {
  src: string;
  title: string;
  allow?: string;
  frameBorder?: string | number;
  allowFullScreen?: boolean;
  className?: string;
}

export default function LazyIframe({
  src,
  title,
  allow,
  frameBorder = '0',
  allowFullScreen = true,
  className,
}: LazyIframeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before the iframe is visible
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={iframeRef} className={className} style={{ width: '100%', height: '100%' }}>
      {isVisible ? (
        <iframe
          src={src}
          title={title}
          frameBorder={frameBorder}
          allowFullScreen={allowFullScreen}
          allow={allow}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888',
            fontSize: '14px',
          }}
        >
          Loading 3D model...
        </div>
      )}
    </div>
  );
}

