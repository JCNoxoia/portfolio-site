import React from "react";
import Slider from "react-slick";
import { CustomPrevArrow, CustomNextArrow } from "./ProjCarouselArrows";
import dndPng from "../assets/images/dndchar.png";
import '../styles/ProjCarousel.css';

const ProjCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        centerMode: false,
        dots: false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    const projects = [
        {
            title: "D&D 5e Character Creator",
            image: dndPng,
            description: "A feature-rich application for creating, storing, and managing D&D characters.",
            link: ""
        },
        {
            title: "Your site here!",
            description: "I'm available for work! Contact me below and we'll make something awesome together.",
            link: ""
        }
    ];
    
    return (
        <div className="carousel-container">
            <div className="carousel-header">
                <h2>Here are a few projects I've done to give you an idea of what I can do!</h2>
            </div>
            <Slider {...settings} className="slider">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                    >
                        <h2>{project.title}</h2>
                        <img
                            src={project.image}
                            style={{
                                width: "420px",
                                height: "320px",
                                border: "4px solid black",
                                borderRadius: "25px"
                            }}/>
                        <p>{project.description}</p>
                        {project.title !== "Your site here!" && (
                            <a href={project.link}>Visit this site</a>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjCarousel;