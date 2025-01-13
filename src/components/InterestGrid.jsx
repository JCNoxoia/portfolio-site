import React from "react";
import ReactDOM from 'react-dom';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBook, faSparkles, faDragon } from '@fortawesome/pro-solid-svg-icons';
import '../styles/InterestGrid.css';
import kkbIcon from '../assets/images/kkb-icon.png';
import redvoxIcon from '../assets/images/redvox-icon.png';
import crxIcon from '../assets/images/crx-icon.png';
import witcherIcon from '../assets/images/witcher-icon.png';
import hyperionIcon from '../assets/images/hyperion-icon.png';
import d20Icon from '../assets/images/d20.png';
import fahrenheitIcon from '../assets/images/fahrenheit.png';
import howlIcon from '../assets/images/howl.png';
import mzoIcon from '../assets/images/mzo.png';
import paperIcon from '../assets/images/paper.png';
import reactIcon from '../assets/images/react.png';
import vanillaIcon from '../assets/images/vanilla.png';

const interests = [
    {
        id: 1,
        name: "Music",
        details: [
            {
                intName: "KERO KERO BONITO",
                image: kkbIcon,
                description: "KKB's energy and positivity are infectious! My go-to for a bad day.",
            },
            {
                intName: "RED VOX",
                image: redvoxIcon,
                description: "Red Vox delivers emotional depth and thoughtful lyrics. Also, check out Vinny's Twitch!",
            },
            {
                intName: "CRX",
                image: crxIcon,
                description: "I sometimes listen to PEEK on loop for hours 🤩.",
            }
        ],
        icon: faMusic,
        colors: ["#FFCB2E", "#FFBE2D", "#FD9713"]
    },
    {
        id: 2,
        name: "Books",
        details: [
            {
                intName: "THE WITCHER",
                image: witcherIcon,
                description: "Sapkowski's compelling characters and emerserive atmosphere never fail to leave me enthralled. Also, Geralt to just so damn cool!",
            },
            {
                intName: "HYPERION",
                image: hyperionIcon,
                description: "I wasn't prepared for how bizarre this story was going to be when I first read it. Would recommend.",
            },
            {
                intName: "FAHRENHEIT 451",
                image: fahrenheitIcon,
                description: "Thought provoking, freighteningly foresighted, and delightfully meta."
            }
        ],
        icon: faBook,
        colors: ["#F28B89", "#F55D51", "#CB3633"]
    },
    {
        id: 3,
        name: "Misc. Hobbies",
        details: [
            {
                intName: "D&D",
                image: d20Icon,
                description: "I enjoy problem-solving and strategic thinking wrapped up in a good narrative. Not to mention all the dopemenergic little numbers everywhere."
            },
            {
                intName: "CREATIVE WRITING",
                image: paperIcon,
                description: "✋ I swear I only use ChatGPT for editorial revisions!"
            },
            {
                intName: "SOFTWARE DEVELOPMENT",
                image: reactIcon,
                description: "But you knew that already, didn't you..."
            }
        ],
        icon: faDragon,
        colors: ["#B2DCB4", "#78BA7B", "#409143"]
    },
    {
        id: 4,
        name: "Some Favorite Things",
        details: [
            {
                intName: "FAVORITE WORD",
                image: vanillaIcon,
                description: "Vanilla! Rolls off the tongue and tastes yummy to boot."
            },
            {
                intName: "FAVORITE DRINK",
                image: mzoIcon,
                description: "Monster Zero Ultra. Surely another one won't kill me..."
            },
            {
                intName: "FAVORITE MOVIE",
                image: howlIcon,
                description: "Howl's Moving Castle. \"She likes my spark!\""
            }
        ],
        icon: faSparkles,
        colors: ["#E9CCEC", "#CC95D7", "#AA4BBC"]
    }
];

const InterestGrid = ({ setSelectedInterest, selectedInterest }) => {
    return (
        <div className="interest-grid">
            {interests.map((interest) => (
                <div className="btn-wrapper" key={interest.id}>
                    <motion.button
                        className="interest-btn"
                        key={interest.id}
                        onClick={() => setSelectedInterest(interest)}
                        initial={{ scale: 1 }}
                        animate={{ scale: selectedInterest?.id === interest.id ? 0 : 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FontAwesomeIcon
                            icon={interest.icon}
                            className="interest-icon"
                            style={{
                                color: interest.colors[1]
                            }}
                        />
                    </motion.button>
                </div>
            ))}
        </div>
    );
};

export default InterestGrid;