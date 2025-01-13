import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    const handleScroll = (id, offset = 0) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition + offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li id="about"><a onClick={() => handleScroll("about-section", -100)} href="#about-section">About</a></li>
                <li id="projects"><a onClick={() => handleScroll("projects-section", -50)} href="#projects-section">Projects</a></li>
                <li id="contact"><a onClick={() => handleScroll("contact-section", -50)} href="#contact-section">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;