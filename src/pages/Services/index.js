import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    boxShadow: 'none',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function BasicGrid() {
    const data = [
        {
            id: 1,
            img: 'https://preview.colorlib.com/theme/woodwork/img/services/sp-3.jpg',
            title: 'CUSTOM CABINETRY',
            about: 'Kingsley Quality Woodworking builds all cabinetry for longevity & function. We begin with high quality materials.'
        },
        {
            id: 2,
            img: 'https://preview.colorlib.com/theme/woodwork/img/services/xsp-4.jpg.pagespeed.ic.AboX-2063-.webp',
            title: 'FUNITURE WOODWORKIN',
            about: 'Heirloom quality furniture is a Kingsley Quality Woodworking specialty. Passion as a furniture maker was what kick started.'
        },
        {
            id: 3,
            img: 'https://preview.colorlib.com/theme/woodwork/img/services/sp-5.jpg',
            title: 'ARCHITECTURAL WOODWORKING',
            about: 'Continuity & flow are maintained with our architectural woodworking. We can update any interior for the function of today.'
        }
    ]
    return (
        <Box sx={{ flexGrow: 1,mb:10 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', backgroundImage: `url("https://preview.colorlib.com/theme/woodwork/img/breadcrumb-bg.jpg")` }}>
                <Box sx={{ p: 9 }} >
                    <Typography variant='h4' sx={{ textTransform: 'uppercase', color: 'white', fontFamily: "Rajdhani sans-serif" }}>Services</Typography>
                    <Typography sx={{ fontFamily: "Josefin Sans, sans-serif", textAlign: 'center', color: 'white' }}> <span style={{ cursor: 'pointer' }}>Home</span> | Services</Typography>
                </Box>
            </Box>
            <Container>
                <Typography variant='h5' sx={{ textAlign: 'center', fontFamily: 'Josefin Sans', pt: 12, pb: 7 }}>High quality is the standard across our diverse portfolio of <br /> work.Our expertise & flexibility open up a huge world of <br />possibilities for what you’re dreaming of creating.</Typography>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6} md={6}>
                        <Item> <Card sx={{}}>
                            <CardMedia
                                component="img"
                                // height="380"
                                image="https://preview.colorlib.com/theme/woodwork/img/services/sp-1.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'start' }}>
                                    DESIGN SOLUTIONS & CONSULTING
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'start' }}>
                                    We can build anything you might want. One on one time with our clients and design professionals is how we discover and develop exactly what that is and how it can be made.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button sx={{ textTransform: 'none', color: 'black', textDecoration: 'underline' }}>Start your project</Button>
                            </CardActions>
                        </Card></Item>
                    </Grid>
                    <Grid xs={12} sm={6} md={6}>
                        <Item> <Card sx={{}}>
                            <CardMedia
                                component="img"
                                // height="380"
                                width='100%'
                                image="https://preview.colorlib.com/theme/woodwork/img/services/sp-2.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'start' }}>
                                    MOLDINGS & TRIM PACKAGES
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'start' }}>
                                    Kingsley Quality Woodworking produces high quality moldings in any species of wood. A full range of stock moldings are available as well as custom orders for an exact match of architectural.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button sx={{ textTransform: 'none', color: 'black', textDecoration: 'underline' }}>Start your project</Button>
                            </CardActions>
                        </Card></Item>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{pb:3}}>
                    {data.map((item, index) => (
                        <Grid xs={12} sm={6} md={4} key={index}>
                            <Item>
                                <Card sx={{ width:'100%' }}>
                                    <CardMedia
                                        component="img"
                                        // height="140"
                                        image={item.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div"sx={{ textAlign: 'start' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary"sx={{ textAlign: 'start' }}>
                                            {item.about}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Button sx={{ textTransform: 'none', color: 'black', textDecoration: 'underline' }}>Start your project</Button>
                                    </CardActions>
                                </Card>

                            </Item>
                        </Grid>
                    ))}
                </Grid>


                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <Item sx={{
                            backgroundImage: `url("https://preview.colorlib.com/theme/woodwork/img/service-callbg.jpg")`, p: 15
                        }}>
                            <Typography variant='h3' sx={{ textAlign: 'center', color: 'white' }}>Choose a floor type for your home remodeling project</Typography> <br />
                            <Button variant='contained' sx={{ bgcolor: '#BFB332', p: '14px 35px 12px' }}>Start your Project</Button>
                        </Item>
                    </Grid>
                </Grid>
            </Container>



        </Box>
    );
}
