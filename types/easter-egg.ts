// Types for Easter Egg system

import { LocalizedText } from './decal';

export interface EasterEggCard {
  id: string;
  name: LocalizedText;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  image: string;
  triggeredBy: string[]; // List of element IDs that trigger this card
}

export interface EasterEggCollection {
  discoveredCards: string[];
  totalCards: number;
}

export interface EasterEggConfig {
  enabled: boolean;
  minScreenWidth: number;
  cards: EasterEggCard[];
  rewardDownloadUrl?: string;
}

