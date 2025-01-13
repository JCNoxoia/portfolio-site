import React, { useEffect, useState } from "react";
import SkillGrid from "./SkillGrid";
import FavAnalyzer from "./FavAnalyzer";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "../styles/About.css";

const About = ({ beverageChosen }) => {
    const [showTyped, setShowTyped] = useState(false);

    useEffect(() => {
        if (beverageChosen) {
            const timer = setTimeout(() => {
                setShowTyped(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [beverageChosen]);

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
            <div className="about-container">
                <div className="h-wrapper">
                    {showTyped && (
                        <ReactTyped
                            strings={[
                                'I\'m <span class="animated-name">Jaime</span>, nice to meet you!'
                            ]}
                            typeSpeed={40}
                            loop={false}
                            showCursor={true}
                            cursorChar={"|"}
                        />
                    )}
                </div>
                <div className="p-wrapper">
                    <p>I'm an aspiring web developer. I enjoy creating interactive content with pleasing and creative UX - though backend and data management are my favorite kinds of projects.</p>
                    <p>I love coding because it's a creative outlet and I find fulfillment in making tools and apps that could be used by others for a myriad of purposes.</p>
                </div>
                <SkillGrid />
                <FavAnalyzer />
            </div>
        </motion.div>
    );
};

export default About;