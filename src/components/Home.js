import React from 'react'
import hmBackground from '../assets/home-bg.jpg'
import home01 from "../assets/home-01.jpg"


export default function Home() {

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
    
<div className="flex-container">
  <div className="flex-item-left">      
    <img src={hmBackground} alt="Descriptive Text" className="img-fluid" style={{maxHeight:'450px', minWidth:'400px', boxShadow: '1px 1px 10px 0px grey'}} />
  </div>
  <div className="flex-item-right" style={{color:'#14274C'}}>
  <h5 >WHO WE ARE</h5>
      <h2>INNOVATION MEETS EXCELLENCE IN HOME AUTOMATION TECHNOLOGY</h2>
      <h5 className='text-dark fw-light'>Smartblink transforms homes into intelligent, connected spaces, enhancing comfort, security, 
        and efficiency with innovative, user-friendly automation technology, empowering homeowners to optimize their living environments.
      </h5>

 
  </div>
</div> 


      
  </>
)};