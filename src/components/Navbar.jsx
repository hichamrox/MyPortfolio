import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

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
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src='./public/mylogo.png' alt="logo" />
                    <ul>
                        <li>
                            <a className="nav-item" onClick={() => scrollToSection("hero-container")}>Home</a>
                        </li>
                        <li>
                            <a className="nav-item" onClick={() => scrollToSection("skills-container")}>Skills</a>
                        </li>
                        <li>
                            <a className="nav-item" onClick={() => scrollToSection("experience-container")}>Work Experience</a>
                        </li>
                        <li>
                            <a className="nav-item" onClick={() => scrollToSection("contact-container")}>Contact Me</a>
                        </li>
                        <button className="contact-btn" onClick={redirectToLinkedIn}>Hire Me</button>
                    </ul>
                    <img className="burger-btn" src="./public/burger.png" alt="menu" onClick={toggleMenu} />
                </div>
            </nav>
        </>
    )
}

export default Navbar;
