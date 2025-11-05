'use client';

import { useState, useEffect, useRef } from 'react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance only on hover
  const startAutoAdvance = () => {
    if (images.length <= 1) return;
    
    // Immediately go to next slide to show it's a carousel
    nextSlide();
    
    // Then continue with auto-advance
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 2000);
  };

  const stopAutoAdvance = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stopAutoAdvance();
    };
  }, []);

  if (images.length === 0) return null;

  return (
    <div 
      className="carousel-container"
      onMouseEnter={startAutoAdvance}
      onMouseLeave={stopAutoAdvance}
    >
      <div className="carousel-track">
        {images.map((img, idx) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={idx}
            src={img}
            alt={`${alt} ${idx + 1}`}
            className={`carousel-slide ${idx === currentSlide ? 'active' : ''}`}
            loading={idx === 0 ? 'eager' : 'lazy'}
            width={600}
            height={400}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            className="carousel-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="carousel-next"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next"
          >
            ›
          </button>

          {/* Dots */}
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

