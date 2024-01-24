// Skills.js
import React, { useState } from 'react';
import { SKILLS } from './utils/Data';
import SkillsCard from './composant/Skillscard/SkillsCard';
import './Skills.css';
import SkillsCardinfo from './composant/Skillscard/skillsinfocard/SkillsCardinfo';

function Skills() {
  const [selected, setselected] = useState(SKILLS[0]);

  const handleSelectSkills = (data) => {
    setselected(data);
  };

  return (
    <section className='skills-container'>
  <center>  <h1 className='h1'>Technical competence:</h1></center> 
      <br />
      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((data) => (
            <SkillsCard
              key={data.title}
              iconUrl={data.icon}
              title={data.title}
              skills={data.skills}
              isActive={selected.title === data.title}
              onClick={() => {
                handleSelectSkills(data);
              }}
            />
          ))}
        </div>
        <div className='skills-info'>
          <SkillsCardinfo 
          heading={selected.title} 
          skills={selected.skills}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
