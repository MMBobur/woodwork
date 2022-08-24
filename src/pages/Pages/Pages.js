import { Button, Grid, Typography,Box } from "@mui/material";
import React from "react";
import "./Page.css";
const Pages = () => {
  return (
    <>
    
    <Box className="breadcrumb__text">
    <h2>Portfolio</h2>
    <Box className="breadcrumb__links">
    <a href="#" > Home   </a> |
    <span>  Portfolio </span>
    </Box>
    </Box>
    <Box>
    <h4 style={{textAlign:"center",fontSize:"2rem",color:"rgb(17, 17, 17)"}}>
   <i> Enjoy some select made projects and get inspired! Woodworking projects are not <br/> only made with superior craftsmanship, but with passion and love too.
   </i>

    </h4>
    </Box>
          <Box className="grid">
        <Grid container rowSpacing={2} sx={{ pl: "3%", pr: "3%",mt:"2%" }}>
          <Grid md={4} sm={6} xs={12}>
            <Box className="img-wrapper">
              <img className="blur" src="https://picsum.photos/500?random=1" />
              <Box className="content fade">
                <h4 style={{ position: "absolute", display: "block" }}>
                  Kingley mension staries
                </h4>

                <Typography
                  style={{
                    position: "absolute",
                    display: "block",
                    marginTop: "20%",
                  }}
                >
                  {" "}
                  450 Strand, Charing Cross, London
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <Box className="img-wrapper">
              <img
                className="zoom blur"
                src="https://picsum.photos/500?random=2"
              />
              <Box className="content fade">
                <h4 style={{ position: "absolute", display: "block" }}>
                  Kingley mension staries
                </h4>

                <Typography
                  style={{
                    position: "absolute",
                    display: "block",
                    marginTop: "20%",
                  }}
                >
                  {" "}
                  450 Strand, Charing Cross, London
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <Box className="img-wrapper">
              <img className="blur" src="https://picsum.photos/500?random=3" />
              <Box className="content slide-left">
                <h4 style={{ position: "absolute", display: "block" }}>
                  Kingley mension staries
                </h4>

                <Typography
                  style={{
                    position: "absolute",
                    display: "block",
                    marginTop: "20%",
                  }}
                >
                  {" "}
                  450 Strand, Charing Cross, London
                </Typography>
              </Box>
            </Box>
          </Grid><br/>

        </Grid>
      </Box>
      <Grid container  sx={{ pl: "3%", pr: "3%",mt:"2%"  }}>

      <Grid md={3} sm={6} xs={12}>
      <Box
        className="img-wrapper"
      >
        <img className="blur" style={{height:"600px"}} src="https://picsum.photos/500?random=4" />
        <Box className="content fade">
          <h4 style={{ position: "absolute", display: "block" }}>
            Kingley mension staries
          </h4>

          <Typography
            style={{
              position: "absolute",
              display: "block",
              marginTop: "20%",
            }}
          >
            {" "}
            450 Strand, Charing Cross, London
          </Typography>
        </Box>
      </Box>
    </Grid>
    <Grid md={3} sm={6} xs={12}>
      <Box
        className="img-wrapper"
      >
        <img
          className="zoom blur"
          src="https://picsum.photos/500?random=5"
          style={{height:"600px"}}
        />
        <Box className="content fade">
          <h4 style={{ position: "absolute", display: "block" }}>
            Kingley mension staries
          </h4>

          <Typography
            style={{
              position: "absolute",
              display: "block",
              marginTop: "20%",
            }}
          >
            {" "}
            450 Strand, Charing Cross, London
          </Typography>
        </Box>
      </Box>
    </Grid>
    <Grid md={3} sm={6} xs={12}>
      <Box
        className="img-wrapper"
      >
        <img
          className="zoom blur"
          src="https://picsum.photos/500?random=6"
          style={{height:"600px"}}
        />
        <Box className="content fade">
          <h4 style={{ position: "absolute", display: "block" }}>
            Kingley mension staries
          </h4>

          <Typography
            style={{
              position: "absolute",
              display: "block",
              marginTop: "20%",
            }}
          >
            {" "}
            450 Strand, Charing Cross, London
          </Typography>
        </Box>
      </Box>
    </Grid>
    <Grid md={3} sm={6} xs={12}>
      <Box
        className="img-wrapper"
      >
        <img className="blur" src="https://picsum.photos/500?random=7" style={{height:"600px"}}/>
        <Box className="content slide-left">
          <h4 style={{ position: "absolute", display: "block" }}>
            Kingley mension staries
          </h4>

          <Typography
            style={{
              position: "absolute",
              display: "block",
              marginTop: "20%",
            }}
          >
            {" "}
            450 Strand, Charing Cross, London
          </Typography>
        </Box>
      </Box>
    </Grid>
    </Grid>
      <Grid container rowSpacing={2} sx={{ pl: "3%", pr: "3%",mt:"2%" }}>
      <Grid md={4} sm={6} xs={12}>
        <Box className="img-wrapper">
          <img className="blur" src="https://picsum.photos/500?random=8" />
          <Box className="content fade">
            <h4 style={{ position: "absolute", display: "block" }}>
              Kingley mension staries
            </h4>

            <Typography
              style={{
                position: "absolute",
                display: "block",
                marginTop: "20%",
              }}
            >
              {" "}
              450 Strand, Charing Cross, London
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid md={4} sm={6} xs={12}>
        <Box className="img-wrapper">
          <img
            className="zoom blur"
            src="https://picsum.photos/500?random=9"
          />
          <Box className="content fade">
            <h4 style={{ position: "absolute", display: "block" }}>
              Kingley mension staries
            </h4>

            <Typography
              style={{
                position: "absolute",
                display: "block",
                marginTop: "20%",
              }}
            >
              {" "}
              450 Strand, Charing Cross, London
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid md={4} sm={6} xs={12}>
        <Box className="img-wrapper">
          <img className="blur" src="https://picsum.photos/500?random=10" />
          <Box className="content slide-left">
            <h4 style={{ position: "absolute", display: "block" }}>
              Kingley mension staries
            </h4>

            <Typography
              style={{
                position: "absolute",
                display: "block",
                marginTop: "20%",
              }}
            >
              {" "}
              450 Strand, Charing Cross, London
            </Typography>
          </Box>
        </Box>
      </Grid><br/>
</Grid>
<Box style={{textAlign:"center",marginTop:"2%",marginBottom:"2%"}}>
<Button variant="contained"  sx={{width:"400px",padding:"0.9%",backgroundColor:"#8f9a27"}}>Load More Project</Button>
</Box>
    </>
  );
};

export default Pages;
