import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box 
    sx={{
      textAlign:'center', 
      justifyContent:'center', 
      background: `url(${"	https://preview.colorlib.com/theme/woodwork/img/breadcrumb-bg.jpg"})`,
      mb:'7%'
    }}>
      <Box sx={{color:'white', pt:"4%"}}>
        <Typography variant="h2" sx={{fontFamily:'serif'}}>Blog</Typography>
      </Box>
      <Box sx={{ display: "flex", columnGap: 2, justifyContent:'center', mt:1, pb:'4%', color:'white' }}>
        <Typography sx={{fontFamily:'cursive'}}>Home</Typography>
        <Typography>|</Typography>
        <Typography sx={{fontFamily:'cursive'}}>Blog</Typography>
      </Box>
    </Box>
  );
};

export default Banner;
