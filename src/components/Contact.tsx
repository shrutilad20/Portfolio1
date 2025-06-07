
import React, { useEffect } from 'react';

const Contact = () => {
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
  
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 reveal">Get In Touch</div>
          <h2 className="section-title reveal stagger-1">Let's Work Together</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance reveal stagger-2">
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="space-y-8">
              <div className="reveal">
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <p className="text-foreground/70">
                  Have a project in mind or want to discuss potential opportunities? Here's how you can reach me.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 reveal stagger-1">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Phone</h4>
                    <p className="text-foreground/70">+91 8624011118</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 reveal stagger-2">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Email</h4>
                    <p className="text-foreground/70">shrutilad35@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 reveal stagger-3">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Location</h4>
                    <p className="text-foreground/70">Pimpri-Chinchwad, Pune, MH</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 reveal stagger-4">
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/shrutilad35" target="_blank" rel="noopener noreferrer" className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="pt-6 reveal stagger-5">
                <h3 className="text-xl font-semibold mb-4">Certifications & Awards</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                    <span>Programming Using Java</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                    <span>Data Structures and Algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                    <span>React</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                    <span>Participant in Infosys Pragati Program (07/2024 - 11/2024)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                    <span>2nd Rank at Project Competition - Foreign Language E-Learning Website</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 reveal">
            <form className="glass-panel rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
