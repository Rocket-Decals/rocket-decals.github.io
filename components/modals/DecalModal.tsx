'use client';

import { useEffect, useMemo } from 'react';
import { useModal } from '@/hooks/useModal';
import { useLanguage } from '@/hooks/useLanguage';
import { teamsCreators } from '@/data/teams-creators';
import { clients } from '@/data/clients';
import { isTeamCreatorDecal } from '@/types';
import ModalCarousel from './ModalCarousel';

export default function DecalModal() {
  const { modalType, modalData, closeModal, isOpen } = useModal();
  const { language } = useLanguage();

  // Find the decal from either teams-creators or clients
  const decal = useMemo(() => {
    if (!modalData) return null;
    
    // Search in teams & creators first
    const teamDecal = teamsCreators.find(d => d.id === modalData);
    if (teamDecal) return teamDecal;
    
    // Then search in clients
    const clientDecal = clients.find(d => d.id === modalData);
    return clientDecal || null;
  }, [modalData]);

  useEffect(() => {
    if (isOpen && modalType === 'decal') {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, modalType]);

  if (!isOpen || modalType !== 'decal' || !decal) return null;

  const title = decal.title?.[language] || decal.title?.fr || '';
  const titleClass = decal.titleClass || '';

  return (
    <div className="modal-overlay open" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          ×
        </button>
        
        <h2 className={titleClass}>{title}</h2>
        
        {isTeamCreatorDecal(decal) ? (
          <>
            {/* Sketchfab Embed for Teams/Creators */}
            <div className="sketchfab-embed-wrapper modal-embed">
              <iframe
                title={decal.sketchfab.title}
                frameBorder="0"
                allowFullScreen
                allow={decal.sketchfab.allow}
                src={decal.sketchfab.src}
              />
            </div>

            {/* Paragraphs */}
            {decal.paragraphs.map((para, idx) => (
              <div key={idx} className="model-card">
                {para[language] || para.fr}
              </div>
            ))}

            {/* Downloads */}
            {decal.downloads && decal.downloads.length > 0 && (
              <div className="download-container">
                {decal.downloads.map((download, idx) => (
                  <a key={idx} href={download.href} download="">
                    <button className="download-button">
                      {download.label[language] || download.label.fr}
                    </button>
                  </a>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {/* Image Carousel for Clients */}
            <div className="modal-image">
              <ModalCarousel
                images={decal.images || (decal.image ? [decal.image] : [])}
                alt={title}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

