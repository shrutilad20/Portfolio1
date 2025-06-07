
import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('.reveal').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const projects = [
    {
      title: "AI Interview",
      description: "An AI-powered real-time interview simulator providing personalized feedback and diverse question generation based on job profiles.",
      category: "MERN Stack",
      bgColor: "bg-blue-50",
      highlights: [
        "Developed frontend using React with state management",
        "Built backend APIs with Node.js",
        "Integrated AI-driven question generation algorithms",
        "Designed scoring algorithm for performance evaluation",
        "Improved usability by 25% through user testing"
      ]
    },
    {
      title: "Campus Bazaar",
      description: "A comprehensive marketplace for students to buy and sell used books, supporting 5,000+ monthly users.",
      category: "Full Stack",
      bgColor: "bg-purple-50",
      highlights: [
        "Developed advanced search functionality with filters",
        "Integrated Stripe API for secure payments",
        "Added user feedback and rating systems",
        "Implemented data security measures",
        "Improved user retention by 20%"
      ]
    },
    {
      title: "Foreign Language E-Learning Website",
      description: "A multilingual interactive platform for students to learn foreign languages with personalized lessons.",
      category: "Web Development",
      bgColor: "bg-green-50",
      highlights: [
        "Built with HTML, CSS, JavaScript, PHP, and Bootstrap",
        "Created adaptive learning system for personalized lessons",
        "Designed interactive quizzes and progress tracking",
        "Improved user engagement by 40%",
        "Increased completion rates by 20%"
      ]
    },
    {
      title: "Notes App",
      description: "A full-stack application for managing user notes with secure CRUD functionality using React and MongoDB.",
      category: "MERN Stack",
      bgColor: "bg-pink-50",
      highlights: [
        "Built using MongoDB, Express.js, React, and Node.js",
        "Implemented secure user authentication",
        "Created dynamic UI with React components",
        "Utilized state management for smooth transitions",
        "Reduced page reloads for better user experience"
      ]
    }
  ];
  
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 reveal">My Work</div>
          <h2 className="section-title reveal stagger-1">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance reveal stagger-2">
            Showcasing my experience in building full-stack applications, AI solutions, and responsive web platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card ${project.bgColor} reveal ${index % 2 === 0 ? 'stagger-1' : 'stagger-2'}`}
            >
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-6">{project.description}</p>
                
                <ul className="mb-6 space-y-1 text-sm">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-black/5">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    View Project
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="ml-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
