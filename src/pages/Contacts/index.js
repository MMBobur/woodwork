import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button,Typography } from '@mui/material';
import { Container } from '@mui/system';
// import Rasm from "img/breadcrumb-bg.jpg"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Contacts() {
    return (
        <Box sx={{ width: '100%',mb:5}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Item  style={{ color: 'white', textAlign: 'center',height:'180px',backgroundImage: `url(	https://preview.colorlib.com/theme/woodwork/img/breadcrumb-bg.jpg)` }}>
                        <Typography variant='h3'style={{marginTop:'3%'}}>CONTACTS</Typography>
                        <Typography> Home | Contacts</Typography>
                    </Item>
                </Grid>
                <Container maxWidth="sm">
                <Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:'15%'}}>
                    <Typography variant='h3' style={{textAlign:'center',marginBottom:'5%'}}>GET IN TOUCH</Typography>
                   <> <input style={{width:'100%',padding:'2%' }} placeholder='Name'/><br/></>
                   <> <input style={{width:'100%',padding:'2%',marginTop:'3%'}} placeholder='Phone'/><br/></>
                   <> <input style={{width:'100%',padding:'2%',marginTop:'3%'}} placeholder='Email'/><br/></>
                   <> <input style={{width:'92%',padding:'6%',marginTop:'3%'}} placeholder='Your addres'/><br/></>
                   <>
                   <Button style={{width:'104%',padding:'2%',backgroundColor:'black',marginTop:'2%',marginBottom:'5%'}} variant="contained">SEND MESSAGE</Button>
                   </>
                </Grid>
                </Container>
            </Grid>
        </Box>
    );
}
