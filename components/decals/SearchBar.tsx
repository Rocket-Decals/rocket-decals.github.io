'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { debounce } from '@/lib/utils';

interface SearchBarProps {
  onSearch: (query: string) => void;
  debounceMs?: number;
}

export default function SearchBar({ onSearch, debounceMs = 300 }: SearchBarProps) {
  const { language, t } = useLanguage();
  const [value, setValue] = useState('');

  // Debounced search
  useEffect(() => {
    const debouncedSearch = debounce((query: string) => {
      onSearch(query);
    }, debounceMs);

    debouncedSearch(value);
  }, [value, onSearch, debounceMs]);

  const placeholder = t('decals.search.placeholder');

  return (
    <div className="models-search">
      <input
        type="search"
        className="models-search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Search"
      />
    </div>
  );
}

