import React from 'react';
import product_hero from '../assets/about/product/product_hero.png'
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import fdoor from '../assets/about/product/fdoor.jpg'
import bdoor from '../assets/about/product/bdoor.jpg'
import gdoor from '../assets/about/product/gdoor.jpg'
import idoor from '../assets/about/product/idoor.jpg'
import benefits_img from '../assets/about/product/benefits_img.jpg'
import { Check2Circle , Quote} from 'react-bootstrap-icons';
import auto from '../assets/about/product/auto.jpg'
import icone1 from '../assets/about/product/unlocking.png'
import icone2 from '../assets/about/product/lighting.png'
import icone3 from '../assets/about/product/security check.png'
import dquotes from '../assets/about/product/icons8-double-quotes-50.png'
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';




const icons = [icone1, icone2, icone3];
const titles = ["Smart Lock", "Smart Lighting", "Security Notification"];
const descriptions = [
  "The smart lock automatically unlocks the front door as you approach, allowing you to enter without fumbling for keys.",
  "Your smart lighting system turns on the porch light and hallway lights, welcoming you home and enhancing security.",
  "The app sends a notification confirming that your front door is securely locked and the security system is active."
];

const Product = () =>{

  const items = [
    { item: 'Enhanced Security' },
    { item: 'Remote Control' },
    { item: 'Access Monitoring' },
    { item: 'Temporary Access' },
    { item: 'Convenience' },
    { item: 'Keyless Entry' },
    { item: 'Automated Locking' },
    { item: 'Voice Control' },
    { item: 'Peace of Mind' },
    { item: 'Real-Time Alerts' },
    { item: 'Activity Logs' },
  ];

  return(
  <>
      <div className="image-container">
        <img src={product_hero} alt="Descriptive Text" className="image" />
        <div className="overlay" style={{backgroundColor:'#8C472E', opacity:'0.7'}} >
          <div className='overlay-text'>
            <h1 className='display-2 fw-bold'>HELP CENTER</h1>
            <p className='body-1 text-break text-wrap'>Smartblink is dedicated to transforming ordinary homes into smart homes, making life more convenient, secure and energy-efficient</p>
          </div>        
        </div>
      </div>

      <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={5}>
            <Typography variant="h4" sx={{ color: '#8C472E', fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' } }}>
              WHAT IS SMART LOCK?
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="body1" sx={{ color: '#000', textAlign: { xs: 'center', md: 'left' }, maxWidth: '500px', mx: 'auto' }}>
              Smart Lock is a state-of-the-art security solution that enhances the safety and convenience of your home. This advanced lock system allows you to control and monitor your door locks remotely through a smartphone app, providing peace of mind whether you are at home or away.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  

    {/* <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="rounded overflow-hidden flex flex-col items-center bg-white shadow-lg">
            <img className="w-full" src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1000" alt="Sunset in the mountains" style={{height:'300px', objectFit:'cover'}}/>
            <div className="px-5 pt-5 pb-10">
                <p className="font-semibold text-center text-lg text-indigo-600 mb-2">FRONT DOOR</p>
                <p className="text-gray-500 text-sm text-center">Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!</p>
            </div>
        </div>
        <div className="rounded overflow-hidden flex flex-col items-center bg-white shadow-lg">
            <img className="w-full" src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1000" alt="Sunset in the mountains" style={{height:'300px;', objectFit:'cover'}}/>
            <div className="px-5 pt-5 pb-10">
                <p className="font-semibold text-center text-lg text-indigo-600 mb-2">BACK DOOR</p>
                <p className="text-gray-500 text-sm text-center">Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!</p>
            </div>
        </div>
        <div className="rounded overflow-hidden flex flex-col items-center bg-white shadow-lg">
            <img className="w-full" src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1000" alt="Sunset in the mountains" style={{height:'300px', objectFit:'cover'}}/>
            <div className="px-5 pt-5 pb-10">
                <p className="font-semibold text-center text-lg text-indigo-600 mb-2">FRONT DOOR</p>
                <p className="text-gray-500 text-sm text-center">Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!</p>
            </div>
        </div>
        <div className="rounded overflow-hidden flex flex-col items-center bg-white shadow-lg">
            <img className="w-full" src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1000" alt="Sunset in the mountains" style={{height:'300px', objectFit:'cover'}}/>
            <div className="px-5 pt-5 pb-10">
                <p className="font-semibold text-center text-lg text-indigo-600 mb-2">FRONT DOOR</p>
                <p className="text-gray-500 text-sm text-center">Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!</p>
            </div>
        </div>
    </div>
  </div> */}


<div className="w-full overflow-hidden">
  <div className="flex flex-wrap justify-center -mx-0">
  
  
    <div className="rounded overflow-visible flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 px-4">
      <div className="relative">
        <img className="w-full h-80 object-cover" src={fdoor} alt="Front Door" />
        <div className="absolute bottom-0 w-full flex justify-center" style={{ transform: 'translateY(60%)' }}>
          <div className="bg-white p-4 flex items-center justify-center" style={{ width: '90%', maxWidth: '350px', height: '160px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div className="text-center">
              <p className="font-semibold text-lg text-indigo-600 mb-2" style={{ color: '#8C472E', fontSize: '1.2rem' }}>FRONT DOOR</p>
              <p className="text-gray-500 text-xs sm:text-base md:text-sm lg:text-base">Today, I’m covering one of my favorite parts of the Nordstrom Sale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="rounded overflow-visible flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 px-4">
      <div className="relative">
        <img className="w-full h-80 object-cover" src={bdoor} alt="Front Door" />
        <div className="absolute bottom-0 w-full flex justify-center" style={{ transform: 'translateY(60%)' }}>
          <div className="bg-white p-4 flex items-center justify-center" style={{ width: '90%', maxWidth: '350px', height: '160px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div className="text-center">
              <p className="font-semibold text-lg text-indigo-600 mb-2" style={{ color: '#8C472E', fontSize: '1.2rem' }}>BACK DOOR</p>
              <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-base">Today, I’m covering one of my favorite parts of the Nordstrom Sale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="rounded overflow-visible flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 px-4">
      <div className="relative">
        <img className="w-full h-80 object-cover" src={gdoor} alt="Front Door" />
        <div className="absolute bottom-0 w-full flex justify-center" style={{ transform: 'translateY(60%)' }}>
          <div className="bg-white p-4 flex items-center justify-center" style={{ width: '90%', maxWidth: '350px', height: '160px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div className="text-center">
              <p className="font-semibold text-lg text-indigo-600 mb-2" style={{ color: '#8C472E', fontSize: '1.2rem' }}>GARAGE DOOR</p>
              <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-base">Today, I’m covering one of my favorite parts of the Nordstrom Sale</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded overflow-visible flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 px-0">
      <div className="relative">
        <img className="w-full h-80 object-cover" src={idoor} alt="Back Door" />
        <div className="absolute bottom-0 w-full flex justify-center" style={{ transform: 'translateY(60%)' }}>
          <div className="bg-white p-4 flex items-center justify-center" style={{ width: '90%', maxWidth: '350px', height: '160px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div className="text-center">
              <p className="font-semibold text-lg text-indigo-600 mb-2" style={{ color: '#8C472E', fontSize: '1.2rem' }}>INTERIOR DOOR</p>
              <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-base">An additional layer of security for secondary entrances.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

   
  </div>
</div>




<Grid container spacing={2} sx={{ mx: 'auto', mb: 3, maxWidth: '1200px' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
          <Paper sx={{ p: { xs: 3, md: 6 }, m: { xs: '20px', md: '60px 10px 60px 60px' }, boxShadow:'none', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <img className="w-full h-90 object-cover" src={benefits_img} alt="Interior Door"  />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
          <Paper sx={{ p: { xs: 3, md: 6 }, m: { xs: '20px', md: '60px 60px 60px 10px' },boxShadow:'none', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" gutterBottom style={{ color: '#8C472E', textAlign: 'left', marginLeft:'2rem', fontWeight:'bold' }}>
              BENEFITS OF PRODUCTS
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center', color: '#14274C', marginBottom: '1rem' }}>
            <ul className="grid grid-cols-2 gap-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-center text-gray-800">
                  <span className="w-3 h-3 mr-2 rounded-full" style={{color:'#8C472E'}}><Check2Circle/></span>
                  {item.item}
                </li>
              ))}
            </ul>

            </Typography>
          </Paper>
        </Grid>
      </Grid>


    <div className='text-left' style={{marginLeft:'4rem'}}>
      <Typography variant="h4" gutterBottom style={{ color: '#8C472E', fontWeight:'bold'}}>AUTOMATED SCENARIOS</Typography>
      <Typography variant="body1" style={{ color: '#14274C', marginBottom: '1rem' }}>
        Imagine you're on your way home from work. As you approach your house, your Smartblink app detects your proximity through geofencing technology.</Typography>
      <img src={auto} style={{maxHeight:'700px', width:'100%', marginBottom:'2rem', paddingRight:'3rem'}} alt='auto_image'/>
        
    </div>

    <Grid container spacing={1} justifyContent="center" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      {icons.map((icon, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ width: '90%',height:'350px', maxWidth: '350px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '2rem', backgroundColor: 'white' }}>
            <img src={icon} alt={`Feature ${index + 1}`} style={{ maxWidth: '100px', margin: 'auto', borderRadius:'50%' }} />
            <h3 style={{color:'#8C472E', marginTop:'2rem'}}>{titles[index]}</h3>
            <p className='text-gray-500'>{descriptions[index]}</p>
          </div>
        </Grid>
      ))}
    </Grid>

    <Paper sx={{ p: { xs: 3, md: 6, lg:'50px 140px ' }, m: { md: '60px 0px 60px 0px' }, flex: 1, backgroundColor: '#f2decf', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#8C472E',margin:'0rem 1rem', textAlign: 'left', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
        <Quote className='mb-3'/> RESULT:
      </Typography>
      <Typography variant="h6" style={{ textAlign: 'left', color: '#14274C', margin:'1rem 3rem' }}>
        This seamless automation enhances your security, convenience, and peace of mind, ensuring that your home is ready for you without any manual intervention.
      </Typography>
    </Paper>

  

      
          
  </>
);
};

export default Product