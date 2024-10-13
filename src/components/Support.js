import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import home2 from '../assets/home-2.jpeg';
import home3 from '../assets/home-3.png';
import home4 from '../assets/home-3.png'; // Example image path
import home5 from '../assets/home-2.jpeg'; // Example image path
import home6 from '../assets/home-1.jpg'; // Example image path
import icone1 from '../assets/support_icons/icons8-advanced-search-100.png';
import icone2 from '../assets/support_icons/icons8-available-updates-80.png';
import icone3 from '../assets/support_icons/icons8-book-64.png';
import icone4 from '../assets/support_icons/icons8-help-100.png';
import icone5 from '../assets/support_icons/icons8-rocket-80.png';
import icone6 from '../assets/support_icons/icons8-rocket-80.png';
import supportwebp from "../assets/support.webp";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FeatureItem = ({ icon, text, desc }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="feature-item" style={{ border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '1rem', textAlign: 'center', height: '340px', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem' }}>
    <div className="image_container" style={{ width: isMobile ? '90px' : '120px', height: isMobile ? '90px' : '120px', borderRadius: '50%', backgroundColor: '#14274C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={icon} alt='icon' className="feature-image" />
    </div>
    <div className='features_text' style={{ color: '#194E86', fontSize: '1.5rem', fontWeight: 'bolder', padding: '1rem', textAlign: 'center' }}>
      {text}
    </div>
    <div className="features_desc" style={{ textAlign: 'center' }}>
      {desc}
    </div>
  </div>

  );
};

const Support = () => {
  // Array of objects for easier mapping
  const cards = [
    { image: home6, title: 'SUBJECT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus nesciunt architecto! Quis quo accusantium ipsum, ' },
    { image: home2, title: 'SUBJECT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus nesciunt architecto! Quis quo accusantium ipsum,' },
    { image: home3, title: 'SUBJECT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus nesciunt architecto! Quis quo accusantium ipsum, ' },
    { image: home4, title: 'SUBJECT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus nesciunt architecto! Quis quo accusantium ipsum, ' },
    { image: home5, title: 'SUBJECT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus nesciunt architecto! Quis quo accusantium ipsum, ' },
    { image: home5, title: 'SUBJECT', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus nesciunt architecto! Quis quo accusantium ipsum, ' },
  ];

  return (
    <>
      <div className="image-container">
        <img src={supportwebp} alt="Descriptive Text" className="image" />
        <div className="overlay">
          <div className='overlay-text'>
            <h1 className='display-2 fw-bold'>HELP CENTER</h1>
            <p className='body-1 text-break text-wrap'>Smartblink is dedicated to transforming ordinary homes into smart homes, making life more convenient, secure and energy-efficient</p>
          </div>        
        </div>
      </div>

      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        {[icone1, icone2, icone3, icone4, icone5, icone6].map((icon, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
            <FeatureItem icon={icon} text={`Feature ${index + 1}`} desc="Some quick example text to build on the card title and make up the bulk of the card's content." />
          </Grid>
        ))}
      </Grid>

      <h2 className="text-center fw-dark fw-bold" style={{ color: '#8C472E', margin: '2rem 0' }}>
        ARTICLE
      </h2>


      <Grid container spacing={2} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
            <Card sx={{ maxWidth: 445, boxShadow: 'none', border: 'none' }}>
              <CardMedia component="img" height="300" image={card.image} alt={card.title} style={{objectFit:'content'}}  />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" style={{ color: '#194E86', fontWeight: 'bolder' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Support;
