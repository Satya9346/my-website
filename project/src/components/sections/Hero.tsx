import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headingRef.current, paragraphRef.current, buttonRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
      }
    });
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50 dark:from-dark-950 dark:to-dark-900 z-0 transition-colors duration-300" />
      
      <div className="absolute inset-0 opacity-50 dark:opacity-20 z-0 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_100%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="mb-8 relative group">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400 shadow-xl transform transition-all duration-300 group-hover:scale-105">
            <img 
              src="/images/Satya.jpg" 
              alt="Satya Prakash Pittala"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 animate-pulse"></div>
        </div>

        <h1 
          ref={headingRef} 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-900 dark:text-white mb-6 opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
        >
          Hi, I'm <span className="text-primary-500 dark:text-primary-400">Satya Prakash Pittala</span>
          <br />
          <span className="text-dark-700 dark:text-dark-300">AI & Full Stack Developer</span>
        </h1>
        
        <p 
          ref={paragraphRef}
          className="text-xl md:text-2xl text-dark-800 dark:text-dark-400 max-w-3xl mb-10 leading-relaxed opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-100"
        >
          A passionate <span className="text-primary-500 dark:text-primary-400 font-medium">Computer Science student</span> and <span className="text-primary-500 dark:text-primary-400 font-medium">ML enthusiast</span> creating innovative solutions with cutting-edge technologies.
        </p>
        
        <div 
          ref={buttonRef}
          className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200"
        >
          <a 
            href="#projects" 
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View My Work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about" 
          className="text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;