'use client';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import NavMenu from './NavMenu';
import NavTop from './NavTop';
export default function Header() {
  const [isPc, setIsPc] = useState<Boolean>(true);
  const listeningWindow = () => {
    let screenWidth = document.body.clientWidth;
    if (screenWidth < 750) {
      setIsPc(false);
    } else {
      setIsPc(true);
    }
  };
  useEffect(() => {
    listeningWindow();
    window.addEventListener('resize', listeningWindow);
    return () => {
      window.removeEventListener('resize', listeningWindow);
    };
  }, []);
  return (
    <div className='nav'>
      {isPc ? (
        <>
          <NavTop />
          <NavMenu />
        </>
      ) : (
        <MobileMenu />
      )}
    </div>
  );
}
