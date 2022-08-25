import React from "react";
import GoogleMapReact from 'google-map-react';
import { Box } from '@mui/material';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 40.3662148,
      lng: 71.2255422
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <Box sx={{ height: {xs:'50vh', md:'100%', sm:'100%', lg:"100%"}, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={40.3662148}
          lng={71.2255422}
          text="My Marker"
        />
      </GoogleMapReact>
    </Box>
  );
}