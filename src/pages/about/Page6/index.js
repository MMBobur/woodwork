import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const data = [
  {
    image:
      " https://preview.colorlib.com/theme/woodwork/img/team/xteam-1.jpg.pagespeed.ic.bmONt2ibzA.webp",
    name: "Effia Bryan ",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },

  {
    image:
      " https://preview.colorlib.com/theme/woodwork/img/team/xteam-2.jpg.pagespeed.ic.Vap_AqEB-w.webp",
    name: "Nell Copeland ",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },

  {
    image:
      " https://preview.colorlib.com/theme/woodwork/img/team/xteam-3.jpg.pagespeed.ic.UyAWPmVSQw.webp",
    name: "Erik Ryan ",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },

  {
    image:
      "https://preview.colorlib.com/theme/woodwork/img/team/xteam-4.jpg.pagespeed.ic.bZm3Irufvx.webp",
    name: "Katharine King ",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
];

function Page6() {
  return (
    <Grid sx={{ backgroundColor: "#FAF5F0", width: "100%", height: "780px" }}>
      <Grid
        pt="8%"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{
            color: "#bfb332",
            fontSize: "16px",
            fontFamily: "Josefin Sans",
            letterSpacing: 4,
          }}
        >
          WOODMASTERS
        </Typography>
        <Typography
          mt="1%"
          sx={{ fontSize: "42px", fontFamily: "Rajdhani", fontWeight: 600 }}
        >
          MEET OUR TEAM
        </Typography>
      </Grid>

      <Grid
        mt="3%"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {data.map((val) => {
          return (
            <Grid
              pr="3%"
              pl="3%"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                style={{ width: "250px", height: "250px" }}
                src={val.image}
              />
              <Typography
                mt="6%"
                sx={{
                  fontSize: "26px",
                  fontFamily: "Rajdhani",
                  fontWeight: 700,
                }}
              >
                {val.name}
              </Typography>

              <Typography
                mt="4%"
                sx={{
                  letterSpacing: 1,
                  textAlign: "center",
                  fontSize: "20px",
                  fontFamily: "Josefin Sans",
                  fontWeight: 300,
                  color: "#4D4F4B",
                  lineHeight: "27px",
                }}
              >
                {val.text}
              </Typography>
              <Box mt="6%" sx={{ display: "flex", flexDirection: "row" }}>
                <Typography ml='-55%'>
                  <FaFacebookF style={{ fontSize: "20px" }} />
                </Typography>
                <Typography ml="35%">
                  <BsTwitter style={{ fontSize: "20px" }} />
                </Typography>
                <Typography ml='35%'>
                  <AiOutlineInstagram style={{ fontSize: "20px" }} />
                </Typography>
                <Typography ml='35%'>
                  <BsYoutube style={{ fontSize: "20px" }} />
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Page6;
