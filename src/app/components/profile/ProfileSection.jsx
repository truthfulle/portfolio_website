'use client';

import { motion } from 'framer-motion';
import ProfileImage from './ProfileImage';
import SocialLinksBar from './SocialLinksBar';

export default function ProfileSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:w-1/3 w-full flex flex-col items-center text-center relative"
    >
      <ProfileImage />
      
      <h1 className="text-4xl font-bold mb-4 text-slate-100">Jonatan Wiankowski</h1>
      <p className="text-indigo-400 mb-8 text-lg">Computing Science Student & Developer</p>
      
      <div className="text-slate-300 mb-8 space-y-4 px-6 text-base">
        <p>I'm an MSci Computing Science student at the University of Glasgow, with a passion for software development and a keen interest in machine learning.</p>
      </div>
      
      <SocialLinksBar />
    </motion.div>
  );
}