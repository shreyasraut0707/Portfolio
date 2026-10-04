import React from "react";
import "../styles/Achievements.css";
import type { Achievement } from "../types";

interface AchievementsProps {
  achievements: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  if (!achievements || achievements.length === 0) {
    return null;
  }

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <a
              key={achievement.id}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-card achievement-clickable"
            >
              <div className="achievement-icon">🌟</div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                {achievement.date && <span className="achievement-date">{achievement.date}</span>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
