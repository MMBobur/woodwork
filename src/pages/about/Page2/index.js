import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

import CircleIcon from "@mui/icons-material/Circle";

function Page2() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid
          pt="7%"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#C5B338",
                fontWeight: 600,
                fontFamily: "Josefin Sans",
                fontSize: "16px",
                letterSpacing: 6,
              }}
            >
              ABOUT WOODWORKING
            </Typography>
            <Typography
              sx={{
                marginTop: "4%",
                fontSize: "42px",
                fontFamily: "Radjhani",
                fontWeight: 600,
              }}
            >
              30 YEARS OF WOODWORKING
            </Typography>
            <Typography
              sx={{ fontSize: "42px", fontFamily: "Radjhani", fontWeight: 600 }}
            >
              EXPERIENCE
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Box mt="7%" mb="5%" sx={{ width: "100%" }}>
            <Divider />

            <Grid mt='-5.2%' sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Typography sx={{fontSize:'35px',fontWeight:650}}>1995</Typography>
                <CircleIcon style={{ color: "gray" }} />
              </Box>

              <Box  sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Typography sx={{fontSize:'35px',fontWeight:700}}>2000</Typography>
                <CircleIcon style={{ color: "gray" }} />
              </Box>

              <Box  sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Typography sx={{fontSize:'35px',fontWeight:700}}>2005</Typography>
                <CircleIcon style={{ color: "gray" }} />
              </Box>

              <Box  sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Typography sx={{fontSize:'35px',fontWeight:700}}>2010</Typography>
                <CircleIcon style={{ color: "gray" }} />
              </Box>

              <Box  sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Typography sx={{fontSize:'35px',fontWeight:700}}>2015</Typography>
                <CircleIcon style={{ color: "gray" }} />
              </Box>

              <Box  sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Typography sx={{fontSize:'35px',fontWeight:700}}>2020</Typography>
                <CircleIcon style={{ color: "gray" }} />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Page2;
