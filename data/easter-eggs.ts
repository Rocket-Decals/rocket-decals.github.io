// Easter Egg cards configuration - EXACT comme l'original
import { EasterEggCard, EasterEggConfig } from '@/types';

export const easterEggCards: EasterEggCard[] = [
  {
    id: 'rocket-decals',
    name: {
      fr: 'Rocket Decals',
      en: 'Rocket Decals',
    },
    rarity: 'legendary',
    rarityLabel: {
      fr: 'Rocket Decals',
      en: 'Rocket Decals',
    },
    image: '/img/partners/rocket-decals_car.png',
    colors: {
      primary: '#eaeaea',
      secondary: '#ffffff',
      border: '#eaeaea',
      text: '#181818',
    },
    triggeredBy: ['brand-logo'],
  },
  {
    id: 'raito',
    name: {
      fr: 'Raito',
      en: 'Raito',
    },
    rarity: 'legendary',
    rarityLabel: {
      fr: 'FONDATEUR',
      en: 'FOUNDER',
    },
    image: '/img/rd/raito_car.png',
    colors: {
      primary: '#8e2f11',
      secondary: '#b8543a',
      border: '#8e2f11',
      text: '#ffffff',
    },
    triggeredBy: ['raito-card-trigger'],
  },
  {
    id: 'erlow',
    name: {
      fr: 'Erlow',
      en: 'Erlow',
    },
    rarity: 'legendary',
    rarityLabel: {
      fr: 'FONDATEUR',
      en: 'FOUNDER',
    },
    image: '/img/rd/erlow_car.png',
    colors: {
      primary: '#4579e7',
      secondary: '#6b9eff',
      border: '#4579e7',
      text: '#ffffff',
    },
    triggeredBy: ['erlow-card-trigger'],
  },
  {
    id: 'saaxqi',
    name: {
      fr: 'SaaXqi',
      en: 'SaaXqi',
    },
    rarity: 'epic',
    rarityLabel: {
      fr: 'CRÉATEUR DE CONTENU',
      en: 'CONTENT CREATOR',
    },
    image: '/img/partners/saaxqi_car.png',
    colors: {
      primary: '#9000ff',
      secondary: '#b200ff',
      border: '#9000ff',
      text: '#ffffff',
    },
    triggeredBy: ['saaxqi-trust-logo'],
  },
  {
    id: 'pxr',
    name: {
      fr: 'PxR',
      en: 'PxR',
    },
    rarity: 'epic',
    rarityLabel: {
      fr: 'ÉQUIPE',
      en: 'TEAM',
    },
    image: '/img/partners/pxr_car.png',
    colors: {
      primary: '#fb1440',
      secondary: '#fb1440',
      border: '#fb1440',
      text: '#ffffff',
    },
    triggeredBy: ['pxr-trust-logo'],
  },
  {
    id: 'nhs',
    name: {
      fr: 'NHS',
      en: 'NHS',
    },
    rarity: 'epic',
    rarityLabel: {
      fr: 'CRÉATEUR DE CONTENU',
      en: 'CONTENT CREATOR',
    },
    image: '/img/partners/nhs_car.png',
    colors: {
      primary: '#ad295d',
      secondary: '#ad295d',
      border: '#ad295d',
      text: '#ffffff',
    },
    triggeredBy: ['nhs-trust-logo'],
  },
  {
    id: 'poyos',
    name: {
      fr: 'Poyos',
      en: 'Poyos',
    },
    rarity: 'rare',
    rarityLabel: {
      fr: 'CRÉATEUR DE CONTENU',
      en: 'CONTENT CREATOR',
    },
    image: '/img/partners/poyos_car.png',
    colors: {
      primary: '#DFA86F',
      secondary: '#DFA86F',
      border: '#DFA86F',
      text: '#ffffff',
    },
    triggeredBy: ['poyos-trust-logo'],
  },
  {
    id: 'noblaze',
    name: {
      fr: '10noblaze',
      en: '10noblaze',
    },
    rarity: 'legendary',
    rarityLabel: {
      fr: 'CRÉATEUR DE CONTENU',
      en: 'CONTENT CREATOR',
    },
    image: '/img/partners/10noblaze_car.png',
    colors: {
      primary: '#57c6ed',
      secondary: '#57c6ed',
      border: '#57c6ed',
      text: '#ffffff',
    },
    triggeredBy: ['noblaze-trust-logo'],
  },
  {
    id: 'gameward',
    name: {
      fr: 'GameWard',
      en: 'GameWard',
    },
    rarity: 'legendary',
    rarityLabel: {
      fr: 'ÉQUIPE',
      en: 'TEAM',
    },
    image: '/img/partners/gameward_car.png',
    colors: {
      primary: '#120c2a',
      secondary: '#120c2a',
      border: '#120c2a',
      text: '#ffffff',
    },
    triggeredBy: ['gameward-trust-logo'],
  },
];

export const easterEggConfig: EasterEggConfig = {
  enabled: true,
  minScreenWidth: 768,
  cards: easterEggCards,
  rewardDownloadUrl: '/decals/rocket-decals.zip',
};

