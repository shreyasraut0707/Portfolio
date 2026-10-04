import React from "react";
import "../styles/Publications.css";
import type { Publication } from "../types";

interface PublicationsProps {
  publications: Publication[];
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  if (!publications || publications.length === 0) {
    return null;
  }

  return (
    <section className="publications-section" id="publications">
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>
        
        <div className="publications-grid">
          {publications.map((pub) => (
            <div key={pub.id} className="publication-card">
              <div className="pub-header">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-subtitle">
                  Co-Author · Published {pub.date.split(" ")[1] || "2025"}
                </p>
                <p className="pub-journal">{pub.journal}</p>
                <p className="pub-volume">{pub.date.split(" ")[0]} {pub.date.split(" ")[1]} · {pub.volumeInfo}</p>
              </div>

              <div className="pub-areas">
                <h4 className="pub-section-heading">Research Areas</h4>
                <div className="pub-tags">
                  {pub.researchAreas.map((area, index) => (
                    <span key={index} className="pub-tag">{area}</span>
                  ))}
                </div>
              </div>

              <div className="pub-about">
                <h4 className="pub-section-heading">About the Research</h4>
                <p className="pub-description">{pub.description}</p>
              </div>

              <div className="pub-authors">
                <h4 className="pub-section-heading">Authors</h4>
                <p>{pub.authors}</p>
              </div>

              {pub.link && (
                <div className="pub-action">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-btn">
                    View Paper ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
