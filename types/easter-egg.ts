// Types for Easter Egg system

import { LocalizedText } from './decal';

export interface EasterEggCardColors {
  primary: string;
  secondary: string;
  border: string;
  text: string;
}

export interface EasterEggCard {
  id: string;
  name: LocalizedText;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  rarityLabel: LocalizedText; // Label displayed on the card
  image: string;
  colors: EasterEggCardColors; // Colors for the card
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

