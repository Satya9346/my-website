import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8 transform transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            About <span className="text-amber-500">Me</span>
          </h2>
          
          <div className={`prose prose-lg dark:prose-invert max-w-none prose-slate prose-headings:text-slate-800 dark:prose-headings:text-white prose-a:text-amber-500 transition-all duration-700 ease-out delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p>
              I'm a Computer Science student at K.G. Reddy College of Engineering & Technology, maintaining a strong GPA of 7.88. My passion lies in artificial intelligence, machine learning, and full-stack development, where I combine technical expertise with creative problem-solving.
            </p>
            
            <p>
              Throughout my academic journey, I've developed expertise in various programming languages and technologies, with a particular focus on Python, machine learning, and web development. My project portfolio demonstrates my ability to create innovative solutions across different domains.
            </p>
            
            <p>
              I've completed multiple internships, including positions at IBM and Evolution Technology, where I've gained practical experience in data analytics and AI implementation. These experiences have strengthened my technical skills and ability to work effectively in professional environments.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="space-y-4">
                <li>
                  <strong>B.Tech in Computer Science Engineering</strong>
                  <br />
                  K.G. Reddy College of Engineering & Technology
                  <br />
                  GPA: 7.88 (Expected Jan 2025)
                </li>
                <li>
                  <strong>Intermediate Education</strong>
                  <br />
                  Sri Chaitanya Junior College
                  <br />
                  Score: 88% (2021)
                </li>
                <li>
                  <strong>Secondary Education</strong>
                  <br />
                  St. Ann's E/M High School
                  <br />
                  Score: 93% (2019)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;