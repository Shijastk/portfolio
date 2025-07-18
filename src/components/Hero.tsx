import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-lg sm:text-xl mb-4 opacity-90">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Frontend Developer
          </h1>
          
          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-8 opacity-90 font-light">
            Crafting Seamless Web Experiences with React & TypeScript
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Frontend Developer with 1+ years of experience at Bistux Solution Pvt. Ltd. 
            Specialized in React, TypeScript, and modern web technologies. 
            Passionate about creating user-centric applications that make a difference.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-portfolio-lg"
            >
              <i className="fas fa-code mr-2"></i>
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Me
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/Shijastk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-110 transition-transform duration-200 opacity-80 hover:opacity-100"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shijas-tk-a17176330/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-110 transition-transform duration-200 opacity-80 hover:opacity-100"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:shijasmuhammed573@gmail.com"
              className="text-2xl hover:scale-110 transition-transform duration-200 opacity-80 hover:opacity-100"
              aria-label="Email Contact"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-primary-foreground opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Scroll to about section"
            >
              <i className="fas fa-chevron-down text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;