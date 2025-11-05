'use client';

import { useEffect } from 'react';
import { useModal } from '@/hooks/useModal';
import { useEasterEggContext } from '@/contexts/EasterEggContext';
import { easterEggCards, easterEggConfig } from '@/data/easter-eggs';
import { useLanguage } from '@/hooks/useLanguage';
import CollectionCard from '@/components/easter-egg/CollectionCard';

export default function CollectionModal() {
  const { modalType, closeModal, isOpen } = useModal();
  const { collection, isEnabled, getProgress, isCardDiscovered } = useEasterEggContext();
  const { language } = useLanguage();

  const progress = getProgress();

  useEffect(() => {
    if (isOpen && modalType === 'collection') {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, modalType]);

  if (!isOpen || modalType !== 'collection' || !isEnabled) return null;

  return (
    <div className="collection-modal show" onClick={closeModal}>
      <div className="collection-content" onClick={(e) => e.stopPropagation()}>
        <div className="collection-header">
          <h2 className="collection-title">
            {language === 'fr' ? 'Collection de Cartes' : 'Card Collection'}
          </h2>
          <button className="collection-close" onClick={closeModal}>
            ×
          </button>
        </div>

        <div className="collection-cards">
          {easterEggCards.map((card) => {
            const discovered = isCardDiscovered(card.id);
            
            return (
              <CollectionCard
                key={card.id}
                card={card}
                discovered={discovered}
                language={language}
              />
            );
          })}
        </div>

        <div className="collection-stats">
          <p className="collection-progress">
            <span>{language === 'fr' ? 'Progression :' : 'Progress:'}</span>
            <span> {progress.discovered}/{progress.total} </span>
            <span>{language === 'fr' ? 'cartes découvertes' : 'cards discovered'}</span>
          </p>
          <a
            href={progress.isComplete ? easterEggConfig.rewardDownloadUrl : '#'}
            download={progress.isComplete ? '' : undefined}
            style={{ pointerEvents: progress.isComplete ? 'auto' : 'none' }}
          >
            <button
              id="downloadRewardBtn"
              className="download-reward-btn"
              disabled={!progress.isComplete}
            >
              <span>
                {language === 'fr' 
                  ? '🏆 Télécharger le Sticker Exclusif' 
                  : '🏆 Download Exclusive Decal'}
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

