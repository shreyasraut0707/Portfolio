import React from "react";
import "../styles/Hero.css";

interface HeroProps {
  profileImage: string;
}

const Hero: React.FC<HeroProps> = ({ profileImage }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-image-wrapper">
          <img
            src={profileImage}
            alt="Shreyas Raut"
            className="profile-image"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Shreyas Raut</h1>
          <p className="hero-subtitle">
            Jr Software Engineer @ Zensar Technologies | AI/ML | Java | Generative AI
          </p>
          <div className="hero-bio">
            <p>
              AI & Data Science graduate with hands-on experience in AI/ML, Generative AI, Java Full Stack Development, and backend development. Currently working as a Jr Software Engineer, G0 at Zensar Technologies, contributing to AI-driven and full-stack applications using Python, Java, Spring Boot, React, and RESTful APIs. Experienced in building scalable applications, AI/ML solutions, and LLM-based applications, with a strong foundation in software development and problem-solving.
            </p>
          </div>
          <div className="hero-cta">
            <a
              href="/Shreyas_Raut (2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button resume"
            >
              <span>Resume</span>
            </a>
            <a
              href="https://github.com/shreyasraut0707"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button github"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/shreyas-raut-ba1103297"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button linkedin"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:shreyasraut0007@gmail.com"
              className="cta-button email"
            >
              <span>Email</span>
            </a>
          </div>
          <div className="hero-info">
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Pune, Maharashtra</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status:</span>
              <span className="info-value">
                Jr Software Engineer, G0 @ Zensar Technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
