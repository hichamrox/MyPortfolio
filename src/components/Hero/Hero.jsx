import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          As a passionate Fullstack Developer, I specialize in transforming ideas
          into captivating digital experiences. With a keen eye for design and a
          mastery of cutting-edge technologies, I am dedicated to creating
          user-centric interfaces that not only meet but exceed expectations.
          From concept to implementation, I thrive on turning innovative
          concepts into functional and visually stunning web applications. Let's
          collaborate to bring your vision to life and make an impact in the
          digital world.
        </p>
      </div>
      <div className="hero-right-content">
        <img src="./public/hicham.png" alt="hicham" />
        <div className="hero-icons">
          <div className="tech-icon">
            <img src="./public/html.png" alt="html" />
          </div>
          <div className="tech-icon">
            <img src="./public/css.png" alt="css" />
          </div>
          <div className="tech-icon">
            <img src="./public/js.png" alt="javascript" />
          </div>
          <div className="tech-icon">
            <img src="./public/ts.png" alt="typescript" />
          </div>
          <div className="tech-icon">
            <img src="./public/react.png" alt="react" />
          </div>
          <div className="tech-icon">
            <img src="./public/flutter.png" alt="flutter" />
          </div>
          <div className="tech-icon">
            <img src="./public/nodejs.png" alt="nodejs" />
          </div>
          <div className="tech-icon">
            <img src="./public/nest.svg" alt="nest" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
