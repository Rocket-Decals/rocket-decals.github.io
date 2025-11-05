// Types for seasonal events

export type EventType = 'halloween' | 'noel' | 'valentines' | 'newyear' | 'classic';

export interface EventConfig {
  id: EventType;
  name: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  backgroundVideo: string;
  logoImage?: string;
  overlayImage?: string;
  discordLogoImage?: string;
}

export interface ActiveEvent extends EventConfig {
  isActive: boolean;
}

