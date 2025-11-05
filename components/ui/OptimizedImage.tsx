'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  onClick?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  style,
  priority,
  onClick,
}: OptimizedImageProps) {
  const [error, setError] = useState(false);

  // Fallback to regular img if Next/Image fails
  if (error || !src) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src || '/img/logo.webp'}
          alt={alt}
          className={className}
          style={{ ...style, width: '100%', height: '100%', objectFit: 'cover' }}
          onClick={onClick}
        />
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src || '/img/logo.png'}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        onClick={onClick}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      style={style}
      priority={priority}
      onClick={onClick}
      onError={() => setError(true)}
      unoptimized // Disable optimization for local development
    />
  );
}

