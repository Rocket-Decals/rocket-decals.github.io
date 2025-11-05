'use client';

import { useState, useEffect } from 'react';
import { TeamCreatorDecal, ClientDecal } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { matchesSearch, normalizeString } from '@/lib/utils';
import DecalCard from './DecalCard';
import Pagination from './Pagination';

interface DecalsGridProps {
  decals: (TeamCreatorDecal | ClientDecal)[];
  itemsPerPage?: number;
  showCTA?: boolean;
  searchQuery?: string;
  emptyMessage?: string;
}

export default function DecalsGrid({ 
  decals, 
  itemsPerPage = 9,
  showCTA = false,
  searchQuery = '',
  emptyMessage
}: DecalsGridProps) {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredDecals, setFilteredDecals] = useState(decals);

  // Filter decals based on search query
  useEffect(() => {
    if (!searchQuery) {
      setFilteredDecals(decals);
      setCurrentPage(1);
      return;
    }

    const normalizedQuery = normalizeString(searchQuery);
    const filtered = decals.filter((decal) => {
      const keywords = decal.keywords || [];
      const titleFr = decal.title?.fr || '';
      const titleEn = decal.title?.en || '';
      
      return matchesSearch(normalizedQuery, titleFr, titleEn, decal.id, keywords);
    });

    setFilteredDecals(filtered);
    setCurrentPage(1);
  }, [searchQuery, decals]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredDecals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleDecals = filteredDecals.slice(startIndex, endIndex);

  // Handle download all for a decal
  const handleDownloadAll = (decal: TeamCreatorDecal | ClientDecal) => {
    if ('downloads' in decal && decal.downloads) {
      decal.downloads.forEach((download, idx) => {
        setTimeout(() => {
          const a = document.createElement('a');
          a.href = download.href;
          a.setAttribute('download', '');
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }, idx * 120);
      });
    }
  };

  if (filteredDecals.length === 0 && searchQuery) {
    return (
      <div className="empty-state" style={{ display: 'flex' }}>
        {emptyMessage || t('decals.noResults.generic')}
      </div>
    );
  }

  if (filteredDecals.length === 0) {
    return null; // No decals at all
  }

  return (
    <>
      <div className="cards-grid">
        {visibleDecals.map((decal) => (
          <DecalCard
            key={decal.id}
            decal={decal}
            onDownloadAll={() => handleDownloadAll(decal)}
          />
        ))}

        {/* CTA Card (for clients grid only) */}
        {showCTA && (
          <a
            className="model-card-tile cta-card"
            href="https://discord.gg/hzwB24PfaG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cta-plus">+</div>
            <div className="cta-text">{t('decals.cta.text')}</div>
          </a>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}

