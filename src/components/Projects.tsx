import React from "react";
import "../styles/Projects.css";

interface ProjectItem {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  duration: string;
  highlights: string[];
  link?: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Innovative solutions built with cutting-edge technologies
        </p>

        <div className="projects-grid">
          {projects.map((project) =>
            project.link ? (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card project-card-clickable"
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-duration">{project.duration}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ) : (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-duration">{project.duration}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
