import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box >
      <Typography><img style={{width:'100%',height:'100%'}} src="https://preview.colorlib.com/theme/woodwork/img/blog/details/xblog-hero.jpg.pagespeed.ic.k7XFF6xIC9.webp" alt=""/></Typography>
    </Box>
    );
}
