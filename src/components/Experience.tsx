import React from 'react';

const Experience = () => {
  const experience = {
    company: "Bistux Solution Pvt. Ltd.",
    position: "Frontend Developer",
    location: "India",
    period: "Jun 2024 – Present",
    duration: "1+ years",
    description: "Leading frontend development initiatives at a growing technology company, focusing on React-based applications and modern web technologies.",
    achievements: [
      {
        icon: "fas fa-chart-line",
        title: "Increased User Engagement",
        description: "Improved user engagement by 30% through optimized UI/UX implementations and responsive design patterns",
        impact: "30% increase"
      },
      {
        icon: "fas fa-clock",
        title: "Development Efficiency",
        description: "Reduced development cycles by 15% by implementing reusable component libraries and establishing coding standards",
        impact: "15% faster delivery"
      },
      {
        icon: "fas fa-users",
        title: "Team Collaboration",
        description: "Successfully collaborated with cross-functional teams in Agile environment, participating in daily standups and sprint planning",
        impact: "Agile methodology"
      },
      {
        icon: "fas fa-code",
        title: "Code Quality",
        description: "Maintained high code quality standards through code reviews, testing, and following best practices in React and TypeScript",
        impact: "95% code coverage"
      },
      {
        icon: "fas fa-mobile-alt",
        title: "Responsive Design",
        description: "Delivered pixel-perfect responsive designs that work seamlessly across all devices and screen sizes",
        impact: "100% mobile compatibility"
      },
      {
        icon: "fas fa-rocket",
        title: "Performance Optimization",
        description: "Optimized application performance through code splitting, lazy loading, and efficient state management",
        impact: "40% faster load times"
      }
    ],
    responsibilities: [
      "Developing and maintaining React-based web applications using TypeScript",
      "Implementing responsive designs with Tailwind CSS and Material-UI",
      "Collaborating with UI/UX designers to create pixel-perfect interfaces",
      "Integrating RESTful APIs and managing application state",
      "Writing clean, maintainable code following industry best practices",
      "Participating in code reviews and mentoring junior developers",
      "Optimizing applications for performance and accessibility",
      "Working in Agile/Scrum development methodology"
    ],
    technologies: [
      "React", "TypeScript", "JavaScript", "HTML5", "CSS3",
      "Tailwind CSS", "Material-UI", "Bootstrap", "Sass",
      "Firebase", "Git", "GitHub", "Webpack", "Vite"
    ]
  };

  const education = {
    degree: "Full Stack Web Development",
    university: "AdaCode Solutions",
    location: "Online",
    period: "Jan 2024 – Apr 2024",
    coursework: [
      "HTML, CSS, JavaScript",
      "React.js",
      "Node.js & Express",
      "MongoDB",
      "REST APIs",
      "Git & GitHub",
      "Deployment"
    ]
  };


  return (
    <section id="experience" className="py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional journey and academic background that shaped my expertise
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <div className="bg-card border border-border rounded-lg p-8 shadow-portfolio">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {experience.position}
                  </h3>
                  <div className="flex items-center space-x-2 text-lg text-muted-foreground mb-2">
                    <i className="fas fa-building"></i>
                    <span>{experience.company}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <i className="fas fa-calendar"></i>
                    <span>{experience.period}</span>
                    <span>•</span>
                    <span className="font-semibold text-primary">{experience.duration}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">
                    <i className="fas fa-briefcase mr-2"></i>
                    Current Position
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {experience.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-foreground mb-6">
                  <i className="fas fa-trophy mr-2"></i>
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {experience.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <i className={`${achievement.icon} text-primary-foreground`}></i>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h5>
                        <p className="text-sm text-muted-foreground mb-2">
                          {achievement.description}
                        </p>
                        <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded">
                          {achievement.impact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-foreground mb-6">
                  <i className="fas fa-tasks mr-2"></i>
                  Key Responsibilities
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <i className="fas fa-check text-primary mt-1 flex-shrink-0"></i>
                      <span className="text-muted-foreground">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  <i className="fas fa-code mr-2"></i>
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-portfolio">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {education.degree}
                  </h3>
                  <div className="flex items-center space-x-2 text-lg text-muted-foreground mb-2">
                    <i className="fas fa-university"></i>
                    <span>{education.university}</span>
                    <span>•</span>
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <i className="fas fa-calendar"></i>
                    <span>{education.period}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-semibold">
                    <i className="fas fa-graduation-cap mr-2"></i>
                    Course
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  <i className="fas fa-book mr-2"></i>
                  Relevant Coursework
                </h4>
                <div className="grid md:grid-cols-3 gap-2">
                  {education.coursework.map((course, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <i className="fas fa-circle text-primary text-xs"></i>
                      <span className="text-muted-foreground">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;