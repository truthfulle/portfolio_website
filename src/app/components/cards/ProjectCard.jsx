'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all flex flex-col"
    >
      <div className="relative aspect-video flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 z-10" />
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-5 text-base flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1.5 bg-gray-800 rounded-full text-sm text-blue-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}