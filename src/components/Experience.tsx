import React from "react";
import "../styles/Experience.css";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  type?: string;
  link?: string;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey</p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => {
            const ContentTag = exp.link ? "a" : "div";
            const linkProps = exp.link
              ? {
                  href: exp.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "experience-content experience-clickable",
                }
              : {
                  className: "experience-content",
                };

            return (
              <div key={exp.id} className="experience-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index !== experiences.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>
                <ContentTag {...linkProps}>
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">
                        {exp.title}
                        {exp.link && (
                          <span
                            className="experience-external-icon"
                            title="View Certificate"
                          >
                            ↗
                          </span>
                        )}
                      </h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <div className="experience-badges">
                      {exp.link && (
                        <span className="experience-cert-badge">
                          📜 Certificate
                        </span>
                      )}
                      {exp.type && (
                        <span className="experience-badge">{exp.type}</span>
                      )}
                    </div>
                  </div>
                  <div className="experience-meta">
                    <span className="meta-item">{exp.duration}</span>
                    <span className="meta-item">{exp.location}</span>
                  </div>
                  <ul className="experience-description">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  {exp.link && (
                    <div className="experience-cert-footer">
                      <span className="cert-view-btn">
                        View Internship Completion Certificate ↗
                      </span>
                    </div>
                  )}
                </ContentTag>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
