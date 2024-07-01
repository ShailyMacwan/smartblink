import React from 'react'
import logo from "../assets/logo.PNG"
import '../style/footer.css'
import {EnvelopeOpenFill} from 'react-bootstrap-icons';
import {ChevronRight} from 'react-bootstrap-icons';
import { GeoAltFill } from 'react-bootstrap-icons';

const Footer = () => {

  return (
    <div className='p-3 text-primary' style={{backgroundColor:'#194E86'}}>
      <div className='container footer'>
        <div>
          <img src={logo} className='logo' alt="footer_logo"/>
          <p className='footerPara'>Smartblink is a dedicated to transforming irdinary homes into smart-homes,
             making life more convenient, secure, and energy-efficient.
          </p>
          <div className='social_icons'>
            <ul className='list-unstyled'>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className='container'>
            <div className='navigation'>
              <p className='footerHeading'>Navigation</p>
              <ul className='listType'>
                <li><ChevronRight/><a href='/'> Home</a></li>
                <li><ChevronRight/><a href='/about'>About Us</a></li>
                <li><ChevronRight/><a href='/product'>Products</a></li>
                <li><ChevronRight/><a href='/solution'>Solutions</a></li>
                <li><ChevronRight/><a href='/contact'>Contact Us</a></li>
                <li><ChevronRight/><a href='/FAQ'>FAQ</a></li>
              </ul>
            </div>
            <div className='contact'>
              <p className='footerHeading'>Contact Us</p>
                <p><GeoAltFill className='icon' href='https://www.google.ca/maps/place/Toronto,+ON/@43.718371,-79.5428702,11z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843!16zL20vMGg3aDY?entry=ttu'/>Toronto,Ontario</p>
                <p><EnvelopeOpenFill className='icon' href='mailto:info@smartblink.ca?subject=Having%20a%20query%20GFG'/> info@smartblink.ca</p>
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address"/>
                  </div>
                  <button className="button">SUBSCRIBE</button>
                </form>
            </div>
        </div>

        <hr/>

        <p></p>
      </div>
    </div>
  )
}

export default Footer

