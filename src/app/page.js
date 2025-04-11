'use client';

import { motion } from 'framer-motion';
import TechBackground from './components/ui/Background';
import { projects } from './data/projects';
import { experiences } from './data/experience';
import { skills } from './data/skills';
import SectionTitle from './components/ui/SectionTitle';
import ExperienceCard from './components/cards/ExperienceCard';
import SkillsCard from './components/cards/SkillsCard';
import ProjectCard from './components/cards/ProjectCard';
import ContactInfo from './components/contact/ContactInfo';
import ContactForm from './components/contact/ContactForm';
import ProfileSection from './components/profile/ProfileSection';

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <div className="relative">
      <TechBackground />
      <main className="pt-28 pb-24 px-6 sm:px-8 lg:px-12">
        <section className="max-w-7xl mx-auto mb-24">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <ProfileSection />
            <FeaturedProjects projects={featuredProjects} />
          </div>
        </section>

        <SkillsExperienceSection experiences={experiences} skills={skills} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
    </div>
  );
}

const FeaturedProjects = ({ projects }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="lg:w-2/3"
  >
    <h2 className="text-4xl font-bold text-white mb-10">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </motion.div>
);

const SkillsExperienceSection = ({ experiences, skills }) => (
  <section id="experience" className="max-w-7xl mx-auto my-24">
    <SectionTitle title="Skills & Experience" />
    
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-2/3 space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
      
      <SkillsCard skills={skills} />
    </div>
  </section>
);

const ProjectsSection = ({ projects }) => (
  <section id="projects" className="max-w-7xl mx-auto my-24">
    <SectionTitle title="Projects" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  </section>
);

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    alert('Message sent successfully!');
    e.target.reset();
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto my-24">
      <SectionTitle title="Contact Me" />
      <div className="flex flex-col lg:flex-row gap-12">
        <ContactInfo />
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </section>
  );
};