import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Container, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./styles.css";

import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function RowAndColumnSpacing() {
  const data = [
    {
      id: "1",
      img: "https://preview.colorlib.com/theme/woodwork/img/blog/xblog-1.jpg.pagespeed.ic.WTwDUIfoOc.webp",
      title: "HOMELAND SECURITY DESIGNATES FOREST AND WOOD...",
      year: "by Derrick Armstrong Apr 07, 2020",
      info: "The U.S. Department of Homeland Security has identified the wood products industry as an essential critical infrastructure workforce in the nation’s...",
    },
    {
      id: "2",
      img: "https://preview.colorlib.com/theme/woodwork/img/blog/xblog-2.jpg.pagespeed.ic.5J8MRlyp_t.webp",
      title: "ALL THE WOODWORKING COMPANIES WHO NOW MAKE HEAL",
      year: "by Derrick Armstrong Apr 07, 2020",
      info: "The U.S. Department of Homeland Security has identified the wood products industry as an essential critical infrastructure workforce in the nation’s...",
    },
    {
      id: "3",
      img: "https://preview.colorlib.com/theme/woodwork/img/blog/xblog-3.jpg.pagespeed.ic.zA3Zkmm3d3.webp",
      title: "A WOODWORK ENTHUSIAST'S HOME IN XIAMEN IS SET INSIDE A FORMER",
      year: "by Derrick Armstrong Apr 07, 2020",
      info: "The U.S. Department of Homeland Security has identified the wood products industry as an essential critical infrastructure workforce in the nation’s...",
    },
    {
      id: "4",
      img: "https://preview.colorlib.com/theme/woodwork/img/blog/xblog-4.jpg.pagespeed.ic.xHGROZ6DYi.webp",
      title: "JUST BECAUSE IT ISN’T HAPPENING RIGHT NOW DOESN’T MEAN",
      year: "by Derrick Armstrong Apr 07, 2020",
      info: "The U.S. Department of Homeland Security has identified the wood products industry as an essential critical infrastructure workforce in the nation’s...",
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
    <Container>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Box>
              <CardMedia
                className="img"
                component="img"
                image="https://preview.colorlib.com/theme/woodwork/img/blog/xblog-large.jpg.pagespeed.ic.-IVL6B3yJi.webp"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ color: "#BFB338", mt: "-8%", mb: 3 }}>
                  TRICKS
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontFamily: "initial", fontWeight: "600" }}
                >
                  NEW ORLEANS WOODWORKER PIVOTS TO MAKING <br />
                  FACE SHIELDS FOR LOCAL HOSPITALS
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
              </CardContent>
            </Box>

            <Typography borderBottom="1px solid #CDCDC4" mt="30px" mb="30px" />

            {data.map((item, index) => (
              <Box key={index}>
                <Box sx={{ display: { lg: "flex", sm: "flex" } }}>
                  <CardMedia
                    component="img"
                    //  height="140"
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography sx={{ color: "#BFB338" }}>TRICKS</Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: "bolder",
                        ":hover": { textDecoration: "underline" },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      fontSize="small"
                      sx={{
                        mt: 2,
                        mb: 3,
                        fontFamily: "cursive",
                        fontStyle: "italic",
                      }}
                    >
                      {item.year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.info}
                    </Typography>
                  </CardContent>
                </Box>
                <Typography borderBottom="1px solid #CDCDC4" mt="5%" mb="5%" />
              </Box>
            ))}

            <Stack spacing={2}>
              <Pagination count={3} variant="outlined" />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box
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

            <Typography variant="h6" sx={{ mt: "16%", fontWeight: "bolder" }}>
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
  );
}
