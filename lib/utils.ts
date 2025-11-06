// Utility functions

/**
 * Normalize string for search (remove accents, lowercase)
 */
export function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

/**
 * Check if element matches search query
 */
export function matchesSearch(searchTerm: string, ...fields: (string | string[])[]): boolean {
  const normalizedQuery = normalizeString(searchTerm);
  
  return fields.some(field => {
    if (Array.isArray(field)) {
      return field.some(item => normalizeString(item).includes(normalizedQuery));
    }
    return normalizeString(field).includes(normalizedQuery);
  });
}

/**
 * Generate consistent color for avatar based on name
 */
export function generateAvatarColor(name: string): string {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
    '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA'
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const colorIndex = Math.abs(hash) % colors.length;
  return colors[colorIndex];
}

/**
 * Parse markdown links in text
 */
export function parseMarkdownLinks(text: string): string {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  return text.replace(
    linkRegex,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
}

/**
 * Scroll to element smoothly
 */
export function scrollToElement(elementId: string): void {
  const tryScroll = (attempts = 0) => {
    const element = document.getElementById(elementId);
    
    if (element) {
      // Calculate position with offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 120; // Offset for fixed navbar
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Clean URL hash to prevent accumulation
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    } else if (attempts < 10) {
      // Element not found yet (dynamically loaded), retry after a short delay
      setTimeout(() => tryScroll(attempts + 1), 100);
    }
  };
  
  tryScroll();
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    }
  } catch (error) {
    console.error('Error copying to clipboard:', error);
    return false;
  }
}

/**
 * Check if file is video
 */
export function isVideo(url: string): boolean {
  return /\.(mp4|webm|mkv|avi)(\?.*)?$/i.test(url);
}

/**
 * Format date to ISO string
 */
export function formatDateISO(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Check if date is between start and end
 */
export function isDateBetween(date: Date, start: string, end: string): boolean {
  const dateTime = date.getTime();
  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();
  
  return dateTime >= startTime && dateTime <= endTime;
}

/**
 * Get current year for copyright
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

