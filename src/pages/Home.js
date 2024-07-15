// src/pages/Home.js
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Tilt } from 'react-tilt';
import Typed from 'typed.js';
import { styled } from '@mui/system';

const AnimatedTypography = styled(Typography)({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const AnimatedImage = styled('div')({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const PortfolioButton = styled(Button)({
  transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#f5f5f5',
    transform: 'scale(1.05)',
  },
});

const ContactButton = styled(Button)({
  transition: 'border-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out',
  '&:hover': {
    borderColor: '#000000',
    color: '#000000',
    transform: 'scale(1.05)',
  },
});








function Home() {
  const navigate = useNavigate();
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['I develop web apps', 'I love coding', 'I will make your website', 'I love testing'],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handlePortfolioClick = () => {
    navigate('/portfolio');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <Container>
      
      <Box mt={5}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimatedTypography variant="h4" component="h1" fontFamily={'Marker Felt'} mb={2}>
              I'm Melbin Joseph
            </AnimatedTypography>
            <Box mb={1} p={1} borderRadius={5}>
              <Typography variant="h5" component="p" fontFamily="Marker Felt">
                <span ref={typedRef}></span>
              </Typography>
            </Box>
            <Typography variant="body1" component="p" fontFamily={'Marker Felt'} mb={2}>
              I am an experienced software engineer with a demonstrated history of working in the software industry. I have a strong passion for coding and love to create innovative solutions to challenging problems.
            </Typography>
            <Box mt={2}>
              <PortfolioButton
                variant="contained"
                color="primary"
                style={{ marginRight: '10px', color: 'Black', backgroundColor: 'white' }}
                onClick={handlePortfolioClick}
              >
                My Portfolio
              </PortfolioButton>
              <ContactButton variant="outlined" color="primary" style={{ color: 'white', borderColor: 'white' }} onClick={handleContactClick}>
                Contact Me
              </ContactButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Tilt options={{ max: 25, scale: 1.05 }}>
              <AnimatedImage>
                <img
                  src="/Minimalist_Platform_Delivery_Courier_Website_Desktop_Prototype_Desktop_Prototype__2_-removebg-preview.png"
                  alt="Anonymous"
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
                />
              </AnimatedImage>
            </Tilt>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
