import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";
import circle from "../assets/backg.webp";
import Box from "@mui/material/Box";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
// import CarpenterIcon from "@mui/icons-material/Carpenter";
import { ImHammer2, ImBriefcase } from "react-icons/im";
import {GiCircularSawblade , GiChainsaw} from 'react-icons/gi'
import "./index.css";

function Page4() {
  return (
    <Grid
      mt="8%"
      pt="8%"
      sx={{ backgroundColor: "#FAF5F0", width: "100%", height: "500px" }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Grid>
          <Grid>
            <img src={circle} width="170px" alt="" />
            <Typography
              mt="-8%"
              ml="3%"
              sx={{ position: "absolute", fontSize: "70px", color: "#C9BF52" }}
            >
              <ImHammer2 />
            </Typography>
          </Grid>
          <Grid
            mt="8%"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "40px" }}>
              <CountUp end={15800} duration={3.5} />
            </Typography>
            <Typography sx={{ fontSize: "19px", fontFamily: "Josefin Sans" }}>
              Projects done
            </Typography>
          </Grid>
        </Grid>

        <Grid>
          <Grid>
            <img src={circle} width="170px" alt="" />
            <Typography
              mt="-8%"
              ml="3%"
              sx={{ position: "absolute", fontSize: "70px", color: "#C9BF52" }}
            >
              <SquareFootIcon style={{ fontSize: "90px" }} />
            </Typography>
          </Grid>
          <Grid
            mt="8%"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "40px" }}>
              <CountUp end={1028} duration={3.5} />
            </Typography>
            <Typography sx={{ fontSize: "19px", fontFamily: "Josefin Sans" }}>
              CLients served
            </Typography>
          </Grid>
        </Grid>

        <Grid>
          <Grid>
            <img src={circle} width="170px" alt="" />
            <Typography
              mt="-8%"
              ml="3%"
              sx={{ position: "absolute", color: "#C9BF52" }}
            >
              <GiChainsaw style={{ fontSize: "90px" }} />
            </Typography>
          </Grid>
          <Grid
            mt="8%"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "40px" }}>
              <CountUp end={3297} duration={3.5} />
            </Typography>
            <Typography sx={{ fontSize: "19px", fontFamily: "Josefin Sans" }}>
              Carpenters employed
            </Typography>
          </Grid>
        </Grid>

        <Grid>
          <Grid>
            <img src={circle} width="170px" alt="" />
            <Typography
              mt="-8%"
              ml="3%"
              sx={{ fontSize: "70px", position: "absolute", color: "#C9BF52" }}
            >
              <GiCircularSawblade />
            </Typography>
          </Grid>
          <Grid
            mt="8%"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "40px" }}>
              <CountUp end={2684} duration={3.5} />
            </Typography>
            <Typography sx={{ fontSize: "19px", fontFamily: "Josefin Sans" }}>
              Customers served
            </Typography>
          </Grid>
        </Grid>

        <Grid>
          <Grid>
            <img src={circle} width="170px" alt="" />
            <Typography
              mt="-8%"
              ml="3%"
              sx={{ fontSize: "70px", position: "absolute", color: "#C9BF52" }}
            >
              <ImBriefcase />
            </Typography>
          </Grid>
          <Grid
            mt="8%"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "40px" }}>
              <CountUp end={1200} duration={3.5} />
            </Typography>
            <Typography sx={{ fontSize: "19px", fontFamily: "Josefin Sans" }}>
              Items sold
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Page4;
