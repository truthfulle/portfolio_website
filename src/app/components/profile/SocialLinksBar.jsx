'use client';

import { motion } from 'framer-motion';
import SocialLink from './SocialLinks';
import { socialLinks } from '@/app/data/links';

export default function SocialLinksBar() {
  const displayedLinks = socialLinks.filter(link => link.display);

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {displayedLinks.map((link) => (
        <SocialLink key={link.name} link={link} />
      ))}
    </div>
  );
}