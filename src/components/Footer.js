import React from 'react';
import { EnvelopeOpenFill, ChevronRight, GeoAltFill } from 'react-bootstrap-icons';
import { Container, Grid, Typography, Link, TextField, Button } from '@mui/material';
import '../style/footer.css';
import facebook from '../assets/footer/facebook.png'
import instagram from '../assets/footer/insta.png'
import twitter from '../assets/footer/tweeter.png'
import linkedin from '../assets/footer/linkedin.png'
import  logo from '../assets/logo.PNG';


const Footer = () => {
  return (
    <footer className="text-primary pt-4" style={{ backgroundColor: '#14274C'}}>
      <Container>
        <Grid container spacing={5} className="lg:left-0">
          <Grid item md={4} xs={12} className="text-left lg:text-center">
            <img src={logo} className="logo mb-2" alt="footer_logo" style={{ maxWidth: '60%', height: 'auto', color: 'white' }} />
            <Typography variant="body1" className="footerPara">
              Smartblink is dedicated to transforming ordinary homes into smart homes, making life more convenient, secure, and energy-efficient.
            </Typography>
            <div className="social-icons">
              <ul className="list-unstyled d-flex lg:justify-content-left">
                <li className="mr-2">
                  <a target="_blank" rel="noopener noreferrer">
                    <img src={facebook} className="social-icon rounded-lg" alt="Facebook" />
                  </a>
                </li>
                <li className="mr-2">
                  <a target="_blank" rel="noopener noreferrer">
                    <img src={twitter} className="social-icon rounded-lg" alt="Twitter" />
                  </a>
                </li>
                <li className="mr-2">
                  <a target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} className="social-icon rounded-lg" alt="LinkedIn" />
                  </a>
                </li>
                <li className="mr-2">
                  <a target="_blank" rel="noopener noreferrer">
                    <img src={instagram} className="social-icon rounded-lg" alt="Instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </Grid>

          <Grid item md={4} xs={12} className="navigation-section text-left lg:text-center">
            <Typography variant="h5" className="footerHeading fw-bold mb-2">
              Navigation
            </Typography>
            <ul className="list-unstyled listType">
              <li className="list-item"><ChevronRight /><Link href="/" className="footer-link">Home</Link></li>
              <li className="list-item"><ChevronRight /><Link href="/about" className="footer-link">About Us</Link></li>
              <li className="list-item"><ChevronRight /><Link href="/product" className="footer-link">Products</Link></li>
              <li className="list-item"><ChevronRight /><Link href="/support" className="footer-link">Support</Link></li>
              <li className="list-item"><ChevronRight /><Link href="/contact" className="footer-link">Contact Us</Link></li>
              <li className="list-item"><ChevronRight /><Link href="/FAQ" className="footer-link">FAQ</Link></li>
            </ul>
          </Grid>

          <Grid item md={4} xs={12} className="text-left">
            <Typography variant="h5" className="footerHeading fw-bold mb-2">
              Contact Us
            </Typography>
            <Typography variant="body1" className="contact-item">
              <GeoAltFill className="icon my-1" />
              <Link href="https://www.google.ca/maps/place/Toronto,+ON">@Toronto, Ontario</Link>
            </Typography>
            <Typography variant="body1" className="contact-item">
              <EnvelopeOpenFill className="icon mb-1" />
              <Link href="mailto:info@smartblink.ca?subject=Having%20a%20query%20GFG">info@smartblink.ca</Link>
            </Typography>
            <form className="flex flex-column">
              <TextField
                type="email"
                label="Email Address"
                variant="outlined"
                className="form-control my-2"
                sx={{ width: '100%', opacity: '30%', borderBottom: '6px solid #FFB600', borderRadius: '0' }}
              />
              <Button
                variant="contained"
                type="submit"
                className="button"
                style={{ backgroundColor: '#8C472E', borderRadius: '0' }}
              >
                SUBSCRIBE
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <hr className="border-top border-white" />
      <Container>
        <Typography variant="body2" className="d-flex justify-content-between">
          <span>© {new Date().getFullYear()} Smartblink. All Rights Reserved.</span>
          <span className='text-right space-x-4'><a href='/'>Privacy Policy</a> <a href='/'>Terms of Use</a></span>
        </Typography>
      </Container>
    </footer> 
  );
};

export default Footer;
