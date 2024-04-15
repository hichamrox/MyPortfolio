import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ experience }) => {
    return (
        <div className="work-experience-card">
            <h6>{experience.title}</h6>
            <div className="work-duration">{experience.date}</div>
            <ul>
                {experience.responsabilities.map((duty, index) => (
                    <li key={`duty-${index}`}>{duty}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceCard