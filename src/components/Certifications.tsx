import React from "react";
import "../styles/Certifications.css";

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  details?: string;
  link?: string;
}

interface CertificationsProps {
  certifications: CertificationItem[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certifications-content">
          <div className="certifications-grid">
            {certifications.map((cert) =>
              cert.link ? (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-item certification-clickable"
                >
                  <div className="cert-icon">📜</div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  {cert.details && (
                    <p className="cert-details">{cert.details}</p>
                  )}
                </a>
              ) : (
                <div key={cert.id} className="certification-item">
                  <div className="cert-icon">📜</div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  {cert.details && (
                    <p className="cert-details">{cert.details}</p>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
