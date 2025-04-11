'use client';

import { motion } from 'framer-motion';
import React from 'react';

const SocialLink = React.memo(({ link }) => (
  <motion.a 
    href={link.url}
    className="flex items-center rounded-full px-3 py-1.5 shadow-sm hover:shadow transition-all"
    style={{ backgroundColor: link.color }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img 
      src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${link.icon}.svg`} 
      alt={link.name}
      className="w-4 h-4 mr-1.5"
      style={{ filter: 'brightness(0) invert(1)' }}
    />
    <span className="text-white text-xs font-medium">{link.name}</span>
  </motion.a>
));

export default SocialLink;