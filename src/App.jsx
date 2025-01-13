import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './styles/App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TourBeverage from "./components/TourBeverage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    const [beverageChosen, setBeverageChosen] = useState(false);
    const handleBeverageChoice = (beverage) => {
        console.log(`User chose: ${beverage}`);
        setBeverageChosen(true);
    };

    return (
        <div className="App">
            <TourBeverage onChoice={handleBeverageChoice} />
            <div className={`content ${beverageChosen ? "visible" : "hidden"}`}>
                <Navbar />
                <div className="sections-wrapper">
                    <div id="about-section" className="section-spacer"></div>
                    <About beverageChosen={beverageChosen} />
                    <div id="projects-section" className="section-spacer"></div>
                    <Projects  />
                    <div id="contact-section" className="section-spacer"></div>
                    <Contact  />
                    <div className="section-spacer"></div>
                </div>
            </div>
        </div>
    );
}

export default App;