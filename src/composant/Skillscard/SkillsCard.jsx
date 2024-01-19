// SkillsCard.js
import React from 'react';
import './SkillsCard.css';

function SkillsCard({ title, iconUrl, isActive, onClick }) {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className='skills-icon'>
        
        <img className='qq' src={iconUrl} alt={title} />
      </div>
     <span className='aa'><h1>{title}</h1></span>
    
    </div>
  );
}

export default SkillsCard;
