'use client';

import { useEffect, useState } from 'react';

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');

  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 640) {
      setBreakpoint('mobile');
    } else if (width < 1024) {
      setBreakpoint('tablet');
    } else {
      setBreakpoint('desktop');
    }
  };

  useEffect(() => {
    handleResize(); // Set initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};
