import React, { useState } from "react";
import '../styles/InterestDisplay.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';

const InterestDisplay = ({ selectedInterest }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isHoveredLeft, setIsHoveredLeft] = useState(false);
    const [isClickedLeft, setIsClickedLeft] = useState(false);
    const getColorLeft = () => {
        if (isClickedLeft) return '#d1b11f';
        if (isHoveredLeft) return '#f0cd31';
        return '#1d3557';
      };

    const [isHoveredRight, setIsHoveredRight] = useState(false);
    const [isClickedRight, setIsClickedRight] = useState(false);
    const getColorRight = () => {
        if (isClickedRight) return '#d1b11f';
        if (isHoveredRight) return '#f0cd31';
        return '#1d3557';
      };

    if (!selectedInterest) {
        return (
            <div className="interest-display">
                <div className="icon-drop">
                    {selectedInterest && (
                        <FontAwesomeIcon
                            icon={selectedInterest.icon}
                            className="icon-drop-icon"
                        />
                    )}
                </div>
                <p className="subinterest-carousel-p" style={{fontWeight: "bold"}}>Select an intrest card for details!</p>
            </div>
        )
    }
    
    const gradientStyle = (colors) => 
        `linear-gradient(135deg, ${selectedInterest.colors[0]}, ${selectedInterest.colors[1]}, ${selectedInterest.colors[2]})`;

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % selectedInterest.details.length
        );
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + selectedInterest.details.length) %
            selectedInterest.details.length
        );
    };

    const currentDetail = selectedInterest.details[currentIndex];
    
    return (
        <div className="interest-display">
            <motion.div
                className="icon-drop"
                initial={{
                    background: gradientStyle(["#ffffff", "#ffffff", "#ffffff"])
                }}
                animate={{
                    background: gradientStyle(selectedInterest.colors)
                }}
                transition={{
                    duration: 1
                }}
            >
                {selectedInterest && (
                        <motion.div
                        key={selectedInterest.id}
                            className="fa-icon-wrapper"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FontAwesomeIcon
                                icon={selectedInterest.icon}
                                className="icon-drop-icon"
                            />
                        </motion.div>
                )}
            </motion.div>
            <div className="subinterest-carousel">
                <h2>{currentDetail.intName}</h2>
                <div className="img-wrapper">
                    <motion.img
                        key={currentDetail.image}
                        src={currentDetail.image}
                        alt={currentDetail.name}
                        className="subinterest-carousel-image"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        style={{ width: '150px', height: '150px', borderRadius: '20px' }} 
                    />
                </div>
                <p className="subinterest-carousel-p">{currentDetail.description}</p>
                <div className="subinterest-carousel-nav">
                    <button
                        onClick={handlePrev}
                        style={{
                            color: getColorLeft(),
                            transition: 'color 0.1s ease, transform 0.1s ease',
                            transform: isHoveredLeft ? 'scale(1.2)' : 'scale(1)',
                        }}
                        onMouseEnter={() => setIsHoveredLeft(true)}
                        onMouseLeave={() => {
                            setIsHoveredLeft(false);
                            setIsClickedLeft(false);
                        }}
                        onMouseDown={() => setIsClickedLeft(true)}
                        onMouseUp={() => setIsClickedLeft(false)}
                    >
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            size="2x"
                            />
                    </button>
                    <button
                        onClick={handleNext}
                        style={{
                            color: getColorRight(),
                            transition: 'color 0.1s ease, transform 0.1s ease',
                            transform: isHoveredRight ? 'scale(1.2)' : 'scale(1)',
                        }}
                        onMouseEnter={() => setIsHoveredRight(true)}
                        onMouseLeave={() => {
                            setIsHoveredRight(false);
                            setIsClickedRight(false);
                        }}
                        onMouseDown={() => setIsClickedRight(true)}
                        onMouseUp={() => setIsClickedRight(false)}
                    >
                        <FontAwesomeIcon icon={faChevronRight} size="2x" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InterestDisplay;
