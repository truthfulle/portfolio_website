'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useNavbar } from '@/app/components/ui/NavbarContext';
import SocialMediaRing from './SocialMediaRing';

export default function ProfileImage() {
  const { setIsNavbarVisible, isNavbarManuallyHidden } = useNavbar();
  const [isRingVisible, setIsRingVisible] = useState(false);
  const profileRef = useRef(null);
  const [center, setCenter] = useState({ x: 0, y: 0, radius: 0 });

  const calculateCenter = useCallback(() => {
    if (!profileRef.current) return;
    
    const rect = profileRef.current.getBoundingClientRect();
    const profileRadius = rect.width / 2;
    
    setCenter({
      x: rect.left + profileRadius,
      y: rect.top + profileRadius,
      radius: profileRadius * 1.5
    });
  }, []);

  const toggleRing = useCallback(() => {
    calculateCenter();
    const newRingState = !isRingVisible;
    setIsRingVisible(newRingState);
    
    if (newRingState) {
      setIsNavbarVisible(false);
    } else if (!isNavbarManuallyHidden) {
      setIsNavbarVisible(true);
    }
  }, [isRingVisible, isNavbarManuallyHidden, calculateCenter, setIsNavbarVisible]);

  const closeRing = useCallback(() => {
    setIsRingVisible(false);
    if (!isNavbarManuallyHidden) {
      setIsNavbarVisible(true);
    }
  }, [isNavbarManuallyHidden, setIsNavbarVisible]);

  useEffect(() => {
    const handleKeyDown = (e) => e.key === 'Escape' && closeRing();
    const handleScroll = () => closeRing();
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [closeRing]);

  useEffect(() => {
    if (!isRingVisible) return;
    
    const handleResize = () => calculateCenter();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isRingVisible, calculateCenter]);

  return (
    <div className="relative" ref={profileRef}>
      <motion.button 
        onClick={toggleRing}
        className="relative w-48 h-48 rounded-full overflow-hidden border border-slate-700/50 mb-8 focus:outline-none group"
        aria-label="Toggle social media links"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Image 
          src="/profile/profile.jpg" 
          alt="Profile Picture"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-slate-900/50 rounded-full" />
          <div className="glass px-4 py-2 rounded-lg">
            <span className="text-sm font-medium text-slate-100">View links</span>
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isRingVisible && (
          <SocialMediaRing 
            centerX={center.x} 
            centerY={center.y} 
            radius={center.radius}
            onClose={closeRing}
          />
        )}
      </AnimatePresence>
    </div>
  );
}