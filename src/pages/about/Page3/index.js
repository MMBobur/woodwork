import React from "react";
import image from "../assets/duradgor.jpg";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Page3() {
  return (
    <Container maxWidth="xl">
      <Grid
        sx={{
          backgroundImage: `url(${image})`,
          width: "100%",
          height: "470px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      ></Grid>
      <Grid
        mt="-27%"
        ml="23%"
        sx={{
          width: "700px",
          height: "470px",
          backgroundColor: "white",
          boxShadow: "5px 3px 20px 0px gray",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p:'4% 4% 4% 5%'
        }}
      >
        <Typography
          sx={{ fontSize: "24px", fontFamily: "Rajdhani", fontWeight: 600 }}
        >
          HIGH QUALITY IS THE STANDARD
        </Typography>
        <Typography mt='4%' sx={{textAlign:'center', fontSize: "20px", fontFamily: "Josefin Sans" ,color:'gray'}}>
          Our commitment to bring professionalism, good service & trust to the
          home repair service & maintenance business. We take immense pride in
          sending some of the most of professional handymen to yours homes to
          fix things that aren't workings.
        </Typography>
        <Typography mt='3%' sx={{ textAlign:'center', fontSize: "20px", fontFamily: "Josefin Sans" ,color:'gray'}}>
          High quality is the standard across our diverse portfolio of work. Our
          expertise & flexibility open up a huge world of possibilities for what
          you’re dreaming of creating.
        </Typography>
      </Grid>
    </Container>
  );
}

export default Page3;
