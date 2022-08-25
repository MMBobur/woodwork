import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import LinearProgress from '@mui/material/LinearProgress'
import imagee from '../assets/p5.webp'

function Page7() {
  return (
    <Container maxWidth="xl">
      <Grid mt="10%" mb="8%">
        <Grid
          p="7% 28% 5% 5%"
          sx={{ backgroundColor: "#FAF5F0", width: "1200px", height: "470px" }}
        >
          <Typography
            sx={{
              color: "#4D4F4B",
              fontSize: "26px",
              letterSpacing: 1,
              fontFamily: "Josefin Sans ",
              fontWeight: 300,
              lineHeight: "40px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida viverra maecenas accumsan lacus
            vel facilisis.
          </Typography>
          <Box
            mt="5%"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Rajdhani",
                  fontWeight: 700,
                }}
              >
                CHARLES SCHWARTZ
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Josefin Sans",
                  color: "gray",
                }}
              >
                NEW YORK
              </Typography>
            </Box>
            <Box>
              <Typography>
                <StarIcon style={{ color: "#BFB332" }} />
                <StarIcon style={{ color: "#BFB332" }} />
                <StarIcon style={{ color: "#BFB332" }} />
                <StarIcon style={{ color: "#BFB332" }} />
                <StarIcon style={{ color: "#BFB332" }} />
              </Typography>
            </Box>
          </Box>
          <Grid mt='-57%' ml='119%'>
          <img width='470px' src={imagee} alt="rasm"/>
        </Grid>

        </Grid>
      
      </Grid>
    </Container>
  );
}

export default Page7;
