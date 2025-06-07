
import React, { useEffect } from 'react';

const About = () => {
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
  
  const skills = [
    { category: "Programming", items: ["Java", "JavaScript", "Python", "Data Structures and Algorithms"] },
    { category: "Frameworks", items: ["React", "Spring Boot", "Express.js", "Node.js"] },
    { category: "Web Technologies", items: ["HTML/CSS", "Responsive Design", "MongoDB", "MySQL"] }
  ];
  
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 reveal">About Me</div>
          <h2 className="section-title reveal stagger-1">My Journey</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance reveal stagger-2">
            I'm a passionate Full Stack Developer with expertise in MERN stack and a knack for building innovative digital solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-6 reveal">Who I Am</h3>
            <div className="space-y-4">
              <p className="text-foreground/70 reveal stagger-1">
                I'm a Computer Engineering graduate from PCET's Nutan Maharashtra Institute of Engineering and Technology with a strong foundation in full-stack development and a passion for creating impactful digital solutions.
              </p>
              <p className="text-foreground/70 reveal stagger-2">
                My journey includes leading teams to build AI-powered platforms, developing scalable backend architectures, and creating intuitive user interfaces that drive meaningful engagement.
              </p>
              <p className="text-foreground/70 reveal stagger-3">
                I believe in the power of technology to solve real-world problems and am particularly interested in the intersection of AI and web development, where I've successfully implemented solutions that improve user experiences and operational efficiency.
              </p>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6 reveal">Education</h3>
              <div className="space-y-4 reveal stagger-1">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-medium">Bachelor of Engineering in Computer Engineering</h4>
                  <p className="text-foreground/70">PCET's Nutan Maharashtra Institute of Engineering and Technology • 2023-2026</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-medium">Diploma in Computer Engineering</h4>
                  <p className="text-foreground/70">Government Polytechnic Awasari [KH] • 2020-2023 • 80%</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6 reveal">My Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skillGroup, index) => (
                  <div key={index} className={`reveal stagger-${index + 1}`}>
                    <h4 className="text-primary font-medium mb-3">{skillGroup.category}</h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-foreground/70 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 reveal">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 transform rotate-3"></div>
              <div className="absolute -inset-4 bg-secondary rounded-3xl -z-20 transform -rotate-3"></div>
              <div className="glass-panel rounded-2xl overflow-hidden">
                <div className="p-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M20 7h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                      <path d="M16 3h-5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5"></path>
                      <path d="M4 5v16"></path>
                    </svg>
                  </div>
                  <h4 className="text-center text-lg font-medium mb-2">Experience Highlights</h4>
                  <div className="space-y-4 mt-6">
                    <div>
                      <h5 className="font-medium">Team Lead | MERN Stack Intern</h5>
                      <p className="text-foreground/70 text-sm">UPTOSKILLS • December 2024 - March 2025</p>
                      <p className="text-foreground/70 text-sm mt-1">
                        Led a team to build "AI Interview," an AI-powered interview prep platform using the MERN stack.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium">Full Stack Development Intern</h5>
                      <p className="text-foreground/70 text-sm">NEUAI LABS • Dec 2024 - Jan 2025</p>
                      <p className="text-foreground/70 text-sm mt-1">
                        Built a full-stack Notes App using React and MongoDB with secure CRUD functionality.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium">Web Development Intern</h5>
                      <p className="text-foreground/70 text-sm">MIDBRAINS TECHNOLOGIES • July 2022 - Aug 2022</p>
                      <p className="text-foreground/70 text-sm mt-1">
                        Built responsive event pages with user registration and payment integration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
