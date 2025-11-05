// Hook for Intersection Observer (for video autoplay, lazy loading, etc.)

import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: UseIntersectionObserverOptions = {}
): IntersectionObserverEntry | undefined {
  const { threshold = 0.5, root = null, rootMargin = '0px', freezeOnceVisible = false } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(([entry]) => setEntry(entry), observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}

// Helper hook for simple visibility check
export function useIsVisible(elementRef: RefObject<Element>, threshold = 0.5): boolean {
  const entry = useIntersectionObserver(elementRef, { threshold });
  return entry?.isIntersecting ?? false;
}

