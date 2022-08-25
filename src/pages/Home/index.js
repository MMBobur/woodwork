import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
import Button from '@mui/material/Button';
import { Navigation } from "swiper";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Rasm1 from './img/xabout-1.jpg.pagespeed.ic.Yis_8Gb838.JPG'
import Rasm2 from './img/xabout-2.jpg.pagespeed.ic.AnJ9wuM910.JPG'
import Rasm3 from './img/xabout-3.jpg.pagespeed.ic.PbcgqF3uxa.JPG'
import HomeCarousel from '../../components/HomeCarousel'
import Typography from '@mui/material/Typography';
import Monial from './img/xtestimonial-1.jpg.pagespeed.ic.8emMOi-GSL.JPG'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ForestIcon from '@mui/icons-material/Forest';
import TextField from '@mui/material/TextField';
import Accardion from '../../components/Accardion'
import CallBg from './img/call-bg.jpg.JPG'

const Titles = [
  { id: 1, title: 'Why is it Important to Choose an Experienced Joiner?', text: 'When it comes to selecting a joiner to carry out carpentry work in your home it is important that you choose one who you can trust. However, one consideration is more important than most when it comes to making this decision and that is precision. While it is true that precise detailing is a vital part of any good carpentry service.' },
  { id: 2, title: 'Do I Need To Have Everything Picked Out Before Scheduling?', text: 'When it comes to selecting a joiner to carry out carpentry work in your home it is important that you choose one who you can trust. However, one consideration is more important than most when it comes to making this decision and that is precision. While it is true that precise detailing is a vital part of any good carpentry service.' },
  { id: 3, title: 'Can’t I Just Do the Carpentry Work Myself?', text: 'When it comes to selecting a joiner to carry out carpentry work in your home it is important that you choose one who you can trust. However, one consideration is more important than most when it comes to making this decision and that is precision. While it is true that precise detailing is a vital part of any good carpentry service.' },
  { id: 4, title: 'Can’t I Just Do the Carpentry Work Myself?', text: 'When it comes to selecting a joiner to carry out carpentry work in your home it is important that you choose one who you can trust. However, one consideration is more important than most when it comes to making this decision and that is precision. While it is true that precise detailing is a vital part of any good carpentry service.' },
]

export default function App() {
  return (
    <div style={{fontFamily:'Bahnschrift Condensed'}}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        speed={1000}
        className="mySwiper"
      >
        <SwiperSlide className="SlideOne">
          <h1 style={{ color: 'white', textAlign: 'center', fontSize: '35px', fontWeight: 'bold' }} >NEW CONSTRUCTION<br /> REMODELING ADDITIONS</h1>
          <Button style={{ marginTop: '2%', height: '50px', width: '150px', fontWeight: 'bold', color: 'white', background: '#BFB332', borderRadius: '0px' }}>CONTACT US</Button>
        </SwiperSlide>
      </Swiper>

      <Grid sx={{ marginTop: '5%' }} justifyContent="center" container>
        <Grid item xs={10} sm={10} md={5} lg={5}>
          <Box>
            <Grid sx={{ justifyContent: { xs: 'center', sm: 'end', md: 'end', lg: 'end' }, marginLeft: { xs: '-10px', sm: '0', md: '0', lg: '0' } }} container spacing={1}>
              <Grid item xs={10} sm={6} md={6} lg={6}>
                <img src={Rasm1} style={{ width: '100%' }} alt='something went wrong' />
              </Grid>
              <Grid item xs={10} sm={6} md={6} lg={6}>
                <img src={Rasm2} style={{ width: '100%' }} alt='something went wrong' />

              </Grid>
              <Grid item xs={10} sm={6} md={6} lg={6}>
                <Box sx={{ marginTop: { xs: '0px', sm: '-200px', md: '-135px', lg: '-175px' } }}>
                  <img src={Rasm3} style={{ width: '100%', }} alt='something went wrong' />
                </Box>

              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={5} lg={5}>
          <Box>
            <Container>
              <p style={{ color: '#BFB332', paddingBottom: '2%', letterSpacing: '2px', fontWeight: 'bold' }}>ABOUT WOODWORKING</p>
              <h1 style={{ fontSize: '35px' }}>30 YEARS OF WOODWORKING EXPERIENCE.</h1>
              <p style={{ fontSize: '20px', color: 'rgb(17, 17, 17)', paddingBottom: '3%', fontWeight: 300, paddingTop: '5%' }}>Our commitment to bring professionalism, good service & trust to the home repair service & maintenance business. We take immense pride in sending some of the most of professional handymen to yours homes to fix things that aren't workings. We have fixed over 1,150,000 houses in our little over 30 years of existence so far.</p>

              <Grid container spacing={2}>
                <Grid item xs={5} sm={3.8} md={3.8} lg={3.8}>
                  <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>1800 +</h1><span style={{ marginTop: '2%', letterSpacing: '2px' }}>PROJECT</span>
                </Grid>
                <Grid item xs={5} sm={3.8} md={3.8} lg={3.8}>
                  <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>1200 +</h1><span style={{ marginTop: '2%', letterSpacing: '2px' }}>CLIENTS </span>
                </Grid>
                <Grid item xs={5} sm={3.8} md={3.8} lg={3.8}>
                  <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>150 +</h1><span style={{ marginTop: '2%', letterSpacing: '2px' }}>OFFICES</span>
                </Grid>
                <Grid item xs={11.5}>
                  <Button style={{ marginTop: '2%', height: '50px', width: '200px', fontSize: '17px', fontWeight: 'bold', color: 'white', background: '#BFB332', borderRadius: '0px' }}>CONTACT US</Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '5%' }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          speed={700}
          className="MySwiper"
        >
          <SwiperSlide>
            <HomeCarousel className={'Slidesone'} className2={'one'}>
              DESIGN<br /> SOLUTION
            </HomeCarousel>
          </SwiperSlide>
          <SwiperSlide>
            <HomeCarousel className={'Slidetwo'} className2={'two'}>
              Exterior<br /> Design
            </HomeCarousel>
          </SwiperSlide>
          <SwiperSlide>
            <HomeCarousel className={'Slidethree'} className2={'three'}>
              MOLDINGS<br /> & TRIM
            </HomeCarousel>
          </SwiperSlide>
          <SwiperSlide>
            <HomeCarousel className={'Slidesfour'} className2={'four'}>
              Office<br /> Funiture
            </HomeCarousel>
          </SwiperSlide>
          <SwiperSlide>
            <HomeCarousel className={'Slidesfive'} className2={'five'}>
              Exterior<br /> Design
            </HomeCarousel>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box>
        <Box sx={{ paddingBottom: '5%', paddingTop: '10%' }}>
          <Grid justifyContent='center' container spacing={2}>
            <Grid item xs={10} sm={10} md={7} lg={7}>
              <Box sx={{ background: '#FAF5F0', paddingBottom: '5%', width: { xs: '100%', sm: '100%', md: '750px', lg: '1000px' } }}>
                <i style={{ fontSize: '120px', color: '#bfb332', fontFamily: 'arial', marginTop: '15px', marginLeft: '5%' }}>“</i>
                <Typography sx={{ lineHeight: '34px', fontSize: '24px', color: '#111111', fontWeight: 300, marginTop: '-55px', marginLeft: '5%', width: { xs: '90%', sm: '90%', md: '75%', lg: '75%' } }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida viverra maecenas accumsan lacus vel facilisis.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '5%', paddingRight: '280px', paddingTop: '3%', alignItems: 'center' }}>
                  <Box>
                    <Typography variant='h5' sx={{ fontWeight: 600, fontSize: '18px', fontFamily: 'Rajdhani, sans-serif' }}>CHARLES SCHWARTZ</Typography>
                    <Typography>NEW YORK</Typography>
                  </Box>
                  <Box>
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', marginTop: '20px' }}>
                  <Box sx={{ width: '30px', height: '5px', marginLeft: '5%', background: 'rgba(17, 17, 17, 0.3)' }}></Box>
                  <Box sx={{ width: '30px', height: '5px', marginLeft: '10px', background: 'rgba(17, 17, 17, 0.1)' }}></Box>
                  <Box sx={{ width: '30px', height: '5px', marginLeft: '10px', background: 'rgba(17, 17, 17, 0.1)' }}></Box>
                </Box>
                {/* <i style={{ fontSize: '120px', color: '#bfb332', fontFamily: 'arial' }}>“</i>
                <Typography></Typography> */}
              </Box>
            </Grid>
            <Grid item xs={10} sm={10} md={3} lg={3}>
              <Box sx={{ background: 'white', marginTop: { xs: 0, sm: 0, md: '-50px', lg: '-50px' }, width: { xs: '100%', sm: '100%', md: '110%', lg: '110%' } }}>
                <img src={Monial} alt="somathing went wrong" style={{ width: '100%', }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>

        <Grid container spacing={0.1}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box className="Product1">
              <Box className="Shape">
                <Box>
                  <Typography sx={{ fontWeight: 600, marginBottom: '4px', fontSize: '24px', fontFamily: 'Bahnschrift Condensed', letterSpacing: '1px' }}>Kingley mansion stairs  </Typography>
                  <Typography sx={{ fontWeight: 300 }}><LocationOnIcon sx={{ position: 'absolute', marginLeft: '-10px' }} /><span style={{ marginLeft: '15px' }}> 450 Strand, Charing Cross, London</span></Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box className="Product2">
              <Box className="Shape2">
                <Box>
                  <Typography sx={{ fontWeight: 600, marginBottom: '4px', fontSize: '24px', fontFamily: 'Bahnschrift Condensed', letterSpacing: '1px' }}>Kingley mansion stairs  </Typography>
                  <Typography sx={{ fontWeight: 300 }}><LocationOnIcon sx={{ position: 'absolute', marginLeft: '-10px' }} /><span style={{ marginLeft: '15px' }}> 450 Strand, Charing Cross, London</span></Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box className="Product3">
              <Box className="Shape3">
                <Box>
                  <Typography sx={{ fontWeight: 600, marginBottom: '4px', fontSize: '24px', fontFamily: 'Bahnschrift Condensed', letterSpacing: '1px' }}>Kingley mansion stairs  </Typography>
                  <Typography sx={{ fontWeight: 300 }}><LocationOnIcon sx={{ position: 'absolute', marginLeft: '-10px' }} /><span style={{ marginLeft: '15px' }}> 450 Strand, Charing Cross, London</span></Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{marginTop:'70px'}}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection:{xs:'column', sm:'row', md:'row', lg:'row'}, marginBottom:'50px' }}>
            <Box>
              <Typography sx={{color:'#bfb332', fontWeight:600, letterSpacing:'4px'}}>WHY CHOOSE US?</Typography>
              <Typography sx={{fontSize:'42px', fontWeight:600}}>HIGH QUALITY IS THE STANDARD</Typography>
            </Box>
            <Box>
              <Button sx={{border:'2px solid #bfb332', marginTop:'15px',fontWeight:600,padding:'10px 30px 10px 30px',borderRadius:'0px' , color:'black'}}>Contact Us</Button>
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={4} >
              <Box className='otherimg'>
                <Box className='Shape01'><ForestIcon className="icon" sx={{ fontSize: '40px', color: '#8A8A8A' }} /></Box>
                <Typography sx={{ marginTop: '20px', fontFamily: 'Bahnschrift Condensed', fontSize: '24px' }}>HIGHLY PROFESSIONAL STAFF</Typography>
                <Typography sx={{ fontWeight: 300, color: '#8A8A8A', lineHeight: '27px' }}>We will build & stain the new work so that it looks and feels like it is original.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box className='otherimg2'>
                <Box className='Shape02'><ForestIcon className="icon" sx={{ fontSize: '40px', color: '#8A8A8A' }} /></Box>
                <Typography sx={{ marginTop: '20px', fontFamily: 'Bahnschrift Condensed', fontSize: '24px' }}>USING LATEST MACHANICAL SYSTEM</Typography>
                <Typography sx={{ fontWeight: 300, color: '#8A8A8A', lineHeight: '27px' }}>We will build & stain the new work so that it looks and feels like it is original.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box className='otherimg3'>
                <Box className='Shape03'><ForestIcon className="icon" sx={{ fontSize: '40px', color: '#8A8A8A' }} /></Box>
                <Typography sx={{ marginTop: '20px', fontFamily: 'Bahnschrift Condensed', fontSize: '24px' }}>CERTIFIED MATERIAL IN A TIMELY</Typography>
                <Typography sx={{ fontWeight: 300, color: '#8A8A8A', lineHeight: '27px' }}>We will build & stain the new work so that it looks and feels like it is original.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box className='otherimg4'>
                <Box className='Shape04'><ForestIcon className="icon" sx={{ fontSize: '40px', color: '#8A8A8A' }} /></Box>
                <Typography sx={{ marginTop: '20px', fontFamily: 'Bahnschrift Condensed', fontSize: '24px' }}>PROVIDE THE MOST EASMABLE COST</Typography>
                <Typography sx={{ fontWeight: 300, color: '#8A8A8A', lineHeight: '27px' }}>We will build & stain the new work so that it looks and feels like it is original.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box className='otherimg5'>
                <Box className='Shape05'><ForestIcon className="icon" sx={{ fontSize: '40px', color: '#8A8A8A' }} /></Box>
                <Typography sx={{ marginTop: '20px', fontFamily: 'Bahnschrift Condensed', fontSize: '24px' }}>FOLLOWING GOBAL DESIGN TENDENCY</Typography>
                <Typography sx={{ fontWeight: 300, color: '#8A8A8A', lineHeight: '27px' }}>We will build & stain the new work so that it looks and feels like it is original.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box className='otherimg6'>
                <Box className='Shape06'><ForestIcon className="icon" sx={{ fontSize: '40px', color: '#8A8A8A' }} /></Box>
                <Typography sx={{ marginTop: '20px', fontFamily: 'Bahnschrift Condensed', fontSize: '24px' }}>UNDERTAKE TO MEET THE DEADLINE</Typography>
                <Typography sx={{ fontWeight: 300, color: '#8A8A8A', lineHeight: '27px' }}>We will build & stain the new work so that it looks and feels like it is original.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ marginTop: '100px', background: '#FAF5F0', paddingTop: '70px', paddingBottom: '70px' }}>
        <Container>
          <Grid container spacing={2}>
            <Grid sx={{ marginBottom: '3%' }} item xs={12}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: '#bfb332', fontWeight: 600, marginBottom: '20px' }}>FREQUENTLY ASK QUESTIONS</Typography>
                <Typography sx={{ fontSize: '42px', fontWeight: 600 }}>LOOKING FOR AN ANSWER?</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <Box>
                <Accardion titles={Titles} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Box sx={{ background: 'white', padding: '7%' }}>
                <Typography sx={{ fontSize: '22px', fontWeight: 700, fontFamily: 'Bahnschrift Condensed', letterSpacing: '1px', textAlign: 'center' }}>YOU HAVE A QUESTION? CONTACT WITH US!</Typography>

                <TextField fullWidth sx={{ marginTop: '7%' }} id="outlined-basic" label="Your name" variant="outlined" />
                <TextField fullWidth sx={{ marginTop: '5%' }} id="outlined-basic" label="Your email" variant="outlined" />
                <TextField fullWidth sx={{ marginTop: '5%' }} id="outlined-basic" label="Website" variant="outlined" />
                <TextField
                  fullWidth
                  sx={{ marginTop: '5%' }}
                  id="outlined-multiline-static"
                  label='Write question here'
                  multiline
                  rows={4}
                />
                <Button fullWidth sx={{ marginTop: '5%', borderRadius: '0px', background: '#bfb332', fontFamily: 'Bahnschrift Condensed', wordSpacing: '5px', letterSpacing: '2px', '&:hover': { background: '#bfb332' } }} variant="contained">SUBMIT QUESTION</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundImage: `url(${CallBg})`, backgroundRepeat: 'no-repeat', paddingTop: '10%', paddingBottom: '10%', textAlign: 'center' }}>
        <Typography sx={{ color: 'white', fontSize: '50px', fontWeight: 600, lineHeight: '65px', fontFamily: 'Bahnschrift Condensed' }}>
          CHOOSE A FLOOR TYPE FOR YOUR HOME<br /> REMODELING PROJECT
        </Typography>
        <Button sx={{borderRadius: '0px', background: '#bfb332', fontFamily: 'Bahnschrift Condensed', wordSpacing: '5px', letterSpacing: '2px', '&:hover': { background: '#bfb332', }, paddingLeft: '30px', paddingRight: '30px', marginTop: '10px' }} variant="contained">START YOUR PROJECT</Button>
      </Box>
     
    </div>
  );
}
