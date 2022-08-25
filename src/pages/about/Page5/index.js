import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import image1 from "../assets/image.webp";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: 780,
  // borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#BFB332" : "#308fe8",
  },
}));

export default function CustomizedProgressBars() {
  return (
    <Container maxWidth="xl">
      <Grid
        mt="10%"
        mb="5%"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {/* <BorderLinearProgress variant="determinate" value={40} /> */}

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Josefin Sans",
              color: "#BFB332",
              letterSpacing:3
            }}
          >
            OUR SKILLS
          </Typography>
          <Typography
            pr="22%"
            sx={{ fontSize: "42px ", fontFamily: "Rajdhani", fontWeight: 700 }}
          >
            {" "}
            OUR CARPENTRY TEAM IS FULL OF GREAT SKILLS
          </Typography>
          <Box mt="5%" sx={{ display: "flex", flexDirection: "row" }}>
            <Typography  sx={{fontSize:'18px',fontFamily:'Josefin Sans',fontWeight:550}}>Machine cutting</Typography>
            <Typography ml="465px">80%</Typography>
          </Box>
          <BorderLinearProgress
            style={{ marginTop: "1%" }}
            variant="determinate"
            value={80}
          />
          <Box mt="5%" sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{fontSize:'18px',fontFamily:'Josefin Sans',fontWeight:550}}>Cutting wood</Typography>
            <Typography ml="405px">70%</Typography>
          </Box>
          <BorderLinearProgress
            style={{ marginTop: "1%" }}
            variant="determinate"
            value={70}
          />
          <Box mt="5%" sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{fontSize:'18px',fontFamily:'Josefin Sans',fontWeight:550}}>Complete renovation</Typography>
            <Typography ml="475px">85%</Typography>
          </Box>
          <BorderLinearProgress
            style={{ marginTop: "1%" }}
            variant="determinate"
            value={85}
          />
          <Box mt="5%" sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{fontSize:'18px',fontFamily:'Josefin Sans',fontWeight:550}}>Revamping</Typography>
            <Typography ml="600px">95%</Typography>
          </Box>
          <BorderLinearProgress
            style={{ marginTop: "1%" }}
            variant="determinate"
            value={95}
          />
        </Grid>

        <Grid>
          <img width="100%" height='700px' src={image1} alt="Image" />
        </Grid>
      </Grid>
    </Container>
  ); 
}
