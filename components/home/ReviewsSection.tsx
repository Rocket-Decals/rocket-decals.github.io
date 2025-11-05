'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { reviews } from '@/data/reviews';
import ReviewCard from '@/components/reviews/ReviewCard';

export default function ReviewsSection() {
  const { t } = useLanguage();

  // Duplicate reviews for infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div id="reviews-container" className="reviews-container">
      <h2
        className="lang featured-title reviews-title"


      >
        {t('reviews.title')}
      </h2>

      <div className="reviews-scroll-container">
        <div className="reviews-track">
          <div className="reviews-grid">
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} index={index} />
            ))}
          </div>
          <div className="reviews-grid">
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={`${review.id}-dup-${index}`} review={review} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

