import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { experience } from '../../data/experience';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 text-center transform transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Work <span className="text-amber-500">Experience</span>
        </h2>
        
        <p className={`text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-center mb-12 transform transition-all duration-700 ease-out delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          My professional journey and the companies I've had the pleasure to work with.
        </p>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 transform md:-translate-x-px"></div>
          
          {experience.map((job, index) => (
            <div 
              key={index}
              className={`relative mb-12 transform transition-all duration-700 ease-out ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Circle on timeline */}
                <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-amber-500 border-4 border-white dark:border-slate-950 transform -translate-x-1/2 z-10"></div>
                
                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8 md:ml-auto' : 'md:ml-8'}`}>
                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{job.role}</h3>
                    <h4 className="text-lg font-medium text-amber-500 mb-3">{job.company}</h4>
                    
                    <div className="flex items-center text-slate-600 dark:text-slate-400 mb-1 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{job.period}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-600 dark:text-slate-400 mb-4 text-sm">
                      <MapPin size={14} className="mr-1" />
                      <span>{job.location}</span>
                    </div>
                    
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;