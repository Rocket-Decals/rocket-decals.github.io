'use client';

import React, { createContext, useEffect, useState } from 'react';
import { Language, LanguageContextType } from '@/types';
import { translate } from '@/lib/translations';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useLocalStorage<Language>('preferredLanguage', 'fr');
  const [isClient, setIsClient] = useState(false);

  // Detect browser language on first load
  useEffect(() => {
    setIsClient(true);
    
    // Only set browser language if no preference is stored
    const stored = localStorage.getItem('preferredLanguage');
    if (!stored) {
      const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
      setLanguageState(browserLang);
    }
  }, [setLanguageState]);

  // Update document lang attribute when language changes
  useEffect(() => {
    if (isClient) {
      document.documentElement.setAttribute('lang', language);
    }
  }, [language, isClient]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translate(key, language);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

