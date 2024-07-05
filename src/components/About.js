import React from 'react'
import hmBackground from '../assets/home-bg.jpg';


const About = () => {
  return (
    <div>
      <div className="image-container">
      <img src={hmBackground} alt="Descriptive Text" className="image" />
      <div className="overlay">
        <div className='overlay-text'>
        <h1 className='display-2'>HELP CENTER</h1>
        <p className='body-1 text-break text-wrap'>SmartBlibk is dedicated to transform ordinary homes into smart homes, making life more convenient, secure and energy-efficient</p>
        </div>        
      </div>
    </div>
    </div>
  )
}

export default About
