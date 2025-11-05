'use client';

import { useEffect } from 'react';
import { EasterEggCard as EasterEggCardType } from '@/types';
import EasterEggCard from './EasterEggCard';

interface EasterEggOverlayProps {
  card: EasterEggCardType;
  isOpen: boolean;
  onClose: () => void;
}

const cardColors: Record<string, any> = {
  'rocket-decals': {
    primary: '#eaeaea',
    secondary: '#ffffff',
    border: '#eaeaea',
    text: '#181818',
  },
  'raito': {
    primary: '#8e2f11',
    secondary: '#b8543a',
    border: '#8e2f11',
    text: '#ffffff',
  },
  'erlow': {
    primary: '#4579e7',
    secondary: '#6b9eff',
    border: '#4579e7',
    text: '#ffffff',
  },
  'saaxqi': {
    primary: '#9000ff',
    secondary: '#b200ff',
    border: '#9000ff',
    text: '#ffffff',
  },
  'nhs': {
    primary: '#ad295d',
    secondary: '#ad295d',
    border: '#ad295d',
    text: '#ffffff',
  },
  'pxr': {
    primary: '#fb1440',
    secondary: '#fb1440',
    border: '#fb1440',
    text: '#ffffff',
  },
  'poyos': {
    primary: '#DFA86F',
    secondary: '#DFA86F',
    border: '#DFA86F',
    text: '#ffffff',
  },
  'nexta': {
    primary: '#4ecdc4',
    secondary: '#4ecdc4',
    border: '#4ecdc4',
    text: '#ffffff',
  },
  'wazakiss': {
    primary: '#e74c3c',
    secondary: '#e74c3c',
    border: '#e74c3c',
    text: '#ffffff',
  },
  'spirit': {
    primary: '#3498db',
    secondary: '#3498db',
    border: '#3498db',
    text: '#ffffff',
  },
};

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

  const colors = cardColors[card.id] || {
    primary: '#888',
    secondary: '#888',
    border: '#888',
    text: '#fff',
  };

  return (
    <div 
      className="easter-egg-overlay show"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <EasterEggCard card={card} onClose={onClose} colors={colors} />
    </div>
  );
}

