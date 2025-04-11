'use client';

import { useNavbar } from '@/app/components/ui/NavbarContext';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { 
    isNavbarVisible, 
    setIsNavbarVisible,
    isNavbarManuallyHidden,
    setIsNavbarManuallyHidden
  } = useNavbar();
  
  const [isHovered, setIsHovered] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsNavbarVisible(true);
        setIsNavbarManuallyHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, setIsNavbarVisible, setIsNavbarManuallyHidden]);

  const handleToggleNavbar = () => {
    const newVisibility = !isNavbarVisible;
    setIsNavbarVisible(newVisibility);
    setIsNavbarManuallyHidden(!newVisibility);
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-300">
      <button
        className={`absolute left-6 top-1/2 -translate-y-1/2 z-50 transition-all ${
          isHovered ? 'opacity-100' : 'opacity-70 hover:opacity-100'
        }`}
        onClick={handleToggleNavbar}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={isNavbarVisible ? "Hide navigation" : "Show navigation"}
      >
        <div className="h-10 w-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center transition-all hover:bg-gray-700 hover:border-gray-600">
          {isNavbarVisible ? (
            <ChevronLeftIcon className="w-5 h-5 text-gray-300" />
          ) : (
            <ChevronRightIcon className="w-5 h-5 text-gray-300" />
          )}
        </div>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${
        isNavbarVisible
          ? 'translate-x-0 opacity-100'
          : '-translate-x-full opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-7xl mx-auto">
          <nav className="bg-gray-800/90 backdrop-blur-lg rounded-full border border-gray-700/80 shadow-xl">
            <div className="flex items-center justify-between h-16 px-8 pl-16">
              <div className="flex items-center group">
                <span className="text-white text-xl font-medium group-hover:text-gray-400 transition-colors duration-300">
                  Jonatan
                </span>
                <span className="text-gray-400 text-xl font-medium ml-1.5 group-hover:text-white transition-colors duration-300">
                  Wiankowski
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-3">
                {['Home', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-5 py-2.5 rounded-full text-sm font-medium tracking-wide text-gray-300 hover:text-white hover:bg-gray-700/60 transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}