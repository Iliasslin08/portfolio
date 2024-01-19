import React from "react";
import './SkillsCardinfo.css';

function SkillsCardinfo({ heading, skills }) {
  return (
    <>
     <div className="skills-info-card">
      <h1>{heading}</h1>
      <div className="skills-info-content">
        {skills.map((skill) => (
          
          <div key={skill.name} className="skill-info">
            <p>{skill.name}</p>
            <div className="skill-progress-bg"> 
          <div className="skill-progress" style={{width:skill.percentage}}>
          </div>
      </div> 
  
      <p className="per">{skill.percentage}</p>
          </div>
          
          
        ))}
      </div>
     
       </div>
    </>
   
   
  );
}

export default SkillsCardinfo;
