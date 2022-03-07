import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { Rating } from '@material-ui/lab'

import useStyles from './styles';

function Map() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coords = {lat: 0, lng: 0};

  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyCuNbm2KCn6LaVUhA9TuCO_VviGEnUx_8I'}}
            defaultCenter={coords}
            center={coords}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={''}
            onChildClick={''}
        >

        </GoogleMapReact>
    </div>
  )
}

export default Map