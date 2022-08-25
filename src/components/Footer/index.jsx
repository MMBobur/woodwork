import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Maps from "./map";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";



export default function Footer() {
  const data = [
    {
      name: "Address:",
      title: "450 Strand, Charing Cross, London WC2R 0RG, US",
    },
    {
      name: "Phone:",
      title: "+44 20 7930 8205 - +44 20 7839 2323",
    },
    {
      name: "Email:",
      title: "Support@woodworking.com",
    },
  ];

  return (
    <Box sx={{ width: "100%", color: "white", bgcolor: "#201F16", border:'1px solid black', mt:'8%'}}>
      <Container  sx={{mt:"6%"}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowGap={5}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box>
              <img
                src="https://preview.colorlib.com/theme/woodwork/img/xfooter-logo.png.pagespeed.ic.OZ4B_8NY6z.webp"
                alt="#"
              />
              <Typography color="gray" sx={{mt:4, mb:5, fontFamily:'cursive' }}>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida.
              </Typography>
              {data.map((ele, index) => (
                <Stack key={index} direction="row" spacing={2} sx={{mt:3}}>
                  <Typography color="#BFB332"  fontFamily='cursive'>{ele.name}</Typography>
                  <Typography sx={{ fontFamily:'cursive'}}>{ele.title}</Typography>
                </Stack>
              ))}
            </Box>
          </Grid>

          <Grid tem xs={12} sm={6} md={6} lg={6}>
            <Maps sx={{ height: "10%" }} />
          </Grid>


          <Grid tem xs={12} sm={12} md={12} lg={12}>
          <Typography borderBottom="1px solid gray" mt="4%" />
          </Grid>
          

          <Grid tem xs={12} sm={7} md={7} lg={7} pb="1%">
            <Box sx={{display:{lg: 'flex', md:'flex', sm:'flex'}, textAlign:{xs:'center'}}}>
              <Typography color="gray" fontFamily='cursive'>
                Copyright ©2022 All rights reserved | This template is made with
                by
              </Typography>
              <Typography sx={{fontFamily:'cursive', color:'#BFB332'}}>Colorlib</Typography>
            </Box>
          </Grid>

          <Grid tem xs={12} sm={5} md={5} lg={5} pb="1%">
            <Box
              sx={{
                display: "flex",
                columnGap: 2,
                justifyContent: { xs: "center", md: "right", lg: "right" },
              }}
            >
              <Typography color="gray" sx={{ fontFamily: "cursive" }}>
                Follow us:
              </Typography>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
