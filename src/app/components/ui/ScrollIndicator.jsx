'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function ScrollIndicator() {
  const controls = useAnimation();
  const [showIndicator, setShowIndicator] = useState(false);
  const animationRef = useRef(null);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = pageHeight - scrollPosition;

      setShowIndicator(distanceFromBottom > 500);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', checkScrollPosition);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!showIndicator) {
      controls.stop();
      return;
    }

    const animate = async () => {
      await controls.start({
        y: [0, 10, 0],
        opacity: [0.8, 1, 0.8],
        transition: {
          duration: 0.75,
          ease: "easeInOut"
        }
      });
      
      if (showIndicator) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showIndicator, controls]);

  if (!showIndicator) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
      onClick={scrollToBottom}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="bg-gray-800/90 backdrop-blur-sm rounded-full p-3 border border-gray-700 shadow-lg flex items-center justify-center hover:bg-gray-700/80 transition-colors">
        <ChevronDownIcon className="w-5 h-5 text-gray-300" />
      </div>
    </motion.div>
  );
}