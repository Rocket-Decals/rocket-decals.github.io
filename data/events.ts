// Seasonal events configuration
import { EventConfig } from '@/types';
import { isDateBetween } from '@/lib/utils';

export const events: EventConfig[] = [
  /*
  {
    id: 'halloween',
    name: 'Halloween',
    startDate: '2025-10-15',
    endDate: '2025-11-02',
    backgroundVideo: '/video/rl-video-halloween.mp4',
    logoImage: '/img/event/halloween-logo.png',
    overlayImage: '/img/event/halloween-overlay.png',
    discordLogoImage: '/img/event/halloween-logo-discord.png',
  },
  {
    id: 'noel',
    name: 'Noël',
    startDate: '2025-12-01',
    endDate: '2026-01-06',
    backgroundVideo: '/video/rl-video-noel.mp4',
    logoImage: '/img/event/noel-logo.png',
    overlayImage: '/img/event/noel-overlay.png',
    discordLogoImage: '/img/event/noel-logo-discord.png',
  },
  {
    id: 'newyear',
    name: 'Nouvel An',
    startDate: '2025-01-01',
    endDate: '2025-01-07',
    backgroundVideo: '/video/rl-video-new-year.mp4',
  },
  {
    id: 'valentines',
    name: 'Saint-Valentin',
    startDate: '2025-02-10',
    endDate: '2025-02-15',
    backgroundVideo: '/video/rl-video-valentines.mp4',
  },*/
  {
    id: 'classic',
    name: 'Classic',
    startDate: '1970-01-01',
    endDate: '2099-12-31',
    backgroundVideo: '/video/rl-video.mp4',
    logoImage: '/img/logo.svg',
  },
];

/**
 * Get the current active event based on today's date
 */
export function getCurrentEvent(): EventConfig | null {
  const today = new Date();
  
  const activeEvent = events.find(event => {
    if (event.id === 'classic') return false; // Skip classic, it's the fallback
    return isDateBetween(today, event.startDate, event.endDate);
  });
  
  // If no event is active, return classic event
  return activeEvent || events.find(e => e.id === 'classic') || null;
}

