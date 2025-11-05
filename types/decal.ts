// Types for decals/stickers

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface SketchfabEmbed {
  title: string;
  src: string;
  allow: string;
  autostart?: boolean;
}

export interface Download {
  href: string;
  label: LocalizedText;
}

export interface TeamCreatorDecal {
  id: string;
  new?: boolean;
  isNew?: boolean;
  keywords?: string[];
  sketchfab: SketchfabEmbed;
  title: LocalizedText;
  titleClass?: string;
  paragraphs: LocalizedText[];
  downloads: Download[];
}

export interface ClientDecal {
  id: string;
  new?: boolean;
  isNew?: boolean;
  keywords?: string[];
  title?: LocalizedText;
  titleClass?: string;
  // Single image or array of images for carousel
  image?: string;
  images?: string[];
  thumbnail?: string;
}

export type DecalItem = TeamCreatorDecal | ClientDecal;

// Type guard to check if decal is a TeamCreatorDecal
export function isTeamCreatorDecal(decal: DecalItem): decal is TeamCreatorDecal {
  return 'sketchfab' in decal && 'paragraphs' in decal;
}

// Type guard to check if decal is a ClientDecal
export function isClientDecal(decal: DecalItem): decal is ClientDecal {
  return 'image' in decal || 'images' in decal;
}

