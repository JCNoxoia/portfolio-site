import React from 'react';
import SkillCard from './SkillCard';
import '../styles/SkillGrid.css';
import mernPNG from '../assets/images/mern.png';
import rdbPNG from '../assets/images/rdb.png';
import apiPNG from '../assets/images/api.png';
import uxPNG from '../assets/images/ux.png';

const skills = [
  { name: "MERN", image: mernPNG, description: "My focus has been on learning React and MDB through solo projects and I'm eager to hone my skills with Express and Node.js to diversify my backend skills." },
  { name: "Relational Databases", image: rdbPNG, description: "I have 4 years of experience developing in Quickbase, and in that time I've learned to create and manage complex relational databases. I'm aiming to master nonrelational databases to the same degree." },
  { name: "APIs", image: apiPNG, description: "Years of work as a database admin have required many API connections to be built. My specialty is REST, and I have some experience building API backends and endpoints." },
  { name: "UX", image: uxPNG, description: "I believe I have a knack for good user experience. I always go the extra step to ensure my apps feel easy and intuitive to use." }
];

const SkillGrid = () => {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          image={skill.image}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </div>
  );
};

export default SkillGrid;
