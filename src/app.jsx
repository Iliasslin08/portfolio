import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Skills from './Skills'
import './app.css'
const app = () => {
  return (
    <div >
      <nav >
      <Navbar/>
      </nav>
      <Hero/>
   
        <Skills/>
     
      
    </div>
  )
}

export default app
