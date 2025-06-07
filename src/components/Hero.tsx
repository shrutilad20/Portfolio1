
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animate elements on load
    setTimeout(() => {
      titleRef.current?.classList.add('active');
      
      setTimeout(() => {
        subtitleRef.current?.classList.add('active');
        
        setTimeout(() => {
          ctaRef.current?.classList.add('active');
        }, 200);
      }, 200);
    }, 100);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 reveal"
        >
          Hi, I'm <span className="text-primary">Shruti Lad</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto reveal text-balance"
        >
          Full Stack Developer specializing in MERN stack, with a passion for building innovative web applications and AI-driven solutions.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-4 reveal">
          <a 
            href="#projects" 
            className="bg-primary text-white hover:bg-primary/90 transition-colors duration-300 rounded-full px-8 py-3 font-medium"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="bg-white text-foreground hover:bg-secondary transition-colors duration-300 shadow-sm border border-border rounded-full px-8 py-3 font-medium"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
