import React from 'react'
import home01 from "../assets/home-01.jpg"

const About = () => {
  return (
    <>
    <div className="image-container">
      <img src={home01} alt="Descriptive Text" className="image" />
      <div className="overlay">
        <div className='overlay-text'>
        <h5 className="heading">Your Overlay Text</h5>
        <h1 className='display-2'>TRANSFORM ORDINARY HOME INTO SMART HOME</h1>
        <p className='body-1 text-break text-wrap'>providing advanced automation solutions for lighting, security, climate control, and entertainment systems, all managed through a user-friendly smartphone app.</p>
        <button type="button" className="btn btn-outline-light">Check it Out</button>
        </div>        
      </div>
    </div>

    <div className="container"></div>
    <div className="container"></div>
    <div className="container"></div>
    </>
    

  )
}

export default About;