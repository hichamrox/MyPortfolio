import React from "react";
import "./SkillsInfoCard.css";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skills.map((skill, index) => (
          <React.Fragment key={`skill-${index}`}>
            <div className="skill-info">
              <p>{skill.skill}</p>
              <p className="percentage">{skill.percentage}</p>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: skill.percentage }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
