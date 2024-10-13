import React from 'react';
import hmBackground from '../assets/home-bg.jpg';
import { Paper, Typography, Grid, Card, CardContent, CardMedia} from '@mui/material';
import '../style/about.css';
import owner1 from '../assets/owner1.jpg';
import owner2 from '../assets/owner2.jpg';
import about_1 from '../assets/about/about_1.webp'
import about_2 from '../assets/about/about_2.jpg'
import about_3 from '../assets/about/about_3.jpg'
import why_choose from '../assets/about/why_choose.webp'
import { CheckCircleFill} from 'react-bootstrap-icons';

const About = () => {
  // Array of objects for easier mapping
  const cards = [
    { image: about_1, title: 'SMART HOME INTEGRATION', description: 'Converting traditional homes into smart homes with integrated systems for lighting, security, climate control, and more.' },
    { image: about_2, title: 'CUSTOM SOLUTIONS', description: 'Tailoring smart home solutions to meet the unique needs and preferences of each client.' },
    { image: about_3, title: 'INNOVATION AND QUALITY', description: 'Utilizing the latest technology to deliver high-quality, reliable smart home products and services.' }
  ];

  const items = [
    {
      title: 'Expertise:',
      description: 'Our team comprises experts in smart home technology, ensuring you receive the best solutions and services.'
    },
    {
      title: 'Customer-Centric:',
      description: "We prioritize our customers' needs, providing personalized support and exceptional service."
    },
    {
      title: 'Innovation:',
      description: 'We stay ahead of the curve by continuously innovating and integrating the latest technologies into our products.'
    }
  ];

  return (
    <>
      <div>
        <div className="image-container">
          <img src={hmBackground} alt="Descriptive Text" className="image" />
          <div className="overlay">
            <div className='overlay-text'>
              <h1 className='display-2 fw-bold'>ABOUT US</h1>
              <p className='body-1 text-break text-wrap'>
                SmartBlink is dedicated to transforming ordinary homes into smart homes, making life more convenient, secure, and energy-efficient.
              </p>
            </div>        
          </div>
        </div>
      </div>

      <div>
        <Grid container spacing={2} sx={{ mx: 'auto', mb: 3, maxWidth: '1200px' }}>
          <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Paper sx={{ p: { xs: 3, md: 6 }, m: { xs: '20px', md: '60px 10px 60px 60px' }, flex: 1, backgroundColor: '#CBD4E7', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h4" gutterBottom style={{ color: '#14274C', textAlign: 'center', fontWeight:'bold' }}>
                OUR MISSION
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'center', color: '#14274C', marginBottom: '2rem' }}>
                Smartblink transforms homes into intelligent, connected spaces, enhancing comfort, security, and efficiency with innovative, user-friendly automation technology, empowering homeowners to optimize their living environments.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Paper sx={{ p: { xs: 3, md: 6 }, m: { xs: '20px', md: '60px 60px 60px 10px' }, flex: 1, backgroundColor: '#CBD4E7', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h4" gutterBottom style={{ color: '#14274C', textAlign: 'center', fontWeight:'bold' }}>
                OUR VISION
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'center', color: '#14274C', marginBottom: '1rem' }}>
                To lead the smart home revolution, making advanced home automation standard, creating smarter, safer, and more energy-efficient homes worldwide.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <div className="container mx-auto">
          <h2 className="text-center font-bold text-2xl md:text-4xl mt-8" style={{color:'#8C472E'}}>
            FOUNDER
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-8">
            <div className="flex flex-col items-center">
              <img
                src={owner1}
                className="w-64 h-64 rounded-full"
                alt="Sahil Patel"
              />
              <div className="founder-name text-center mt-4 font-bold text-xl text-black">
                Sahil Patel
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center text-dark w-64 md:w-80">
                Sahil Patel and Neel Patel co-founded Smartblink with a shared vision of leveraging technology to improve everyday living. With a strong background in technology and business, they bring a wealth of experience and a passion for innovation to the company.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={owner2}
                className="w-64 h-64 rounded-full"
                alt="Neel Patel"
              />
              <div className="founder-name text-center mt-4 font-bold text-xl text-black">
                Neel Patel
              </div>
            </div>
          </div>
        </div>

        <h2 className='text-center fw-dark founders-title' style={{ color: '#8C472E', marginTop: '2rem', fontWeight: 'bold' }}>WHAT WE DO</h2>
    
    <Grid container spacing={2} justifyContent="center">
      {cards.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
          <Card sx={{ maxWidth: 345, boxShadow: 'none', border: '1px solid #d9d8d7' }}>
            <CardMedia
              component="img"
              style={{ height: 300, width: 345, objectFit: 'cover' }}
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="body1"
                className='text-center'
                component="div"
                style={{ color: '#14274C', fontSize: '1.5rem', fontWeight: 'bolder' }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                className='text-center'
                color="text.secondary"
              >
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

        <div className="flex-container">
          <div className="flex-item-left">      
            <img src={why_choose} alt="Descriptive Text" className="img-fluid" style={{maxHeight:'500px',objectFit:'cover', minWidth:'450px', boxShadow: '1px 1px 10px 0px grey'}} />
          </div>
          <div className="flex-item-right" style={{color:'#14274C'}}>
          <h2 className='text-left fw-dark founders-title' style={{ color: '#8C472E', marginTop: '2rem', fontWeight: 'bold' }}>WHY CHOOSE US</h2>
          {items.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center',marginBottom: '10px' }}>
                <CheckCircleFill style={{ color: '#8C472E', fontWeight: 'bold', marginRight: '8px' }} />
                <h5 style={{ margin: 0 }}>
                  <span style={{ color: 'darkblue', fontWeight: 'bold' }}>{item.title}</span>
                  <span className="text-dark fw-light" style={{ marginLeft: '8px', fontSize:'medium' }}>{item.description}</span>
                </h5>
              </div>
            ))}
          </div>
        </div> 

        <div className='text-center mt-2 p-5' style={{ backgroundColor: '#b6c3db', color: '#14274C' }}>
          <div>
            <h1>
              Join us on <span style={{ display: 'block', fontWeight: 'bolder' }}>Our Journey</span>
            </h1>
            <p className='text-dark' style={{ maxWidth: '400px', margin: '10px auto', padding: '10px auto' }}>
              At Smartblink, we invite you to join us on our way to make every home a smart home. Experience the future with our state-of-the-art smart home solutions that bring security, convenience, and efficiency to your fingertips.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
