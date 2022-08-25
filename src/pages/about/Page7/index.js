import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import LinearProgress from '@mui/material/LinearProgress'
import imagee from '../assets/p5.webp';
import {Rating} from '@mui/material'

function Page7() {
  return (

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
                <img src={imagee} alt="somathing went wrong" style={{ width: '100%', }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
  );
}

export default Page7;
