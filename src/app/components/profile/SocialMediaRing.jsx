'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/app/data/links';

export default function SocialMediaRing({ centerX, centerY, radius, onClose }) {
  const iconSize = 40;
  const angleIncrement = (2 * Math.PI) / socialLinks.length;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-10 bg-black bg-opacity-20"
        onClick={onClose}
      />
      
      <div 
        className="fixed z-20 pointer-events-none"
        style={{
          left: `${centerX}px`,
          top: `${centerY}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {socialLinks.map((link, index) => {
          const angle = index * angleIncrement;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute rounded-full shadow-md pointer-events-auto"
              initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                x,
                y,
                transition: {
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                  delay: 0.1 + index * 0.05
                }
              }}
              exit={{
                scale: 0,
                opacity: 0,
                x: 0,
                y: 0
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundColor: link.color,
                padding: '8px',
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                left: '50%',
                top: '50%',
                marginLeft: `-${iconSize/2}px`,
                marginTop: `-${iconSize/2}px`
              }}
            >
              <img 
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${link.icon}.svg`} 
                alt={link.name}
                className="w-full h-full"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </motion.a>
          );
        })}
      </div>
    </>
  );
}