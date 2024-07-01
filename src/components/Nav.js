import React from 'react'
import { Button } from 'react-bootstrap'; 
import logo from '../assets/logo.PNG'


function Nav() {

  return (
    <>
  

    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"white"}}>
    <img src={logo} alt='SmartBlink logo' style={{height:"60px", width:"200px", objectFit:"cover"}}/>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse mx-auto " id="navbarTogglerDemo02"  style={{ color: "#194E86" , backgroundColor:'white'}}>
  <ul className="navbar-nav font-weight-bold conatiner-fluid me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/product">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Solution</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/FAQ">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
            <li>
            <Button style={{ color:"white", backgroundColor: "#194E86" }}>
            Schedule a Consultation
          </Button>
            </li>
          </ul>
  </div>
</nav>
    </>
 )
}

export default Nav