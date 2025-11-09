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
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index !== experiences.length - 1 && (
                  <div className="timeline-line"></div>
                )}
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  {exp.type && (
                    <span className="experience-badge">{exp.type}</span>
                  )}
                </div>
                <div className="experience-meta">
                  <span className="meta-item">📅 {exp.duration}</span>
                  <span className="meta-item">📍 {exp.location}</span>
                </div>
                <ul className="experience-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
