import React, { useRef } from "react";
import "./WorkExperience.css";
import ExperienceCard from "./ExperinceCard/ExperienceCard";
import { WORK_EXPERIENCE } from "../../utils/data";
import Slider from "react-slick";

const WorkExperience = () => {
    const slideRef = useRef();

    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const nextSlide = () => {
        slideRef.current.slickNext();
    }

    const prevSlide = () => {
        slideRef.current.slickPrev();
    }

    return (
        <section className="experience-container">
            <h5>Work Experience</h5>
            <div className="experience-content">
                <div className="arrow-right" onClick={nextSlide}>
                    <img style={{color: "white"}} src='./src/assets/chevron_right.png' alt="chevron_right" />
                </div>
                <div className="arrow-left" onClick={prevSlide}>
                    <img src='./src/assets/chevron_left.png' alt="chevron_left" />
                </div>
                <Slider ref={slideRef} {...setting}>
                {WORK_EXPERIENCE.map((experience, index) => (
                    <ExperienceCard key={`experience-${index}`} experience={experience} />
                ))}
                </Slider>
            </div>
        </section>
    );
};

export default WorkExperience;