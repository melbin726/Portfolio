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

const SectionContainer = styled(Box)({
  backgroundColor: '#000000', // Black background
  color: '#FFFFFF', // White text
  padding: '50px',
  marginTop: '50px',
  borderRadius: '15px', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Box shadow for a 3D effect
});

const SectionTitle = styled(Typography)({
  marginBottom: '20px',
  fontWeight: 'bold',
  color: '#FFFFFF', // Ensure the title text is white
});

const SectionContent = styled(Typography)({
  marginBottom: '10px',
  color: '#FFFFFF', // Ensure the content text is white
});

function WhatIDo() {
  return (
    <SectionContainer>
      <Container>
      <AnimatedTypography
          variant="h3"
          component="h1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        <SectionTitle variant="h4" component="h2">What I Do</SectionTitle></AnimatedTypography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" fontWeight="bold">Web Development</Typography>
            <SectionContent variant="body1">
            Utilizing React.js, HTML, CSS,JavaScript, C# ,sql, postgresql....etc I specialize in developing dynamic and responsive web applications. My passion lies in writing clean, modular, and maintainable code to build robust web solutions.
            </SectionContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" fontWeight="bold">Responsive UI Design</Typography>
            <SectionContent variant="body1">
            "A user interface is like a joke. If you have to explain it, it's not that good." I am committed to designing and implementing interfaces that are not only visually appealing but also highly intuitive. My goal is to ensure a seamless user experience across all devices and platforms, employing best practices in responsive design and accessibility.            </SectionContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" fontWeight="bold">Experience Design</Typography>
            <SectionContent variant="body1">
            User experience is at the heart of my development philosophy. I focus on creating intuitive and enjoyable interactions that minimize frustration and maximize satisfaction. My experience in user-centered design principles helps me develop interfaces that are easy to navigate and use, ensuring that the end product meets the needs and expectations of its users.
            </SectionContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" fontWeight="bold">Diversity in Tech</Typography>
            <SectionContent variant="body1">
            Beyond my technical skills, I am a strong advocate for diversity and inclusion in the tech industry. I believe that a diverse and inclusive environment fosters innovation and growth. I actively support initiatives that promote diversity, aiming to create a more equitable and welcoming tech community for everyone.            </SectionContent>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
}

function Home() {
  const navigate = useNavigate();
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['I love coding', 'I develop innovative web applications', 'I can create your website from scratch.', 'I enjoy testing and improving software.'],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handlePortfolioClick = () => {
    navigate('/about');
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
            I am a dedicated software engineer currently working at the Kristu Jayanti Software Development Center, where I focus on building dynamic web applications using Angular, Tailwind CSS, and Java. With hands-on experience in both frontend and backend technologies, I strive to create seamless user experiences and efficient, scalable solutions. My previous internships at MicroGenesis TechSoft and Talview have honed my skills in web development, where I consistently demonstrated professionalism and a commitment to delivering quality work.
            </Typography>
            <Box mt={2}>
              <PortfolioButton
                variant="contained"
                color="primary"
                style={{ marginRight: '10px', color: 'Black', backgroundColor: 'white' }}
                onClick={handlePortfolioClick}
              >
                About Me
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
      <WhatIDo />
    </Container>
  );
}

export default Home;
