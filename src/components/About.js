import React from 'react';
import hmBackground from '../assets/home-bg.jpg';
import { Paper, Typography, Grid } from '@mui/material';
import '../style/about.css';
import owner1 from '../assets/owner1.jpg';
import owner2 from '../assets/owner2.jpg';

const About = () => {
  return (
    <>
      <div>
        <div className="image-container">
          <img src={hmBackground} alt="Descriptive Text" className="image" />
          <div className="overlay">
            <div className='overlay-text'>
              <h1 className='display-2'>ABOUT US</h1>
              <p className='body-1 text-break text-wrap'>
                SmartBlink is dedicated to transforming ordinary homes into smart homes, making life more convenient, secure, and energy-efficient.
              </p>
            </div>        
          </div>
        </div>
      </div>

      <Grid container spacing={2} sx={{ mr: 3, mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 6, margin: '10px', height: '100%', backgroundColor: '#CBD4E7', textJustify: 'inter-word'}}>
            <Typography variant="h4" gutterBottom style={{ color: '#14274C', textAlign: 'center' }}>
              OUR MISSION
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center', color: '#14274C', marginBottom: '2rem' }}>
              Smartblink transforms homes into intelligent, connected spaces, enhancing comfort, security, and efficiency with innovative, user-friendly automation technology, empowering homeowners to optimize their living environments.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 6, margin: '10px', height: '100%', backgroundColor: '#CBD4E7', textJustify: 'inter-word' }}>
            <Typography variant="h4" gutterBottom style={{ color: '#14274C', textAlign: 'center' }}>
              OUR VISION
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center', color: '#14274C', marginBottom: '2rem' }}>
              To lead the smart home revolution, making advanced home automation standard, creating smarter, safer, and more energy-efficient homes worldwide.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <h2 className='text-center fw-dark founders-title' style={{ color: '#8C472E', marginTop:'2rem' }}>FOUNDERS</h2>
      <div className="gallery">
        <div className='founder'>
          <img src={owner1} style={{ width: '250px', height: '250px', borderRadius: '50%' }} alt="Sahil Patel" />
          <div className='founder-name text-center'>Sahil Patel</div>
        </div>
        <div className='founder-description'>
          <p className='text-dark text-center' style={{ width: '300px', margin: 'auto' }}>
            Sahil Patel and Neel Patel co-founded Smartblink with a shared vision of leveraging technology to improve everyday living. With a strong background in technology and business, they bring a wealth of experience and a passion for innovation to the company.
          </p>
        </div>
        <div className='founder'>
          <img src={owner2} style={{ width: '250px', height: '250px', borderRadius: '50%' }} alt="Neel Patel" />
          <div className='founder-name text-center'>Neel Patel</div>
        </div>
      </div>
    </>
  );
}

export default About;
