import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjCarousel from "./ProjCarousel";
import '../styles/Projects.css';

const Projects = () => {
    return (
        <motion.div
            className="about-background"
            style={{
                backgroundSize: "300% 300%",
                backgroundImage: `linear-gradient(90deg, rgb(169, 241, 193), rgb(89, 201, 201), rgb(50, 197, 99))`,
                backgroundPosition: "0% 50%"
            }}
            transition={{
                duration: 2.75, repeat: Infinity, ease: "linear" // Loop on hover
            }}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
        >
            <div className="projects-container">
                <ProjCarousel />
            </div>
        </motion.div>
    );
};

export default Projects;