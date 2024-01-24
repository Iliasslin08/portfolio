import React from 'react'
import './Work.css'
import {WORK_EXP } from '../../src/utils/Data'
import WorkCard from './WorkCard'
function Work() {

  return (
  
    <section className='experience-container'>
     <h1 className='h1'>Some project:</h1>
     <div className='experience-content'>
   {WORK_EXP.map((exp)=>(
    <WorkCard  details={exp}
    />
   ))}
     </div>
    
    </section>
  )
}

export default Work
