'use client';
import { motion } from 'framer-motion';

export default function ContactForm({ onSubmit }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="lg:w-2/3 bg-gray-800/50 rounded-xl border border-gray-700 p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-8">Get In Touch</h2>
      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-3 text-base">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 text-base"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-3 text-base">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 text-base"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-gray-300 mb-3 text-base">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject"
            className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 text-base"
            placeholder="Subject"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-3 text-base">Message</label>
          <textarea 
            id="message" 
            name="message"
            rows="6"
            className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 text-base"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all text-lg"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}