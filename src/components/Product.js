import React from 'react';
import product_hero from '../assets/about/product/product_hero.png'
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import fdoor from '../assets/about/product/fdoor.jpg'
import bdoor from '../assets/about/product/bdoor.jpg'
import gdoor from '../assets/about/product/gdoor.jpg'
import idoor from '../assets/about/product/idoor.jpg'
import benefits_img from '../assets/about/product/benefits_img.jpg'
import { Check2Circle } from 'react-bootstrap-icons';
import auto from '../assets/about/product/auto.jpg'
import icone1 from '../assets/about/product/unlocking.png'
import icone2 from '../assets/about/product/lighting.png'
import icone3 from '../assets/about/product/security_check.png'
import dquotes from '../assets/about/product/icons8-double-quotes-50.png'
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';



import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Rating from '@mui/material/Rating';
import Quote from '@mui/icons-material/FormatQuote';
const testimonials = [
  {
    quote: "Excellent security features from Smartblink. We feel safe now.",
    rating: 4,
    name: "Admin Patel",
    profile: "Profile",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    quote: "Excellent security features from Smartblink. We feel safe now.",
    rating: 4,
    name: "Admin Patel",
    profile: "Profile",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    quote: "Excellent security features from Smartblink. We feel safe now.",
    rating: 4,
    name: "Admin Patel",
    profile: "Profile",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  }
];

const responsive = {
desktop: {
  breakpoint: { max: 3000, min: 1024 },
  items: 3,
  slidesToSlide: 3
},
tablet: {
  breakpoint: { max: 1024, min: 464 },
  items: 2,
  slidesToSlide: 2
},
mobile: {
  breakpoint: { max: 464, min: 0 },
  items: 1,
  slidesToSlide: 1
}
};
  

const icons = [icone1, icone2, icone3];
const titles = ["Smart Lock", "Smart Lighting", "Security Notification"];
const descriptions = [
  "The smart lock automatically unlocks the front door as you approach, allowing you to enter without fumbling for keys.",
  "Your smart lighting system turns on the porch light and hallway lights, welcoming you home and enhancing security.",
  "The app sends a notification confirming that your front door is securely locked and the security system is active."
];

const Product = () =>{

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

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
            <h1 className='typing 2s steps(20) infinite alternate, blink .7s infinite overflow-hidden whitespace-nowrap display-2 fw-bold'>HELP CENTER</h1>
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



    <div className="w-full overflow-hidden my-3 pb-16 space-y-10" style={{rowGap:'8rem'}}>
      <div className="flex flex-wrap justify-center mx-2">
        <div className="rounded overflow-visible flex flex-col space-y-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 px-4" sx={{padding:{xs:'3rem', md:'4rem'}, margin:{xs:'2rem', md:'2rem'}}}>
          <div className="relative">
            <img className="w-full h-80 object-cover" src={fdoor} alt="Front Door" />
            <div className="absolute bottom-0 w-full flex justify-center" style={{ transform: 'translateY(60%)' }}>
              <div className="bg-white p-3 flex items-center justify-center" style={{ width: '90%', maxWidth: '350px', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', overflow: 'visible' }}>
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
            <img className="w-full h-80 object-cover" src={bdoor} alt="Back Door" />
            <div className="absolute bottom-0 w-full flex justify-center" style={{ transform: 'translateY(60%)' }}>
              <div className="bg-white p-3 flex items-center justify-center" style={{ width: '90%', maxWidth: '350px', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', overflow: 'visible' }}>
                <div className="text-center">
                  <p className="font-semibold text-lg text-indigo-600 mb-2" style={{ color: '#8C472E', fontSize: '1.2rem' }}>BACK DOOR</p>
                  <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-base">An additional layer of security for secondary entrances.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-visible flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 px-4">
          <div className="relative">
            <img className="w-full h-80 object-cover" src={gdoor} alt="Garage Door" />
            <div className="absolute bottom-0 w-full flex justify-center" style={{ transform: 'translateY(60%)' }}>
              <div className="bg-white p-3 flex items-center justify-center" style={{ width: '90%', maxWidth: '350px', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', overflow: 'visible' }}>
                <div className="text-center">
                  <p className="font-semibold text-lg text-indigo-600 mb-2" style={{ color: '#8C472E', fontSize: '1.2rem' }}>GARAGE DOOR</p>
                  <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-base">Secure access to both your vehicle and home.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-visible flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 px-4">
          <div className="relative">
            <img className="w-full h-80 object-cover" src={idoor} alt="Interior Door" />
            <div className="absolute bottom-0 w-full flex justify-center" style={{ transform: 'translateY(60%)' }}>
              <div className="bg-white p-3 flex items-center justify-center" style={{ width: '90%', maxWidth: '350px', height: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', overflow: 'visible' }}>
                <div className="text-center">
                  <p className="font-semibold text-lg text-indigo-600 mb-2" style={{ color: '#8C472E', fontSize: '1.2rem' }}>INTERIOR DOOR</p>
                  <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-base">Optionally used for securing rooms that require restricted access, such as home offices or storage areas.</p>
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


  
{/* <div class="flex flex-col w-full" x-data="{
        skip: 1,
        atBeginning: false,
        atEnd: false,
        next() {
            this.to((current, offset) => current + (offset * this.skip))
        },
        prev() {
            this.to((current, offset) => current - (offset * this.skip))
        },
        to(strategy) {
            let slider = this.$refs.slider
            let current = slider.scrollLeft
            let offset = slider.firstElementChild.getBoundingClientRect().width
            slider.scrollTo({ left: strategy(current, offset), behavior: 'smooth' })
        },
        focusableWhenVisible: {
            'x-intersect:enter'() {
                this.$el.removeAttribute('tabindex')
            },
            'x-intersect:leave'() {
                this.$el.setAttribute('tabindex', '-1')
            },
        },
        disableNextAndPreviousButtons: {
            'x-intersect:enter.threshold.05'() {
                let slideEls = this.$el.parentElement.children
                // If this is the first slide.
                if (slideEls[0] === this.$el) {
                    this.atBeginning = true
                // If this is the last slide.
                } else if (slideEls[slideEls.length-1] === this.$el) {
                    this.atEnd = true
                }
            },
            'x-intersect:leave.threshold.05'() {
                let slideEls = this.$el.parentElement.children
                // If this is the first slide.
                if (slideEls[0] === this.$el) {
                    this.atBeginning = false
                // If this is the last slide.
                } else if (slideEls[slideEls.length-1] === this.$el) {
                    this.atEnd = false
                }
            },
        },
    }">
      
    </div>
  

    <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-10 sm:py-5">
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom style={{ color: '#8C472E' }}>
            TESTIMONIALS FROM OUR CLIENT
        </Typography>
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={responsive}
          partialVisbile={true} // Allow partial visibility of slides
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <Paper sx={{ p: 4, backgroundColor: '#f2decf' }}>
                <Quote style={{ fontSize: '3rem', color: '#8C472E' }} />
                <Typography variant="body1" style={{ color: '#194E86', marginBottom: '1rem' }}>
                  {testimonial.quote}
                </Typography>
                <Rating name="size-small" defaultValue={testimonial.rating} size="small" />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                  <img src={testimonial.image} alt={testimonial.name} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                  <div>
                    <Typography variant="h6" style={{ color: '#8C472E', fontWeight: 'bold' }}>{testimonial.name}</Typography>
                    <Typography variant="subtitle1" style={{ color: '#14274C' }}>{testimonial.profile}</Typography>
                  </div>
                </div>
              </Paper>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
   */}
    <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-100 sm:py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-4xl" style={{color:'#8C472E'}}>TESTIMONIALS FROM OUT CLIENTS</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col gap-y-6 sm:gap-y-8">
              <figure className="relative rounded-2x p-6 shadow-xl shadow-slate-900/10" style={{ backgroundColor: '#f2decf' }}>
                <Quote className="mb-3" style={{ fontSize: '3rem', color: '#8C472E' }} />
                <blockquote className="text-lg tracking-tight" style={{ color: '#194E86' }}>
                  {testimonial.quote}
                </blockquote>
                <Rating name={`rating-${index}`} value={testimonial.rating} size="small" />
                <figcaption className="relative mt-6 flex items-center gap-2 border-top border-black pt-6">
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img alt="" className="h-14 w-14 object-cover" src={testimonial.image} />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-display text-old fw-bold text-[#8C472E]" style={{ color: '#8C472E' }}>{testimonial.name}</div>
                    <div className="font-display text-base text-slate-900">{testimonial.profile}</div>
                  </div>
                </figcaption>

              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
      
          
  </>
);
};

export default Product;