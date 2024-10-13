import React from 'react';
import hmBackground from '../assets/home-bg.jpg';
import home01 from '../assets/home-01.jpg';
import home1 from '../assets/home-1.jpg';
import home2 from '../assets/home-2.jpeg';
import home3 from '../assets/home-3.png';
import icone1 from '../assets/icon1.png';
import icone2 from '../assets/icon2.png';
import icone3 from '../assets/icon3.png';
import icone4 from '../assets/icon4.png';
import icone5 from '../assets/icon5.png';
import icone6 from '../assets/icon6.png';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {

  return (
  <>

    <div className="image-container">
      <img src={home01} alt="Descriptive Text" className="image" />
      <div className="overlay">
        <div className='overlay-text'>
        <h5 className="heading">Your Overlay Text</h5>
        <h1 className='display-2 fw-bold'>TRANSFORM ORDINARY HOME INTO SMART HOME</h1>
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

    <div className="text-center">
  <h2 style={{ color: '#14274C' }}>FEATURES</h2>

  <div className="features">
    <div>
      <div className='features_containers'>
        <img src={icone1} alt='icone1' />
      </div>
      <div className='features_text'>
        Advanced Home Automation Solutions
      </div>
    </div>

    <div>
      <div className='features_containers'>
        <img src={icone2} alt='icone2' />
      </div>
      <div className='features_text'>
        Smart Lighting
      </div>
    </div>

    <div>
      <div className='features_containers'>
        <img src={icone3} alt='icone3' />
      </div>
      <div className='features_text'>
        Security System
      </div>
    </div>

    <div>
      <div className='features_containers'>
        <img src={icone4} alt='icone4' />
      </div>
      <div className='features_text'>
        Entertainment
      </div>
    </div>

    <div>
      <div className='features_containers'>
        <img src={icone5} alt='icone5' />
      </div>
      <div className='features_text'>
        Climate Control
      </div>
    </div>

    <div>
      <div className='features_containers'>
        <img src={icone6} alt='icone6' />
      </div>
      <div className='features_text'>
        User-friendly App
      </div>
    </div>
  </div>
</div>


    <div className="homeImage ml-2">
        <div className="row">
            <div className="column">
                <img src={home1} alt="/" />
            </div>
            <div className="column">
                <img src={home2} alt="/" />
            </div>
            <div className="column">
                <img src={home3} alt="/" />
            </div>
        </div>
    </div>
   
      
  </>
)}