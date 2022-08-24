import React from "react";
import wood from "../assets/wood.jpg";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { TbMinusVertical }from 'react-icons/tb'

function Page1() {
  return (
    <Grid
      sx={{
        backgroundImage: `url(${wood})`,
        backgroundSize: "100%",
        width: "100%",
        height: "200px",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          opacity: 0.7,
          backgroundSize: "100%",
          width: "100%",
          height: "200px",
        }}
      >
        <Grid>
          <Typography sx={{ color: "white" ,fontSize:'40px',fontFamily:'arial black'}}>ABOUT</Typography>
          <Typography sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ color: "white" }}>Home</Typography>
            <TbMinusVertical style={{ marginLeft:'17px',color:'white',fontSize:'30px'}}/>
            <Typography ml='16%' sx={{ color: "white" }}>About</Typography>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Page1;
