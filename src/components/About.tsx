import React from 'react';

const About = () => {
  const certifications = [
    {
      name: "React Front-End Developer",
      provider: "Adacode Solutions",
      year: "2024",
      icon: "fab fa-react"
    }
  ];

  const highlights = [
    {
      icon: "fas fa-code",
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: "fas fa-users",
      title: "Team Collaboration",
      description: "Experience working in Agile/Scrum environments"
    },
    {
      icon: "fas fa-rocket",
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      description: "Creating seamless experiences across all devices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate frontend developer dedicated to creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Hello! I'm a Frontend Developer
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 1 year of professional experience at Bistux Solution Pvt. Ltd., 
                  I specialize in building modern, responsive web applications using React, 
                  TypeScript, and cutting-edge frontend technologies.
                </p>
                <p>
                  My journey in web development started with a passion for creating intuitive 
                  user interfaces and has evolved into expertise in full-stack development. 
                  I enjoy collaborating in Agile teams and am always eager to learn new 
                  technologies and best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest UI/UX trends, 
                  contributing to open-source projects, or experimenting with new JavaScript 
                  frameworks and libraries.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                What I Bring
              </h3>
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-accent rounded-lg hover:shadow-portfolio transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">
                      <i className={`${highlight.icon} text-2xl text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Certifications
            </h3>
            <div className="flex justify-center gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-6 px-6 bg-card border border-border rounded-lg hover:shadow-portfolio transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <i className={`${cert.icon} text-3xl text-primary`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-muted-foreground">{cert.provider}</p>
                    <p className="text-sm text-muted-foreground">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;