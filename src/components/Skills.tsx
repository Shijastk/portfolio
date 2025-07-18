import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-code",
      skills: [
        { name: "HTML5", icon: "fab fa-html5", level: 95 },
        { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
        { name: "JavaScript (ES6+)", icon: "fab fa-js-square", level: 90 },
        { name: "React", icon: "fab fa-react", level: 95 },
        { name: "TypeScript", icon: "fas fa-code", level: 85 },
        { name: "Tailwind CSS", icon: "fas fa-paint-brush", level: 90 },
        { name: "Material-UI", icon: "fas fa-palette", level: 85 },
        { name: "Bootstrap", icon: "fab fa-bootstrap", level: 80 },
        { name: "Sass", icon: "fab fa-sass", level: 75 }
      ]
    },
    // {
    //   title: "Backend & Database",
    //   icon: "fas fa-server",
    //   skills: [
    //     { name: "Node.js", icon: "fab fa-node-js", level: 30 },
    //     { name: "Express.js", icon: "fas fa-server", level: 25 },
    //     { name: "REST API", icon: "fas fa-exchange-alt", level: 80 },
    //     { name: "MongoDB", icon: "fas fa-database", level: 60 },
    //     { name: "Firebase", icon: "fas fa-fire", level: 85 }
    //   ]
    // },
    {
      title: "Tools & Platforms",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", icon: "fab fa-git-alt", level: 85 },
        { name: "GitHub", icon: "fab fa-github", level: 90 },
        { name: "Webpack", icon: "fas fa-box", level: 70 },
        { name: "Vite", icon: "fas fa-bolt", level: 80 },
        { name: "npm/yarn", icon: "fab fa-npm", level: 85 },
        { name: "Figma", icon: "fab fa-figma", level: 75 }
      ]
    },
    {
      title: "Specializations",
      icon: "fas fa-star",
      skills: [
        { name: "Responsive Design", icon: "fas fa-mobile-alt", level: 95 },
        { name: "UI/UX Principles", icon: "fas fa-paint-brush", level: 80 },
        { name: "Web Accessibility (WCAG)", icon: "fas fa-universal-access", level: 85 },
        { name: "Performance Optimization", icon: "fas fa-tachometer-alt", level: 80 },
        { name: "Agile/Scrum", icon: "fas fa-users", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-card border border-border rounded-lg p-8 shadow-portfolio hover:shadow-portfolio-lg transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <i className={`${category.icon} text-primary-foreground text-xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      {/* Skill Name and Icon */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <i className={`${skill.icon} text-primary text-lg`}></i>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skill Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-accent rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-code text-primary-foreground text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Frontend Focus</h4>
              <p className="text-muted-foreground">
                Specialized in modern React development with TypeScript and responsive design
              </p>
            </div>

            <div className="text-center p-6 bg-accent rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-primary-foreground text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Performance</h4>
              <p className="text-muted-foreground">
                Optimizing applications for speed, accessibility, and user experience
              </p>
            </div>

            <div className="text-center p-6 bg-accent rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-primary-foreground text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Collaboration</h4>
              <p className="text-muted-foreground">
                Experienced in Agile development and cross-functional team collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;