'use client';
import { motion } from 'framer-motion';

export default function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 rounded-xl p-8 border border-gray-700"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
        <span className="text-blue-400 text-lg">{experience.period}</span>
      </div>
      <h4 className="text-xl text-gray-300 mb-4">{experience.company}</h4>
      {experience.description && (
        <p className="text-gray-400 mb-6 text-base">{experience.description}</p>
      )}
      {experience.skills?.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {experience.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1.5 bg-gray-800 rounded-full text-sm text-blue-400">
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}