import React from 'react';
import logo from "../assets/logo.PNG";
import { EnvelopeOpenFill, ChevronRight, GeoAltFill } from 'react-bootstrap-icons';
import { Container, Grid, Typography, Link, TextField, Button } from '@mui/material';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="text-primary pt-3" style={{ backgroundColor: '#14274C', paddingTop: '10px', paddingBottom: '10px' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={4} xs={12}>
            <img src={logo} className="logo mb-2" alt="footer_logo" style={{ maxWidth: '60%', height: 'auto', color: 'white' }} />
            <Typography variant="body1" className="footerPara">
              Smartblink is dedicated to transforming ordinary homes into smart homes, making life more convenient, secure, and energy-efficient.
            </Typography>
            <div className="social-icons">
              <ul className="list-unstyled d-flex">
                <li className="mr-3"><Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></Link></li>
                <li className="mr-3"><Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></Link></li>
                <li className="mr-3"><Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></Link></li>
                <li className="mr-3"><Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></Link></li>
              </ul>
            </div>
          </Grid>
          <Grid item md={4} xs={12} className="navigation-section">
            <Typography variant="h6" className="footerHeading">
              Navigation
            </Typography>
            <ul className="list-unstyled listType">
              <li><ChevronRight /><Link href="/" className="footer-link">Home</Link></li>
              <li><ChevronRight /><Link href="/about" className="footer-link">About Us</Link></li>
              <li><ChevronRight /><Link href="/product" className="footer-link">Products</Link></li>
              <li><ChevronRight /><Link href="/solution" className="footer-link">Solutions</Link></li>
              <li><ChevronRight /><Link href="/contact" className="footer-link">Contact Us</Link></li>
              <li><ChevronRight /><Link href="/FAQ" className="footer-link">FAQ</Link></li>
            </ul>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="h6" className="footerHeading">
              Contact Us
            </Typography>
            <Typography variant="body1">
              <GeoAltFill className="icon my-1" /><Link href="https://www.google.ca/maps/place/Toronto,+ON">@Toronto, Ontario</Link>
            </Typography>
            <Typography variant="body1">
              <EnvelopeOpenFill className="icon mb-1" /><Link href="mailto:info@smartblink.ca?subject=Having%20a%20query%20GFG">info@smartblink.ca</Link>
            </Typography>
            <form>
              <TextField type="email" label="Email Address" variant="outlined" className="form-control my-1"  />
              <Button variant="contained" type="submit" className="button">
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
          <span className='text-right'><a href='/'>Privacy Policy</a> <a href='/'>Terms of Use</a></span>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
