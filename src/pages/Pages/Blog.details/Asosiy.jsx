import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Container, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Banner from "./Banner"

export default function RowAndColumnSpacing() {
  const data = [
    {
      id: "1",
      img: "https://preview.colorlib.com/theme/woodwork/img/blog/xblog-1.jpg.pagespeed.ic.WTwDUIfoOc.webp",
      title:"https://preview.colorlib.com/theme/woodwork/img/blog/details/xbd-item-2.jpg.pagespeed.ic.s4kQvQaIjs.webp",
     
    },
  ];

  const data2 = [
    {
      id: "1",
      img: "https://preview.colorlib.com/theme/woodwork/img/blog/xbr-1.jpg.pagespeed.ic.Omk_s_mosf.webp",
      title:
        "Es Devlin to design interactive Poem Povilion for Dubai Expo 2020",
      year: "by Derrick Armstrong Apr 07, 2020",
    },
    {
      id: "2",
      img: "https://preview.colorlib.com/theme/woodwork/img/blog/xbr-2.jpg.pagespeed.ic.IAerGsGELh.webp",
      title:
        "Elongated Skylight illuminates stobles in Chile by Mattias Zegers Architects",
      year: "by Derrick Armstrong Apr 07, 2020",
    },
    {
      id: "3",
      img: "https://preview.colorlib.com/theme/woodwork/img/blog/xbr-3.jpg.pagespeed.ic.2Up2g5YUWy.webp",
      title: "Latest Dezeen Weekly features MVRDV s indoor theme park",
      year: "by Derrick Armstrong Apr 07, 2020",
    },
    {
      id: "1",
      img: "https://preview.colorlib.com/theme/woodwork/img/blog/xbr-4.jpg.pagespeed.ic.5qRPUv0Rul.webp",
      title:
        "Es Develin to design interactive Poem Povilon for Dubai Expo 2020",
      year: "Apr 07 2020",
    },
  ];

  const data3 = [
    {
      name: "Trisk",
      num: "12",
    },
    {
      name: "Decor",
      num: "32",
    },
    {
      name: "Caft",
      num: "18",
    },
    {
      name: "Handmade",
      num: "09",
    },
    {
      name: "Resycling",
      num: "17",
    },
  ];

  return (
      <Box sx={{mb:5}}><Banner/>
      
    <Container>
      <Box sx={{ width: "100%",backgroundColor:'white',marginTop:"-5%" }}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Box>
             
              <CardContent>
              <Typography sx={{ color: "#BFB338", mt: "5%", mb: 3 }}>
                  TRICKS
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontFamily: "initial", fontWeight: "600",marginTop:'3%' }}
                >

                  ORLEANS WOODWORKER PIVOTS TO MAKING <br/> FACE SHIELDS FOR LOCAL HOSPITALS
                </Typography>
                <Typography
                  color="text.secondary"
                  fontSize="small"
                  sx={{ mt: 2, fontFamily: "cursive", fontStyle: "italic" }}
                >
                  by Derrick Armstrong Apr 07, 2020
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mt: 3, fontFamily: "serif" }}
                >
                  The Department of Homeland Security issued guidance on
                  specific industries last week that it considers essential
                  during the coronavirus pandemic. That guidance lists the
                  forest products sector in the Food and Agriculture section.
                  Workers who support the manufacture and distribution of forest
                  products...
                </Typography>
                <Typography  color="text.secondary"
                  sx={{ mt: 3, fontFamily: "serif" }}>Situated in the port city of Xiamen, A Woodwork Enthusiast's Home has been created by ZMY Design to be a <br/> "physically static place" that evokes a complete sense of calm.</Typography>
                <CardMedia
                
                component="img"
                image="https://preview.colorlib.com/theme/woodwork/img/blog/details/xblog-details.jpg.pagespeed.ic.2SONCQUxPy.webp"
                alt="green iguana"
                />
              </CardContent>
            </Box>

            <Typography borderBottom="1px solid #CDCDC4" mt="30px" mb="30px" />

            {data.map((item, index) => (
                <Box sx={{ display: { lg: "flex", sm: "flex" }, columnGap: 2}}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt="green iguana"
                  />
               
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%"
                      }}
                    >
                     <img src={item.title} alt="#" />
                    </Box>
              </Box>
            ))}
            <Box >
              <Typography sx={{ mt: 3, fontFamily: "serif",color:'text.secondary'}}>A single window frames a view of the surrounding landscape – the other two windows in the room are fronted <br/> by floor-to-ceiling pillars that cast shifting beams of light over the course the day.</Typography>
              <Typography sx={{ mt: 3, fontFamily: "serif",color:'text.secondary'}}>Inhabitants can alternatively head up to the home's outdoor terrace for unspoilt vistas of Xiamen. Just a smattering of furnishings has been used to dress the space. At its centre is a slate-grey leather sofa, joined by an armchair, beanbag and coffee table.</Typography>
              <Typography sx={{ mt: 3, fontFamily: "serif",color:'text.secondary'}}>A short, elevated walkway that's anchored by two chunky timber benches leads to the rear cylindrical volume. This contains the kitchen, which has a simple wooden dining table and a long, white breakfast island.</Typography>
            </Box>
            <Box sx={{display:'flex',mt:'3%',columnGap:'35%'}}>
            <Box sx={{  fontFamily: "serif",color:'text.secondary',display:'flex',columnGap:2}}>
              <Typography>Tag:</Typography>
              <Typography> Design</Typography>
              <Typography> Wood</Typography>
              <Typography> Enthusias</Typography>
            </Box>
            <Box sx={{display:'flex',columnGap:2,}} >
              <Typography>Share:</Typography>
              <FacebookIcon/>
              <InstagramIcon />
              <TwitterIcon/>
              <YouTubeIcon/>
              
            </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box style={{marginTop:'15%'}}
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                border: "1px solid black",
              }}
            >
              <InputBase
                sx={{
                  
                  ml: 1,
                  flex: 1,
                  fontFamily: "cursive",
                  fontStyle: "italic",
                }}
                placeholder="Enter Keyboard"
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>

            <Typography variant="h6" sx={{ mt: "22%", fontWeight: "bolder" }}>
              POPULAR POSTS
            </Typography>

            {data2.map((ele, index) => (
              <Box
                key={index}
                sx={{ maxWidth: "100%", mt: "12%", cursor: "pointer" }}
              >
                <Box sx={{ display: "flex", columnGap: 3 }}>
                  <Box>
                    <img src={ele.img} alt="green iguana" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "initial",
                        fontWeight: "600",
                        width: "100%",
                      }}
                    >
                      {ele.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      fontSize="small"
                      sx={{ mt: 1, fontFamily: "cursive", fontStyle: "italic" }}
                    >
                      Apr 07, 2020
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}

            <Typography
              variant="h6"
              sx={{ mt: "16%", mb: "8%", fontWeight: "bolder" }}
            >
              CATEGORIES
            </Typography>
            {data3.map((ele, index) => (
              <Stack
                key={index}
                direction="row"
                sx={{ mt: "4%", ":hover": { textDecoration: "underline" } }}
              >
                <Typography color="text.secondary" sx={{fontFamily:'cursive'}}>
                  {ele.name}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ ml: "auto", mr: "0px", fontFamily:'cursive' }}
                >
                  {ele.num}
                </Typography>
              </Stack>
            ))}

            <Box sx={{ bgcolor: "#FAF5F0", mt: 5 }}>
              <Container>
                <Typography
                  variant="h6"
                  sx={{ pt: 2, mb: "8%", fontWeight: "bolder" }}
                >
                  NEWLETTER
                </Typography>
                <Typography color="text.secondary" sx={{fontFamily:'cursive'}}>
                  Amet, consectetur adipiscing elit, sed do eiusmod tempor
                  facilisis.
                </Typography>
                <Stack sx={{ justifyContent: "center", pb: 2 }}>
                  <InputBase
                    sx={{
                      mt: 2,
                      flex: 1,
                      fontFamily: "cursive",
                      fontStyle: "italic",
                      border: "1px solid black",
                      padding: "3%",
                      bgcolor: "white",
                    }}
                    placeholder="Email"
                  />
                  <br />
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      textDecorationStyle: "none",
                      bgcolor: "black",
                      padding: "4%",
                      color: "white",
                    }}
                  >
                    SubScribe
                  </Button>
                </Stack>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </Box>
  );
}