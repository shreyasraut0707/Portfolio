import React from "react";
import "../styles/Education.css";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  details: string[];
  link?: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        {/* Education */}
        <div className="education-content">
          <div className="education-list">
            {education.map((edu) => (
              <div key={edu.id} className="education-item">
                <div className="education-icon">🎓</div>
                {edu.link ? (
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-details education-clickable"
                  >
                    <h4 className="degree-title">{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <div className="education-meta">
                      <span>{edu.duration}</span>
                      <span>{edu.location}</span>
                    </div>
                    {edu.details.length > 0 && (
                      <ul className="education-details-list">
                        {edu.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </a>
                ) : (
                  <div className="education-details">
                    <h4 className="degree-title">{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <div className="education-meta">
                      <span>{edu.duration}</span>
                      <span>{edu.location}</span>
                    </div>
                    {edu.details.length > 0 && (
                      <ul className="education-details-list">
                        {edu.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
