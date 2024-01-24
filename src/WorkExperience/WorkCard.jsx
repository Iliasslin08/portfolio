import React from 'react'
import './WorkCard.css'
function WorkCard({details}) {
  
  return (
    <div className='all-container'>
    <div className='container'>
  <div className='projects'> 
    <img src={details.img} 
  className='images'
  />
  <h3 className='title'>{details.title}</h3>
  <p className='description'>{details.date}</p>

 <div className='links'>
  <a href={details.links} className='link'>
    Demo
  </a>
  <a href={details.git} className='link'>
    Git code
  </a>
 </div>
  </div>
  
</div>
<div className='text-projet'>
  <p>{details.text}</p>
</div>
    </div>


  )
}

export default WorkCard
