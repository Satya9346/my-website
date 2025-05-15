import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 text-center transform transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          My <span className="text-amber-500">Skills</span>
        </h2>
        
        <p className={`text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center mb-12 transform transition-all duration-700 ease-out delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Technologies and tools I work with to bring ideas to life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div 
              key={category.name}
              className={`bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md p-6 transform transition-all duration-700 ease-out ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">{category.name}</h3>
              
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-amber-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                      <div 
                        className="bg-amber-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ 
                          width: isInView ? `${skill.level}%` : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;