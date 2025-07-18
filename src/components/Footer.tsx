import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/Shijastk",
      ariaLabel: "Visit my GitHub profile"
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/shijas-tk-a17176330/",
      ariaLabel: "Connect with me on LinkedIn"
    },
    {
      name: "Email",
      icon: "fas fa-envelope",
      url: "mailto:shijasmuhammed573@gmail.com",
      ariaLabel: "Send me an email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand/Logo Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Frontend Developer</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Passionate about creating exceptional digital experiences with modern 
              web technologies. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.ariaLabel}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200 group"
                >
                  <i className={`${social.icon} text-lg group-hover:scale-110 transition-transform duration-200`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <i className="fas fa-envelope w-4"></i>
                <a 
                  href="mailto:shijasmuhammed573@gmail.com"
                  className="hover:text-primary-foreground transition-colors duration-200"
                >
                  shijasmuhammed573@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <i className="fas fa-phone w-4"></i>
                <a 
                  href="tel:+911234567890"
                  className="hover:text-primary-foreground transition-colors duration-200"
                >
                  +91-894-343-5546
                </a>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <i className="fas fa-map-marker-alt w-4"></i>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Frontend Developer Portfolio. All rights reserved.
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-primary-foreground/60">
                Built with React & TypeScript
              </span>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 group"
                aria-label="Scroll to top"
              >
                <span>Back to top</span>
                <i className="fas fa-chevron-up group-hover:-translate-y-1 transition-transform duration-200"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="h-1 bg-gradient-to-r from-primary-foreground/20 via-primary-foreground/60 to-primary-foreground/20"></div>
    </footer>
  );
};

export default Footer;