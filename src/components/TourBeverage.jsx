import React, { useState, useEffect } from "react";
import "../styles/TourBeverage.css";
import coffeeImage from "../assets/images/coffee.png";
import teaImage from "../assets/images/tea.png";

const TourBeverage = ({ onChoice }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [selectedBeverage, setSelectedBeverage] = useState(null);
    const [areButtonsVisible, setAreButtonsVisible] = useState(true);

    useEffect(() => {
        console.log("selectedBeverage:", selectedBeverage);
        // if (selectedBeverage === null) return;

        if (!selectedBeverage) {
            // Lock scrolling
            document.body.style.overflow = "hidden";
        } else {
            // Unlock scrolling
            document.body.style.overflow = "";
        }

        // Cleanup in case the component unmounts
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedBeverage]);

    const handleChoice = (beverage) => {
        setIsFadingOut(true);
        console.log(`You chose: ${beverage}`);
        setSelectedBeverage(beverage);
        setAreButtonsVisible(false);

        setTimeout(() => {
            console.log("Setting isVisible to false after timeout.");
            setIsVisible(false);
            onChoice(beverage);
        }, 100);
    };

    return (
        <>
            <div className={`img-container ${
                selectedBeverage ? "hide" : ""
            }`}>
                <img
                    className={`bev-coffee ${
                        selectedBeverage === "coffee"
                        ? "float"
                        : selectedBeverage && selectedBeverage !== "coffee"
                        ? "fade-out hide"
                        : ""
                    }`}
                    src={coffeeImage}
                    alt="coffee"
                    onClick={() => console.log("Class for coffee:", selectedBeverage)}
                />
                <img
                    className={`bev-tea ${
                        selectedBeverage === "tea"
                        ? "float"
                        : selectedBeverage && selectedBeverage !== "tea"
                        ? "fade-out hide"
                        : ""
                    }`}
                    src={teaImage}
                    alt="tea"
                    onClick={() => console.log("Class for coffee:", selectedBeverage)}
                />
            </div>
            <div
                className={`overlay ${isFadingOut ? "hidden" : "visible"}`}
                aria-hidden={!isVisible}
            >
                <div className="beverage-choice">
                    <div className="headers">
                        <h1>Hi there! Thanks for visiting my site.</h1>
                        <h3>Can I get you a drink for your tour?</h3>
                    </div>
                    <div className="bevBody">
                        <div className={`choice-buttons ${areButtonsVisible ? "" : "hidden"}`}>
                            <button onClick={() => handleChoice("coffee")}>COFFEE</button>
                            <button onClick={() => handleChoice("tea")}>TEA</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TourBeverage;