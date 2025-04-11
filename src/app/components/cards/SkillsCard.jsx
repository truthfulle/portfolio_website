'use client';
import { motion } from 'framer-motion';

export default function SkillsCard({ skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 sticky top-8"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
      <div className="space-y-8">
        {skills.map((category, index) => (
          <div key={index}>
            <h4 className="text-xl text-blue-400 mb-4">{category.category}</h4>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, i) => (
                <span key={i} className="px-3 py-2 bg-gray-800 rounded-lg text-base text-white">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}