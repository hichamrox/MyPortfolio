import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
    <a href={text} target="_blank" rel="noreferrer">
      <div className="contact-icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>{text}</p>
    </a>
    </div>
  );
};

export default ContactInfoCard;
