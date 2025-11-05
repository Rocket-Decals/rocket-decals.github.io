'use client';

import { Review } from '@/types';
import { generateAvatarColor, parseMarkdownLinks } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export default function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  const { language } = useLanguage();
  const avatarColor = generateAvatarColor(review.user.name);
  const text = parseMarkdownLinks(review.text[language] || review.text.fr);

  return (
    <div
      className="review-card"



    >
      <div className="review-header">
        <div className="review-avatar">
          <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill={avatarColor} />
            <text
              x="24"
              y="32"
              fontFamily="Arial, sans-serif"
              fontSize="20"
              fontWeight="bold"
              textAnchor="middle"
              fill="white"
            >
              {review.user.firstLetter.toUpperCase()}
            </text>
          </svg>
        </div>
        <div className="review-user-info">
          <div className="review-username">{review.user.name}</div>
        </div>
      </div>
      <div
        className="review-text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}

