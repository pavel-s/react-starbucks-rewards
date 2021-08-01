import { useEffect } from 'react';
import { useState } from 'react';

/**
 * @param query css media query, example: '(min-width: 799px)'
 * @returns true if query match, false if not
 */
const useMediaQuery = (query: string) => {
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (window?.matchMedia) {
      const mediaQuery = window.matchMedia(query);
      const listener = (e: MediaQueryListEvent) => {
        setResult(e.matches);
      };

      mediaQuery.addEventListener('change', listener);

      return () => {
        mediaQuery.removeEventListener('change', listener);
      };
    }
  }, [query]);

  return result;
};

export default useMediaQuery;
