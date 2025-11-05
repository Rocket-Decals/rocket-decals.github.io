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
    image: '/img/partners/rocket-decals_car.png',
    triggeredBy: ['brand-logo'],
  },
  {
    id: 'raito',
    name: {
      fr: 'Raito',
      en: 'Raito',
    },
    rarity: 'legendary',
    image: '/img/rd/raito_car.png',
    triggeredBy: ['raito-card-trigger'],
  },
  {
    id: 'erlow',
    name: {
      fr: 'Erlow',
      en: 'Erlow',
    },
    rarity: 'legendary',
    image: '/img/rd/erlow_car.png',
    triggeredBy: ['erlow-card-trigger'],
  },
  {
    id: 'saaxqi',
    name: {
      fr: 'SaaXqi',
      en: 'SaaXqi',
    },
    rarity: 'epic',
    image: '/img/partners/saaxqi_car.png',
    triggeredBy: ['saaxqi-trust-logo'],
  },
  {
    id: 'pxr',
    name: {
      fr: 'PxR',
      en: 'PxR',
    },
    rarity: 'epic',
    image: '/img/partners/pxr_car.png',
    triggeredBy: ['pxr-card-trigger'],
  },
  {
    id: 'nhs',
    name: {
      fr: 'NHS',
      en: 'NHS',
    },
    rarity: 'epic',
    image: '/img/partners/nhs_car.png',
    triggeredBy: ['nhs-trust-logo'],
  },
  {
    id: 'poyos',
    name: {
      fr: 'Poyos',
      en: 'Poyos',
    },
    rarity: 'rare',
    image: '/img/partners/poyos_car.png',
    triggeredBy: ['poyos-trust-logo'],
  },
];

export const easterEggConfig: EasterEggConfig = {
  enabled: true,
  minScreenWidth: 768,
  cards: easterEggCards,
  rewardDownloadUrl: '/decals/rocket-decals.zip',
};

