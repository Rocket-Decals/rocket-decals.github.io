'use client';

import { useState, useEffect, useRef } from 'react';

interface ModalCarouselProps {
  images: string[];
  alt: string;
}

export default function ModalCarousel({ images, alt }: ModalCarouselProps) {
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

  // Auto-advance only on hover in modal
  const startAutoAdvance = () => {
    if (images.length <= 1) return;
    
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
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
    <div className="modal-carousel-wrapper">
      <div 
        className="modal-carousel-container"
        onMouseEnter={startAutoAdvance}
        onMouseLeave={stopAutoAdvance}
      >
        {images.map((img, idx) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={idx}
            src={img}
            alt={`${alt} ${idx + 1}`}
            className={`modal-carousel-slide ${idx === currentSlide ? 'active' : ''}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            className="modal-carousel-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="modal-carousel-next"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next"
          >
            ›
          </button>

          {/* Dots */}
          <div className="modal-carousel-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`modal-carousel-dot ${idx === currentSlide ? 'active' : ''}`}
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

