'use client';

import { motion } from 'framer-motion';

export default function SectionTitle({ title }) {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-12 text-white text-center"
    >
      {title}
    </motion.h2>
  );
}