import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Woodwork from '../../pages/Home/img/WoodWork.JPG'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ButtonAppBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (left, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [left]: open });
    };

    const AccardionExample = [
        <Accordion sx={{ background: 'none', boxShadow: 'none', marginLeft: '-7px', borde: 'none', color: 'white' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Pages</Typography>
            </AccordionSummary>
            <AccordionDetails >
                <Button onClick={() => navigate('/Portfolio')} sx={{ color: 'white', paddingRight: '100px', fontSize: '10px' }}>Portfolio</Button>
                <Button onClick={() => navigate('/blog')} sx={{ color: 'white', fontSize: '10px', paddingRight: '100px' }}>Blog Details</Button>
                <Button onClick={toggleDrawer(state.left, false)} sx={{ color: 'white', paddingRight: '100px', fontSize: '10px' }}>Get-A-Quote</Button>
            </AccordionDetails>
        </Accordion>
    ]

    const list = () => (
        <Box
            sx={{ width: 250, padding: 2 }}
            role="presentation"
            onKeyDown={toggleDrawer(state.left, false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemText>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <img src={Woodwork} alt='something went wrong' />
                            <Button onClick={toggleDrawer(state.left, false)} sx={{ color: 'black' }}><CloseIcon sx={{ fontSize: '30px' }} /></Button>
                        </Box>
                        <Accordion sx={{ background: '#4C4C4C', borderRadius: '0px', marginTop: '5%' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ background: '#222222', padding: 1, borderRadius: '8px', color: 'white', fontWeight: 600 }}>MENU</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ textAlign: 'left' }}>
                                <Button onClick={() => navigate('/')} sx={{ color: 'white', paddingRight: '163px' }}>Home</Button>
                                <Button onClick={() => navigate('/about')} to='/about' sx={{ color: 'white', paddingRight: '158px' }}>About</Button>
                                <Button onClick={() => navigate('/servisces')} to='/services' sx={{ color: 'white', paddingRight: '135px' }}>Services</Button>
                                {AccardionExample}
                                <Button onClick={() => navigate('/blog')} to='/blog' sx={{ color: 'white', paddingRight: '168px' }}>Blog</Button>
                                <Button onClick={() => navigate('/contacts')} to='/contacts' sx={{ color: 'white', paddingRight: '130px' }}>Contacts</Button>

                            </AccordionDetails>
                        </Accordion>
                        <Button variant='contained' sx={{ background: '#BFB332', fontFamily: 'Bahnschrift Condensed', fontSize: '20px', fontWeight: 600, letterSpacing: '2px', wordSpacing: '4px', '&:hover': { background: '#BFB332' }, borderRadius: '0px', width: '80%' }}>GET A QUOTE</Button>
                    </ListItemText>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static" sx={{ background: 'white', color: 'black', height: '80px' }}>
                <Toolbar>
                    <Box sx={{ marginTop: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: { xs: '100%', sm: '30%', md: '30%' } }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <img src={Woodwork} alt='Wood Work' />
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(state.left, true)}
                            sx={{ mr: 2, display: { xs: 'flex', sm: 'none', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            open={state[state.left]}
                            onClose={toggleDrawer(state.left, false)}
                        >
                            {list(state.left)}
                        </Drawer>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, marginTop: '10px', height: '50px', alignItems: 'center', width: '100%', justifyContent: 'end' }}>
                        <Box sx={{ textAlign: 'end', width: '100%', }}>
                            <Button onClick={() => navigate('/')} sx={location.pathname === '/' ? { marginRight: '2%', borderRadius: '0px', fontFamily: 'Bahnschrift Condensed', borderBottom: '2px solid #BFB332' } : { marginRight: '2%', fontFamily: 'Bahnschrift Condensed' }} color="inherit">HOME</Button>
                            <Button onClick={() => navigate('/about')} sx={location.pathname === '/about' ? { marginRight: '2%', borderRadius: '0px', fontFamily: 'Bahnschrift Condensed', borderBottom: '2px solid #BFB332' } : { marginRight: '2%', fontFamily: 'Bahnschrift Condensed' }} color="inherit">ABOUT</Button>
                            <Button onClick={() => navigate('/services')} sx={location.pathname === '/services' ? { marginRight: '2%', borderRadius: '0px', fontFamily: 'Bahnschrift Condensed', borderBottom: '2px solid #BFB332' } : { marginRight: '2%', fontFamily: 'Bahnschrift Condensed' }} color="inherit">SERVICES</Button>
                            <Button onClick={handleClick} sx={{ marginRight: '2%', fontFamily: 'Bahnschrift Condensed' }} color="inherit">PAGES</Button>
                            <Button onClick={() => navigate('/blog')} sx={location.pathname === '/blog' ? { marginRight: '2%', borderRadius: '0px', fontFamily: 'Bahnschrift Condensed', borderBottom: '2px solid #BFB332' } : { marginRight: '2%', fontFamily: 'Bahnschrift Condensed' }} color="inherit">BLOG</Button>
                            <Button onClick={() => navigate('/contacts')} sx={location.pathname === '/contacts' ? { marginRight: '2%', borderRadius: '0px', fontFamily: 'Bahnschrift Condensed', borderBottom: '2px solid #BFB332' } : { marginRight: '2%', fontFamily: 'Bahnschrift Condensed' }} color="inherit">CONTACTS</Button>
                        </Box>
                        <Button sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, borderRadius: '0px', fontFamily: 'Bahnschrift Condensed', background: '#BFB332', '&:hover': { background: '#BFB332' }, color: 'white', width: '15%', height: '50px', marginRight: '3%' }}>GET A QUITE</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{fontFamily:'Bahnschrift Condensed'}}
                onClick={handleClose}
            >
                <MenuItem onClick={()=>navigate('/portfolio')}>Portfolio</MenuItem>
                <MenuItem onClick={()=>navigate('/blogDetails')}>Blog Details</MenuItem>
                <MenuItem onClick={()=>navigate('/')}>Get-A-Quote</MenuItem>
            </Menu>

        </Box>
    );
}
