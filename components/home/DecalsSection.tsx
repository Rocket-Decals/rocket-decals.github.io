'use client';

import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { clients } from '@/data/clients';
import { teamsCreators } from '@/data/teams-creators';
import SearchBar from '@/components/decals/SearchBar';
import DecalsGrid from '@/components/decals/DecalsGrid';

export default function DecalsSection() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const hasTeamsCreators = teamsCreators.length > 0;
  const hasClients = clients.length > 0;

  const filteredTeams = teamsCreators; // Will be filtered by DecalsGrid
  const filteredClients = clients; // Will be filtered by DecalsGrid

  return (
    <div id="models-root">
      <SearchBar onSearch={setSearchQuery} />

      {/* Teams & Creators Section */}
      <h2 id="title-3d" className="featured-title">
        {t('decals.teams')}
      </h2>

      {hasTeamsCreators ? (
        <DecalsGrid
          decals={filteredTeams}
          itemsPerPage={9}
          searchQuery={searchQuery}
          emptyMessage={t('decals.noResults.teams')}
        />
      ) : (
        <div className="empty-state" style={{ display: 'flex' }}>
          ⚠️ Teams & Creators à implémenter - Voir DATA-MIGRATION.md
          <br />
          Créer <code>data/teams-creators.ts</code> et importer ici
        </div>
      )}

      {/* Clients Section */}
      <h2 id="title-images" className="featured-title">
        {t('decals.clients')}
      </h2>

      {hasClients ? (
        <DecalsGrid
          decals={filteredClients}
          itemsPerPage={8}
          searchQuery={searchQuery}
          showCTA={true}
          emptyMessage={t('decals.noResults.clients')}
        />
      ) : (
        <div className="empty-state" style={{ display: 'flex' }}>
          ⚠️ Aucun client trouvé
        </div>
      )}
    </div>
  );
}

