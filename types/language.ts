// Types for i18n

export type Language = 'fr' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export interface TranslationKeys {
  // Navbar
  'nav.stickers': string;
  'nav.discover': string;
  'nav.reviews': string;
  'nav.tutorial': string;
  'nav.contact': string;
  
  // Hero
  'hero.title': string;
  'hero.subtitle': string;
  'hero.cta.discover': string;
  'hero.cta.order': string;
  
  // Decals
  'decals.search.placeholder': string;
  'decals.teams': string;
  'decals.clients': string;
  'decals.view': string;
  'decals.new': string;
  'decals.downloadAll': string;
  'decals.share': string;
  'decals.linkCopied': string;
  'decals.noResults.teams': string;
  'decals.noResults.clients': string;
  'decals.cta.text': string;
  
  // Reviews
  'reviews.title': string;
  
  // Tutorial
  'tutorial.title': string;
  'tutorial.step': string;
  
  // Contact
  'contact.title': string;
  'contact.trustedUs': string;
  'contact.thanks': string;
  
  // Footer
  'footer.copyright': string;
  
  // Modal
  'modal.close': string;
  
  // Collection
  'collection.title': string;
  'collection.progress': string;
  'collection.discovered': string;
  'collection.downloadReward': string;
  
  // Common
  'common.loading': string;
  'common.error': string;
}

