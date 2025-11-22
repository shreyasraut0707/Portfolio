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

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  details?: string;
  link?: string;
}

interface EducationProps {
  education: EducationItem[];
  certifications: CertificationItem[];
}

const Education: React.FC<EducationProps> = ({ education, certifications }) => {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        {/* Education */}
        <div className="education-content">
          <h3 className="subsection-title">Education</h3>
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

        {/* Certifications */}
        <div className="certifications-content">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-item">
                <div className="cert-icon">📜</div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                {cert.details && <p className="cert-details">{cert.details}</p>}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
