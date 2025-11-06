'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const applyReducedMotion = (e: MediaQueryList | MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.style.setProperty(
          '--animation-duration',
          '0.01ms'
        );
      } else {
        document.documentElement.style.removeProperty('--animation-duration');
      }
    };

    applyReducedMotion(mediaQuery);
    mediaQuery.addEventListener('change', applyReducedMotion);

    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnectLinks.forEach((href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

    preconnectLinks.forEach((href) => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = href;
        document.head.appendChild(link);
      }
    });

    return () => {
      mediaQuery.removeEventListener('change', applyReducedMotion);
    };
  }, []);

  return null;
}
