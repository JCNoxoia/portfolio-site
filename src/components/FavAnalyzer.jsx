import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import InterestGrid from "./InterestGrid";
import InterestDisplay from "./InterestDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/FavAnalyzer.css';

const FavAnalyzer = () => {
    const [selectedInterest, setSelectedInterest] = useState(null);

    return (
        <div className="analyzer-wrapper">
            <div className="analyzer-header">
                <p>Below you can learn about some of my favorite interests! These are the things that spark my creativity that I channel in to web design.</p>
            </div>
            <div className="analyzer-main">
                <div className="analyzer-grid">
                    <InterestGrid setSelectedInterest={setSelectedInterest} selectedInterest={selectedInterest} />
                </div>
                <div className="analyzer-display">
                    <InterestDisplay selectedInterest={selectedInterest} />
                </div>
            </div>
        </div>
    );
};

export default FavAnalyzer;