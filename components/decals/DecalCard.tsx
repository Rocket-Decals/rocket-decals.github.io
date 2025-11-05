'use client';

import { TeamCreatorDecal, ClientDecal, isTeamCreatorDecal } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { useModal } from '@/hooks/useModal';
import { copyToClipboard } from '@/lib/utils';
import ImageCarousel from './ImageCarousel';

interface DecalCardProps {
  decal: TeamCreatorDecal | ClientDecal;
  onDownloadAll?: () => void;
}

export default function DecalCard({ decal, onDownloadAll }: DecalCardProps) {
  const { language, t } = useLanguage();
  const { openModal } = useModal();

  const handleShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}#decal/${decal.id}`;
    const success = await copyToClipboard(url);
    
    if (success) {
      // Show feedback
      const feedback = document.createElement('div');
      feedback.className = 'copy-feedback lang';
      feedback.setAttribute('data-lang-fr', t('decals.linkCopied'));
      feedback.setAttribute('data-lang-en', t('decals.linkCopied'));
      feedback.textContent = t('decals.linkCopied');
      document.body.appendChild(feedback);
      
      setTimeout(() => feedback.classList.add('show'), 10);
      setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => document.body.removeChild(feedback), 300);
      }, 2000);
    }
  };

  const handleCardClick = () => {
    openModal('decal', decal.id);
  };

  const titleText = decal.title?.[language] || decal.title?.fr || '';
  const isNew = decal.new || decal.isNew;
  const hasDownloads = isTeamCreatorDecal(decal) && decal.downloads && decal.downloads.length > 0;

  return (
    <div
      id={decal.id}
      className={`model-card-tile ${hasDownloads ? 'has-download' : ''}`}
      onClick={handleCardClick}
    >
      <h3 className={`card-title ${decal.titleClass || ''}`}>
        {titleText}
      </h3>

      <div className="card-embed-wrapper">
        {isTeamCreatorDecal(decal) ? (
          // Sketchfab iframe for teams/creators
          <iframe
            title={decal.sketchfab.title}
            frameBorder="0"
            allowFullScreen
            allow={decal.sketchfab.allow}
            src={decal.sketchfab.src}
          />
        ) : (
          // Image carousel for clients
          <ImageCarousel
            images={decal.images || (decal.image ? [decal.image] : [])}
            alt={titleText}
          />
        )}
      </div>

      <button className="card-open-btn">
        {t('decals.view')}
      </button>

      {/* Expand Icon */}
      <div className="card-expand-all" aria-hidden="true" title="Expand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/arrow-expand-all.svg"
          alt=""
          width={18}
          height={18}
          className="card-expand-img"
          aria-hidden="true"
        />
      </div>

      {/* Download All Icon */}
      {hasDownloads && onDownloadAll && (
        <div
          className="card-download-all"
          aria-hidden="true"
          title="Download all"
          onClick={(e) => {
            e.stopPropagation();
            onDownloadAll();
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/download.svg"
            alt=""
            width={18}
            height={18}
            className="card-download-img"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Share Icon */}
      <div
        className="card-share-all"
        aria-hidden="true"
        title="Share"
        onClick={(e) => {
          e.stopPropagation();
          handleShare();
        }}
      >
        <svg
          className="card-share-img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
        </svg>
      </div>

      {/* New Badge */}
      {isNew && (
        <span className="badge-new">
          {t('decals.new')}
        </span>
      )}
    </div>
  );
}

