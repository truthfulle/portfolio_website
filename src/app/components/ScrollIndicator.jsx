'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function ScrollIndicator() {
  const controls = useAnimation();

  useEffect(() => {
    const animateIndicator = async () => {
      while (true) {
        await controls.start({
          y: [0, 10, 0],
          opacity: [0.7, 1, 0.7],
          transition: {
            duration: 1.5,
            ease: "easeInOut"
          }
        });
      }
    };
    animateIndicator();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-full p-2.5 border border-gray-700 shadow-lg flex items-center justify-center">
        <ChevronDownIcon className="w-5 h-5 text-gray-300" />
      </div>
    </motion.div>
  );
}