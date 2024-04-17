import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text, isLink }) => {
  return (
    (isLink ) ?
    <div className="contact-details-card">
      <div className="contact-icon">
        <img src={iconUrl} alt={text} />
      </div>
      <a href={text}>{text}</a>
    </div>
      
     : 
      <div className="contact-details-card">
      <div className="contact-icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>{text}</p>
    </div>
    
  );
};

export default ContactInfoCard;
