export const responsive = {
  showOnlyMobile: 'hidden [@media(max-width:799px)]:block',
  showOnlyTablet: 'hidden [@media(min-width:800px)_and_(max-width:1199px)]:block',
  showOnlyDesktop: 'hidden [@media(min-width:1200px)]:block',
  hideOnMobile: '[@media(max-width:799px)]:hidden',
} as const;

