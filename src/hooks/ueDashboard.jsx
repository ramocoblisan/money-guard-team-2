import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const useDashboard = () => {
  const isBigScreenOrTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return {
    isBigScreenOrTablet,
    isBigScreen,
    isMobile,
    isTabletOrMobile,
    isPortrait,
    isRetina,
  };
};