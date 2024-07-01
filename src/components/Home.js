import React from 'react'
import hmBackground from '../assets/home-bg.jpg'
import home01 from "../assets/home-01.jpg"


function Home() {

  return (
    <div className=''>

      <div className='hmPage' style={{ width: '100%', height: '500px'}}>
          <img src={hmBackground} alt="background-image" style={{width: '100%', height:'100%'}}/>
      </div>

      <div className='container'>
        <div>
          <img src={home01} alt="background-image" style={{height:"380px", width:"400px"}}/>
        </div>
        <div>
            <p>WHO WE ARE</p>
            <h2>INNOVATION MEETS EXCELLENCE IN HOME AUTOMATION TECHNOLOGY</h2>
            <p>Smartblink transforms homes into intelligent, connected spaces, enhancing comfort, security, 
              and efficiency with innovative, user-friendly automation technology, empowering homeowners to optimize their living environments.
            </p>
        </div>
      </div>

      {/* <div className='features'>
        <div className='container'>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />          <i class="bi bi-house-gear-fill"/>
          <i class="bi bi-house-gear-fill"/>
          <i class="bi bi-house-gear-fill"/>
          <i class="bi bi-house-gear-fill"/>
        </div>
      </div>      */}
      
      <div className='container'>
        <div><img src={home01} alt="hom-1" style={{height:"300px", width:"300px"}}/></div>
        <div><img src={home01} alt="hom-1" style={{height:"300px", width:"300px"}}/></div>
        <div><img src={home01} alt="hom-1" style={{height:"300px", width:"300px"}}/></div>
      </div>

    </div>


  )
}

export default Home