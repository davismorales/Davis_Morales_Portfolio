import React, { useState } from "react";

import "./TechSkill.css";

function TechSkill(props) {
  const [isHovered, setIsHovered] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Add a delay of 300 milliseconds before removing hover effect
    timeoutId = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  return (
    <div className='tech-skill'>
      <div className='tech-skill-icon'>
        <img
          style={{ transform: isHovered ? "scale(1.25)" : "scale(1)" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={props.src}
          alt={props.alt}
        />
      </div>
      <div
        className='tech-skill-label'
        style={{ transform: isHovered ? "scale(1.25)" : "scale(0)" }}
      >
        {props.label}
      </div>
    </div>
  );
}

export default TechSkill;
