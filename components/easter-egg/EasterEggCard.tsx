'use client';

import { useEffect, useState, useRef } from 'react';
import { EasterEggCard as EasterEggCardType } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

interface EasterEggCardProps {
  card: EasterEggCardType;
  onClose: () => void;
  colors: {
    primary: string;
    secondary: string;
    border: string;
    text: string;
  };
}

// Rarity labels matching original config
const rarityLabels: Record<string, { fr: string; en: string }> = {
  'rocket-decals': { fr: 'Rocket Decals', en: 'Rocket Decals' },
  'raito': { fr: 'FONDATEUR', en: 'FOUNDER' },
  'erlow': { fr: 'FONDATEUR', en: 'FOUNDER' },
  'saaxqi': { fr: 'CRÉATEUR DE CONTENU', en: 'CONTENT CREATOR' },
  'pxr': { fr: 'ÉQUIPE', en: 'TEAM' },
  'nhs': { fr: 'CRÉATEUR DE CONTENU', en: 'CONTENT CREATOR' },
  'poyos': { fr: 'CRÉATEUR DE CONTENU', en: 'CONTENT CREATOR' },
};

export default function EasterEggCard({ card, onClose, colors }: EasterEggCardProps) {
  const { language } = useLanguage();
  const [showBooster, setShowBooster] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Get the correct rarity label for this card
  const rarityLabel = rarityLabels[card.id] || { 
    fr: card.rarity.toUpperCase(), 
    en: card.rarity.toUpperCase() 
  };

  useEffect(() => {
    // Animation sequence
    // 1. Show booster pack for 500ms
    const boosterTimeout = setTimeout(() => {
      setShowBooster(false);
      
      // 2. Show card with reveal animation after 300ms
      setTimeout(() => {
        setShowCard(true);
        
        // 3. After 3s, animate card to collection button
        setTimeout(() => {
          animateToCollection();
        }, 3000);
      }, 300);
    }, 500);

    return () => clearTimeout(boosterTimeout);
  }, []);

  const animateToCollection = () => {
    if (!cardRef.current) return;
    
    setIsAnimatingOut(true);
    
    const collectionBtn = document.getElementById('collectionBtn');
    if (!collectionBtn) {
      // If no collection button, just close after animation
      setTimeout(onClose, 1500);
      return;
    }

    const cardRect = cardRef.current.getBoundingClientRect();
    const buttonRect = collectionBtn.getBoundingClientRect();

    const deltaX = buttonRect.left + buttonRect.width / 2 - (cardRect.left + cardRect.width / 2);
    const deltaY = buttonRect.top + buttonRect.height / 2 - (cardRect.top + cardRect.height / 2);

    cardRef.current.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
    cardRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.3)`;
    cardRef.current.style.opacity = '0';

    setTimeout(() => {
      onClose();
      
      // Open collection modal after animation
      setTimeout(() => {
        window.location.hash = 'collection';
      }, 0);
    }, 1500);
  };

  return (
    <div className="booster-container">
      {/* Booster Pack */}
      {showBooster && (
        <div
          className="booster-pack"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            width: '200px',
            height: '280px',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: 'white',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.5s ease',
            opacity: showBooster ? 1 : 0,
            transform: showBooster ? 'scale(1)' : 'scale(0.8)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              backgroundImage: 'url(/img/logo.png)',
              backgroundSize: '60px 60px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '60px',
              height: '60px',
              animation: 'bounce 2s infinite',
            }}
          />
        </div>
      )}

      {/* Easter Egg Card */}
      {showCard && (
        <div
          ref={cardRef}
          className="easter-card"
          style={{
            position: 'absolute',
            width: '300px',
            height: '420px',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            transition: 'all 0.6s ease',
            opacity: showCard && !isAnimatingOut ? 1 : 0,
            transform: showCard && !isAnimatingOut ? 'scale(1) rotateY(0deg)' : 'scale(0.8) rotateY(180deg)',
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          {/* Front Face */}
          <div
            className="easter-card-front"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
              border: `2px solid ${colors.border}`,
              borderRadius: '20px',
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              overflow: 'hidden',
            }}
          >
            {/* Shine effect */}
            <div
              style={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(45deg, transparent 30%, ${colors.primary}20 50%, transparent 70%)`,
                animation: 'shine 3s infinite',
              }}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.image}
              alt={card.name[language]}
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'contain',
                borderRadius: '12px',
                marginBottom: '20px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                zIndex: 1,
              }}
            />

            <div
              style={{
                fontSize: '24px',
                fontWeight: 500,
                color: '#ffffff',
                textAlign: 'center',
                marginBottom: '10px',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                lineHeight: 1.3,
                zIndex: 1,
              }}
            >
              {card.name[language]}
            </div>

            <div
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: '#cccccc',
                textAlign: 'center',
                marginBottom: '15px',
                lineHeight: 1.4,
                zIndex: 1,
              }}
            >
              {language === 'fr' ? 'Carte Secrète' : 'Secret Card'}
            </div>

            <div
              style={{
                background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
                color: colors.text,
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: `0 4px 8px ${colors.primary}50`,
                lineHeight: 1.2,
                zIndex: 1,
              }}
            >
              {rarityLabel[language]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

