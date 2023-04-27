import { useEffect } from 'react';

const useClickOutClose = (
  ref: React.RefObject<HTMLElement>,
  onClick: () => void
) => {
  
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};

export default useClickOutClose;
