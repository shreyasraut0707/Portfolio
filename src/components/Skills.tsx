import React from "react";
import "../styles/Skills.css";

interface SkillsProps {
  skills: Array<{
    category: string;
    items: string[];
  }>;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Expertise in modern technologies and tools
        </p>

        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
