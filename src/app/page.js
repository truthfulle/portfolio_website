'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      title: "House Invader",
      description: "A text-based browser game where players navigate through a mysterious house filled with puzzles and challenges.",
      tags: ["Python", "JavaScript", "AJAX", "HTML", "CSS"],
      image: "/house-invader.jpg",
      featured: true
    },
    {
      title: "Processing Pipeline",
      description: "The backbone of the on-board processing pipeline for CloudView and ASTRAEUS-01 satellite systems.",
      tags: ["C++"],
      image: "/processing-pipeline.jpg",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built with modern web technologies.",
      tags: ["Next.js", "Tailwind CSS", "React"],
      image: "/portfolio.jpg"
    },
    {
      title: "Tango with Django",
      description: "A Django-based web application for dance enthusiasts to connect and share moves.",
      tags: ["Python", "Django", "HTML", "CSS"],
      image: "/tango-django.jpg"
    }
  ];

  const socialLinks = [
    { name: "GitHub", url: "#", icon: "github" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Email", url: "#", icon: "email" }
  ];

  const renderIcon = (icon) => {
    switch(icon) {
      case 'github':
        return <span className="i-mdi-github text-2xl" />;
      case 'linkedin':
        return <span className="i-mdi-linkedin text-2xl" />;
      case 'twitter':
        return <span className="i-mdi-twitter text-2xl" />;
      case 'email':
        return <span className="i-mdi-email text-2xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <section className="max-w-7xl mx-auto mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Profile Section (1/3) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/3 flex flex-col items-center lg:items-start"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 mb-6 mx-auto">
                <Image 
                  src="/profile.jpg" 
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
              
              <h1 className="text-3xl font-bold mb-2 text-white text-center lg:text-left">
                Jonatan Wiankowski
              </h1>
              
              <p className="text-blue-400 mb-6 text-center lg:text-left">
                Computing Science Student & Developer
              </p>
              
              <div className="text-gray-300 mb-6 space-y-4 text-center lg:text-left">
                <p>
                  Passionate about creating efficient solutions and engaging user experiences. 
                  Currently expanding my skills in software development and system design.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading sci-fi, or playing guitar.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={link.name}
                  >
                    {renderIcon(link.icon)}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Featured Projects (2/3) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-2/3"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.filter(p => p.featured).map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all h-full flex flex-col"
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
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2.5 py-1 bg-gray-800 rounded-full text-xs text-blue-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="max-w-7xl mx-auto my-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-white"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
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
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-blue-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto my-20">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* CV Download (1/3) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/3 bg-gray-800/50 rounded-xl border border-gray-700 p-8 flex flex-col"
            >
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-white mb-4">Let's Work Together</h2>
                <p className="text-gray-300 mb-6">
                  Like what you see? Download my CV to learn more about my skills and experience.
                </p>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                Download CV
              </button>
            </motion.div>

            {/* Contact Form (2/3) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-2/3 bg-gray-800/50 rounded-xl border border-gray-700 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5"
                    className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}