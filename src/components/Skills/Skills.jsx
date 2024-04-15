import React, { useState } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard";
import { SKILLS } from "../../utils/data";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.title}
              iconUrl={skill.icon}
              title={skill.title}
              isActive={skill.title === selectedSkill.title}
              onClick={() => handleSelectedSkill(skill)}
            />
          ))}
        </div>
        <SkillsInfoCard
          heading={selectedSkill.title}
          skills={selectedSkill.skills}
        />
      </div>
    </section>
  );
};
export default Skills;
