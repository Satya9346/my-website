import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 text-center transform transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          My <span className="text-amber-500">Projects</span>
        </h2>
        
        <p className={`text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center mb-12 transform transition-all duration-700 ease-out delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;