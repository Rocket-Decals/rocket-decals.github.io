'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { easterEggCards, easterEggConfig } from '@/data/easter-eggs';
import { EasterEggCard } from '@/types';
import EasterEggOverlay from '@/components/easter-egg/EasterEggOverlay';

interface EasterEggContextType {
  collection: string[];
  isEnabled: boolean;
  discoverCard: (cardId: string) => boolean;
  isCardDiscovered: (cardId: string) => boolean;
  getProgress: () => {
    discovered: number;
    total: number;
    percentage: number;
    isComplete: boolean;
  };
  resetCollection: () => void;
}

const EasterEggContext = createContext<EasterEggContextType | undefined>(undefined);

export function EasterEggProvider({ children }: { children: React.ReactNode }) {
  const [collection, setCollection] = useLocalStorage<string[]>('easterEggCollection', []);
  const [isEnabled, setIsEnabled] = useState(false);
  const [activeCard, setActiveCard] = useState<EasterEggCard | null>(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsEnabled(window.innerWidth >= easterEggConfig.minScreenWidth);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Setup click listeners for easter eggs (with double-click support)
  useEffect(() => {
    if (!isEnabled) return;

    let clickTimeout: NodeJS.Timeout | null = null;
    let clickCount = 0;
    let lastClickedId: string | null = null;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const clickedElement = target.closest('[id]') as HTMLElement;
      const clickedId = clickedElement?.id;

      if (!clickedId) return;

      // Find card that can be triggered by this element
      const card = easterEggCards.find(c => c.triggeredBy.includes(clickedId));

      if (card) {
        // Check if it's the logo (requires double-click)
        if (clickedId === 'brand-logo') {
          if (lastClickedId === clickedId) {
            clickCount++;
          } else {
            clickCount = 1;
            lastClickedId = clickedId;
          }

          if (clickTimeout) {
            clearTimeout(clickTimeout);
          }

          if (clickCount === 2) {
            // Double-click detected! Prevent default behavior
            event.preventDefault();
            event.stopPropagation();
            
            const isNew = !collection.includes(card.id);
            if (isNew) {
              setActiveCard(card);
              setCollection([...collection, card.id]);
            }
            clickCount = 0;
            lastClickedId = null;
          } else {
            // Wait for second click
            clickTimeout = setTimeout(() => {
              clickCount = 0;
              lastClickedId = null;
            }, 1000);
          }
        } else {
          // Single click for other elements
          const isNew = !collection.includes(card.id);
          
          if (isNew) {
            // Prevent navigation only if discovering the card
            event.preventDefault();
            event.stopPropagation();
            
            setActiveCard(card);
            setCollection([...collection, card.id]);
          }
          // If already discovered, let the normal click behavior happen (link opens)
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      if (clickTimeout) clearTimeout(clickTimeout);
    };
  }, [isEnabled, collection, setCollection]);

  // Define discoverCard callback
  const discoverCard = useCallback((cardId: string) => {
    if (!collection.includes(cardId)) {
      setCollection([...collection, cardId]);
      return true; // Card was newly discovered
    }
    return false; // Already discovered
  }, [collection, setCollection]);

  const isCardDiscovered = useCallback((cardId: string) => {
    return collection.includes(cardId);
  }, [collection]);

  const getProgress = useCallback(() => {
    return {
      discovered: collection.length,
      total: easterEggCards.length,
      percentage: easterEggCards.length > 0 ? (collection.length / easterEggCards.length) * 100 : 0,
      isComplete: collection.length === easterEggCards.length,
    };
  }, [collection]);

  const resetCollection = useCallback(() => {
    setCollection([]);
  }, [setCollection]);

  // Show collection button if there are discovered cards
  useEffect(() => {
    const collectionBtn = document.getElementById('collectionBtn');
    if (collectionBtn) {
      collectionBtn.style.display = collection.length > 0 && isEnabled ? 'block' : 'none';
    }
  }, [collection, isEnabled]);

  const value: EasterEggContextType = {
    collection,
    isEnabled,
    discoverCard,
    isCardDiscovered,
    getProgress,
    resetCollection,
  };

  return (
    <EasterEggContext.Provider value={value}>
      {children}
      
      {/* Easter Egg Card Overlay */}
      {activeCard && (
        <EasterEggOverlay
          card={activeCard}
          isOpen={true}
          onClose={() => setActiveCard(null)}
        />
      )}
    </EasterEggContext.Provider>
  );
}

export function useEasterEggContext() {
  const context = useContext(EasterEggContext);
  if (!context) {
    throw new Error('useEasterEggContext must be used within EasterEggProvider');
  }
  return context;
}

