import React from 'react';
import './hero.css';

function Hero() {
  return (
    <div>
      <section className='hero-container'>
        <div className='hero-content'>
          <h1 className='display-4'>Hello everyone, I'm LINBOUI ILIASS, I am a Full Stack developer</h1>
          <p className='lead'>
            Welcome to my website, which provides you with a summary of my humble career!
          </p>
        </div>
        <div className='hero-img'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='tech-icon'>
                <img className='imgwith' src='./assets/image/js.png' alt='JavaScript' />
              </div>
            </div>
            <div className='col-md-6'>
              <img className='imgwith1' src='./assets/image/cvv.jpg' alt='CVV' />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='tech-icon'>
                <img className='imgwith' src='./assets/image/html-5.png' alt='HTML' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='tech-icon'>
                <img className='imgwith' src='./assets/image/atom.png' alt='Atom' />
              </div>
            </div>
          </div>
          
        </div>
        
      </section>
    </div>
  );
}

export default Hero;
