'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';

const TECH_LOGOS = [
  'python', 'javascript', 'react', 'nextjs', 'cpp', 
  'django', 'tailwindcss', 'html5', 'css3', 'git', 
  'java', 'linux'
].map(tech => ({
  src: `/tech-logos/${tech}.svg`,
  alt: `${tech.charAt(0).toUpperCase()}${tech.slice(1)} logo`
}));

const BANNER_CONFIGS = [
  { startX: '35%', startY: '75%', angle: 45, speed: 1 },
  { startX: '35%', startY: 0, angle: -45, speed: 0.8 },
  { startX: '100%', startY: '50%', angle: -55, speed: 1 }
];

const ANIMATION_DURATION = 60;
const LOGO_REPETITIONS = 10;
const MIN_LOGO_SIZE = 30;
const MAX_LOGO_SIZE = 80;
const SCALE_FACTOR = 50000;

export default function FloatingTechBanners() {
  const [isMounted, setIsMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logoOrders = useMemo(() => {
    return Array(BANNER_CONFIGS.length).fill().map(() => 
      [...TECH_LOGOS].sort(() => Math.random() - 0.5)
    );
  }, []);

  const { logoSize, travelDistance } = useMemo(() => {
    if (windowSize.width === 0) {
      return { logoSize: MIN_LOGO_SIZE, travelDistance: 0 };
    }
    
    const baseSize = (SCALE_FACTOR / windowSize.width) * 20;
    return {
      logoSize: Math.min(Math.max(baseSize, MIN_LOGO_SIZE), MAX_LOGO_SIZE),
      travelDistance: Math.hypot(windowSize.width, windowSize.height) * 1.2
    };
  }, [windowSize.width, windowSize.height]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none overflow-hidden">
      {BANNER_CONFIGS.map((config, index) => (
        <TechBanner 
          key={`banner-${index}`}
          config={config}
          logoSize={logoSize}
          travelDistance={travelDistance}
          logoOrder={logoOrders[index]}
        />
      ))}
    </div>
  );
}

const TechBanner = ({ config, logoSize, travelDistance, logoOrder }) => {
  const radians = useMemo(() => (config.angle * Math.PI) / 180, [config.angle]);
  const duration = useMemo(() => ANIMATION_DURATION / config.speed, [config.speed]);
  const movement = useMemo(() => ({
    x: Math.cos(radians) * travelDistance,
    y: Math.sin(radians) * travelDistance
  }), [radians, travelDistance]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: config.startX,
        top: config.startY,
        translateX: '-50%',
        translateY: '-50%',
        rotate: `${config.angle}deg`
      }}
      initial={{ x: -movement.x / 2, y: -movement.y / 2 }}
      animate={{ x: movement.x / 2, y: movement.y / 2 }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: 'linear',
        repeatType: 'loop'
      }}
    >
      <LogoBanner logoSize={logoSize} logoOrder={logoOrder} />
    </motion.div>
  );
};

const LogoBanner = React.memo(({ logoSize, logoOrder }) => {
  const [currentLogos, setCurrentLogos] = useState([]);
  
  useEffect(() => {
    // Initial shuffle
    const shuffled = [...logoOrder].sort(() => Math.random() - 0.5);
    setCurrentLogos(Array(LOGO_REPETITIONS).fill().map(() => [...shuffled]));
    
    // Reshuffle periodically
    const interval = setInterval(() => {
      const newShuffled = [...logoOrder].sort(() => Math.random() - 0.5);
      setCurrentLogos(prev => {
        const newGroups = [...prev];
        newGroups.shift();
        newGroups.push([...newShuffled]);
        return newGroups;
      });
    }, ANIMATION_DURATION * 1000 / 2);

    return () => clearInterval(interval);
  }, [logoOrder]);

  return (
    <div className="flex gap-[3vw]">
      {currentLogos.map((group, i) => (
        <motion.div
          key={`group-${i}`}
          className="flex gap-[3vw]"
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ 
            opacity: 1, 
            filter: 'blur(0px)',
            transition: { duration: 1, ease: 'easeOut' }
          }}
          exit={{ 
            opacity: 0,
            filter: 'blur(8px)',
            transition: { duration: 1, ease: 'easeIn' }
          }}
        >
          {group.map(logo => (
            <LogoItem key={`${logo.alt}-${i}`} logo={logo} size={logoSize} />
          ))}
        </motion.div>
      ))}
    </div>
  );
});

const LogoItem = React.memo(({ logo, size }) => (
  <motion.div 
    className="relative"
    style={{
      width: size,
      height: size,
      minWidth: size,
      minHeight: size
    }}
    whileHover={{ scale: 1.2 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  >
    <Image
      src={logo.src}
      alt={logo.alt}
      fill
      className="object-contain"
      sizes={`${size}px`}
      priority={false}
    />
  </motion.div>
));