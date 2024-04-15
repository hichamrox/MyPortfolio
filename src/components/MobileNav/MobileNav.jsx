import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
    const scrollToSection = (className) => {
        const section = document.querySelector(`.${className}`);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const redirectToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/hichamecharif/", "_blank");
    };

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <img className="logo" src="./assets/logo.svg" alt="" />
                    <ul>
                        <li>
                            <a className="menu-item" onClick={() => scrollToSection("hero-container")}>Home</a>
                        </li>
                        <li>
                            <a className="menu-item" onClick={() => scrollToSection("skills-container")}>Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" onClick={() => scrollToSection("experience-container")}>Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item" onClick={() => scrollToSection("contact-container")}>Contact Me</a>
                        </li>
                        <button className="contact-btn" onClick={redirectToLinkedIn}>Hire Me</button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
