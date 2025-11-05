'use client';

import { useState } from 'react';
import { EasterEggCard } from '@/types';
import { Language } from '@/types';

interface CollectionCardProps {
  card: EasterEggCard;
  discovered: boolean;
  language: Language;
}

// Card colors matching original config
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
  'pxr': {
    primary: '#fb1440',
    secondary: '#fb1440',
    border: '#fb1440',
    text: '#ffffff',
  },
  'nhs': {
    primary: '#ad295d',
    secondary: '#ad295d',
    border: '#ad295d',
    text: '#ffffff',
  },
  'poyos': {
    primary: '#DFA86F',
    secondary: '#DFA86F',
    border: '#DFA86F',
    text: '#ffffff',
  },
};

const rarityLabels: Record<string, { fr: string; en: string }> = {
  'rocket-decals': { fr: 'Rocket Decals', en: 'Rocket Decals' },
  'raito': { fr: 'FONDATEUR', en: 'FOUNDER' },
  'erlow': { fr: 'FONDATEUR', en: 'FOUNDER' },
  'saaxqi': { fr: 'CRÉATEUR DE CONTENU', en: 'CONTENT CREATOR' },
  'pxr': { fr: 'ÉQUIPE', en: 'TEAM' },
  'nhs': { fr: 'CRÉATEUR DE CONTENU', en: 'CONTENT CREATOR' },
  'poyos': { fr: 'CRÉATEUR DE CONTENU', en: 'CONTENT CREATOR' },
};

export default function CollectionCard({ card, discovered, language }: CollectionCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const colors = cardColors[card.id] || {
    primary: '#888',
    secondary: '#888',
    border: '#888',
    text: '#fff',
  };

  const rarity = rarityLabels[card.id] || { fr: card.rarity.toUpperCase(), en: card.rarity.toUpperCase() };

  const handleClick = () => {
    if (discovered) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={`collection-card ${card.id}-collection-card ${discovered ? 'discovered' : 'not-discovered'} ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
      style={{
        width: '200px',
        height: '280px',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transition: 'all 0.3s ease',
        cursor: discovered ? 'pointer' : 'not-allowed',
        position: 'relative',
        opacity: discovered ? 1 : 0.3,
        filter: discovered ? 'none' : 'grayscale(100%)',
        transform: isFlipped ? 'scale(1.05) rotateY(180deg)' : 'scale(1)',
      }}
    >
      {/* Front Face */}
      <div
        className="collection-card-front"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
          border: `2px solid ${colors.border}`,
          borderRadius: '16px',
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '15px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={discovered ? card.image : '/img/logo.webp'}
          alt={discovered ? card.name[language] : '???'}
          className="collection-card-image"
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'contain',
            borderRadius: '8px',
            marginBottom: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        />
        
        <div
          className="collection-card-title"
          style={{
            fontSize: '16px',
            fontWeight: 500,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '8px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            lineHeight: 1.3,
          }}
        >
          {discovered ? card.name[language] : '???'}
        </div>
        
        <div
          className="collection-card-subtitle"
          style={{
            fontSize: '12px',
            fontWeight: 400,
            color: '#cccccc',
            textAlign: 'center',
            marginBottom: '10px',
            lineHeight: 1.4,
          }}
        >
          {discovered ? (language === 'fr' ? 'Carte Secrète' : 'Secret Card') : '???'}
        </div>
        
        <div
          className="collection-card-rarity"
          style={{
            background: discovered ? `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})` : '#555',
            color: discovered ? colors.text : '#aaa',
            padding: '6px 12px',
            borderRadius: '15px',
            fontSize: '10px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: discovered ? `0 2px 4px ${colors.primary}50` : 'none',
            lineHeight: 1.2,
          }}
        >
          {discovered ? rarity[language] : '???'}
        </div>
      </div>

      {/* Back Face */}
      <div
        className="collection-card-back"
        style={{
          background: discovered ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` : '#2a2a2a',
          border: `2px solid ${colors.border}`,
          borderRadius: '16px',
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '15px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
        }}
      >
        <div
          className="collection-card-back-logo"
          style={{
            width: '60px',
            height: '60px',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            border: `2px solid ${colors.border}`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.webp"
            alt="Rocket Decals Logo"
            className="collection-back-logo"
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'contain',
              filter: 'brightness(1.2)',
            }}
          />
        </div>
        
        <div
          className="collection-card-back-title"
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
            marginBottom: '8px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {discovered ? (card.name[language]).toUpperCase() : '???'}
        </div>
      </div>
    </div>
  );
}

