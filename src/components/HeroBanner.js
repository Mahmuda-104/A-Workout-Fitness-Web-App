import React from 'react';
import { Box, Stack, Typography ,Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg:'350px', xs:'70px'},ml:{sm:'50px'}}} position="relative" p="20px">
        <div  style={{marginTop:'-280px',marginLeft:'365px'}}>
        <Typography color="red" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        </div>
        <div style={{marginTop:'00px',marginLeft:'220px'}}>
        <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="3px">
            Sweat,Smile and Repeat
        </Typography>
        </div>
        <div style={{marginTop:'380px',marginLeft:'-45px'}}>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises
        </Typography>
        <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: "red", padding:'10px'}}>Explore Exercise</Button>
        <Typography fontWeight={600} color="red" sx={{opacity:0.2, display:{ lg: 'block', xs:'none'}}} fontSize="150px" marginTop="-33px">
            Exercise
        </Typography>
        </div>
    </Box>
  )
}

export default HeroBanner