import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Netyora - Skill-Sharing Platform",
      period: "Jun 2024 – Dec 2024",
      description: "Built a comprehensive peer-to-peer learning platform enabling real-time video calls, messaging, and notifications. Implemented advanced skill-matching algorithms that improved pairing accuracy by 35%.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Material-UI", "WebRTC"],
      features: [
        "Real-time video calls with WebRTC integration",
        "Advanced skill-matching algorithm",
        "Real-time messaging system",
        "User profile management",
        "Notification system"
      ],
      impact: "35% improved pairing accuracy",
      github: "https://github.com/Shijastk/netyora_app",
      demo: "https://peppy-madeleine-72c4a8.netlify.app/",
      icon: "fas fa-users"
    },
    {
      title: "E-Commerce Website",
      period: "Sep 2024 – Nov 2024",
      description: "Developed a scalable e-commerce platform with modern design patterns, featuring dynamic search functionality and seamless payment integration. Optimized performance resulting in 20% faster load times.",
      technologies: ["React", "TypeScript", "Bootstrap", "JavaScript", "Payment Gateway"],
      features: [
        "Dynamic product search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment integration",
        "Responsive design across devices",
        "Admin dashboard for inventory management"
      ],
      impact: "20% faster load times",
      github: "https://github.com/Shijastk/ecommers",
      demo: "https://67cb1c3f486bf02dc1fc8980--spectacular-squirrel-1db9e1.netlify.app/",
      icon: "fas fa-shopping-cart"
    },
    {
      title: "Real-Time Result Display System",
      period: "Aug 2024 – Oct 2024",
      description: "Created a real-time data visualization platform with sub-100ms latency and full WCAG compliance. Features live data updates and interactive charts for comprehensive analytics.",
      technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript", "Chart.js"],
      features: [
        "Real-time data visualization",
        "Interactive charts and graphs",
        "WCAG-compliant accessibility",
        "Live data updates via WebSocket",
        "Export functionality for reports"
      ],
      impact: "<100ms latency, WCAG compliant",
      github: "https://github.com/Shijastk/realtime-results",
      demo: "https://jolly-salmiakki-36fbed.netlify.app/",
      icon: "fas fa-chart-line"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work and the impact I've created through code
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                {/* Project Info */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <i className={`${project.icon} text-primary-foreground text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground">{project.period}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="font-semibold text-primary">
                      <i className="fas fa-chart-line mr-2"></i>
                      Impact: {project.impact}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
                    >
                      <i className="fab fa-github mr-2"></i>
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Project Features */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="bg-card border border-border rounded-lg p-6 shadow-portfolio">
                    <h4 className="font-semibold text-foreground mb-4 text-lg">
                      <i className="fas fa-list-check mr-2"></i>
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3 text-muted-foreground"
                        >
                          <i className="fas fa-check text-primary mt-1 flex-shrink-0"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com/Shijastk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 transform hover:scale-105"
            >
              <i className="fab fa-github mr-2"></i>
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;