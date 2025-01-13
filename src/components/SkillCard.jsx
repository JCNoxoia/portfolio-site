import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import '../styles/SkillCard.css';

const SkillCard = ({ image, name, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="card-wrapper"
            style={{
                borderRadius: "50%",
                aspectRatio: "1/1",
                backgroundSize: "300% 300%",
                backgroundImage: `linear-gradient(90deg, rgb(169, 241, 193), rgb(89, 201, 201), rgb(50, 197, 99))`,
                backgroundPosition: "0% 50%",
            }}
            onMouseEnter={() => setIsHovered(true)} // Trigger hover
            onMouseLeave={() => setIsHovered(false)} // Reset on hover end
            animate={{
                scale: isHovered ? 1.1 : 1,
                backgroundPosition: isHovered
                    ? ["0% 50%", "100% 50%", "0% 50%"] // Animate background
                    : "0% 50%", // Reset to static
            }}
            transition={{
                scale: { duration: 0.3 }, // Smooth scale
                backgroundPosition: isHovered
                    ? { duration: 0.8, repeat: Infinity, ease: "linear" } // Loop on hover
                    : { duration: 0.3 }, // Reset quickly
            }}
        >
            <div className="skill-card">
                <img src={image} alt={name} className="skill-card-image" />
                <div className="skills-tooltip">{name}: {description}</div>
            </div>
        </motion.div>
    );
};

export default SkillCard;