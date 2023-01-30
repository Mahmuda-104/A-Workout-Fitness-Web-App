import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import HeroBannerImage from '../assets/images/img_3.jpg';
import { Component } from 'react';
import { Box } from '@mui/system';

const Navbar = () => {
  return (
        <Box style={{backgroundImage: `url("${HeroBannerImage}")`,width: '1400px',height:'630px',marginTop:'-30px', marginRight:'-39px',marginBottom:'-700px',backgroundSize:'cover'}} >
          <div>
    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm:'122px', xs:'40px'}, mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px="20px">
      <Link to="/"><div>
        <img src={Logo} alt="logo" style={{width: '48px', height:'48px', margin:'0 20px'}} /></div>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{textDecoration: 'none' ,color:'#3A1212', borderBottom: '3px solid #FF2625',marginLeft:'700px'}}>Home</Link>
        <a href="exercises" style={{textDecoration: 'none' ,color:'#3A1212'}}>Exercises</a> 
        <a>GymInfo</a>
      </Stack>
    </Stack>
    </div>
    </Box>
  )
}

export default Navbar;
//a to scroll down this page
//mt->margin top
//sm->small devices, xs->extra small devices