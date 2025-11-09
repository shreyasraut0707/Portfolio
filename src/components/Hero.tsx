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
            Undergraduate in AISSMS IOIT || Artificial Intelligence and Data
            Science || Diploma in Computer Engineering
          </p>
          <div className="hero-bio">
            <p>
              AI and Data Science student with strong skills in Python, C/C++,
              SQL, and generative AI technologies. Experienced in machine
              learning, deep learning, computer vision, and NLP, with hands-on
              projects and publication experience. Passionate about building
              scalable AI solutions that solve real-world problems.
            </p>
          </div>
          <div className="hero-cta">
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
                Data Science Intern @ Unified Mentor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
