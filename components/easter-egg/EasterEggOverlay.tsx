'use client';

import { useEffect } from 'react';
import { EasterEggCard as EasterEggCardType } from '@/types';
import EasterEggCard from './EasterEggCard';

interface EasterEggOverlayProps {
  card: EasterEggCardType;
  isOpen: boolean;
  onClose: () => void;
}

export default function EasterEggOverlay({ card, isOpen, onClose }: EasterEggOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('easter-egg-open');
    } else {
      document.body.classList.remove('easter-egg-open');
    }

    return () => {
      document.body.classList.remove('easter-egg-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="easter-egg-overlay show"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <EasterEggCard card={card} onClose={onClose} />
    </div>
  );
}

