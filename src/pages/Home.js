import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Typography, Button, IconButton, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Mail, Phone, ArrowDownward, Code, Palette, Psychology, Diversity3 } from '@mui/icons-material';

// Styled components
const GradientButton = styled(Button)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  borderRadius: '30px',
  padding: '12px 24px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
  '&:hover': {
    background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 24px rgba(102, 126, 234, 0.4)',
  },
});

const OutlineButton = styled(Button)({
  border: '2px solid rgba(255, 255, 255, 0.8)',
  color: 'white',
  borderRadius: '30px',
  padding: '10px 24px',
  textTransform: 'none',
  fontWeight: 600,
  backdropFilter: 'blur(10px)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid white',
    transform: 'translateY(-2px)',
  },
});

const HeroContainer = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  paddingTop: '80px', // Add top padding to account for navbar
  paddingBottom: '60px',
  paddingLeft: '20px',
  paddingRight: '20px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><defs><pattern id=\'circles\' patternUnits=\'userSpaceOnUse\' width=\'50\' height=\'50\'><circle cx=\'25\' cy=\'25\' r=\'1\' fill=\'%23ffffff\' fill-opacity=\'0.1\'/></pattern></defs><rect width=\'100\' height=\'100\' fill=\'url(%23circles)\'></rect></svg>")',
  },
});

const WhatIDoSection = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
  },
});

const ServiceCard = styled(Card)({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    background: 'rgba(255, 255, 255, 0.15)',
  },
});

const ServiceIcon = styled(Box)({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #ffffff20, #ffffff10)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
});

const AnimatedSocial = styled(motion.a)({
  color: 'white',
  margin: '0 10px',
  padding: '8px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)',
  },
});

const ScrollArrow = styled(IconButton)({
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)',
  },
});

const Home = () => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const whatIDoRef = useRef(null);

  const texts = [
    'I love coding',
    'I develop innovative web applications',
    'I can create your website from scratch.',
    'I enjoy testing and improving software.',
  ];

  const services = [
    {
      icon: <Code sx={{ fontSize: 28 }} />,
      title: 'Web Development',
      description: 'Utilizing React.js, HTML, CSS, JavaScript, C#, SQL, PostgreSQL, etc., I specialize in developing dynamic and responsive web applications. My passion lies in writing clean, modular, and maintainable code to build robust web solutions.',
    },
    {
      icon: <Palette sx={{ fontSize: 28 }} />,
      title: 'Responsive UI Design',
      description: '"A user interface is like a joke. If you have to explain it, it\'s not that good." I am committed to designing and implementing interfaces that are not only visually appealing but also highly intuitive.',
    },
    {
      icon: <Psychology sx={{ fontSize: 28 }} />,
      title: 'Experience Design',
      description: 'User experience is at the heart of my development philosophy. I focus on creating intuitive and enjoyable interactions that minimize frustration and maximize satisfaction.',
    },
    {
      icon: <Diversity3 sx={{ fontSize: 28 }} />,
      title: 'Diversity in Tech',
      description: 'Beyond my technical skills, I am a strong advocate for diversity and inclusion in the tech industry. I actively support initiatives that promote diversity, aiming to create a more equitable and welcoming tech community.',
    },
  ];
  useEffect(() => {
    const texts = [
      'I love coding',
      'I develop innovative web applications',
      'I can create your website from scratch.',
      'I enjoy testing and improving software.',
    ];
  
    let timeout;
    let index = 0;
    const type = () => {
      const current = texts[textIndex];
      if (index < current.length) {
        setCurrentText(current.slice(0, index + 1));
        index++;
        timeout = setTimeout(type, 50);
      } else {
        timeout = setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCurrentText('');
        }, 2000);
      }
    };
    type();
    return () => clearTimeout(timeout);
  }, [textIndex]); // ✅ no warning now
  

  const scrollToWhatIDo = () => {
    whatIDoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <HeroContainer>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center" sx={{ minHeight: 'calc(100vh - 140px)' }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography 
                  variant="h3" 
                  fontWeight="bold" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    mb: 2
                  }}
                >
                  I'm Melbin Joseph
                </Typography>
                <Typography 
                  variant="h5" 
                  color="rgba(255, 255, 255, 0.9)" 
                  gutterBottom 
                  sx={{ 
                    minHeight: '40px',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    mb: 3
                  }}
                >
                  {currentText}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{ marginLeft: 4 }}
                  >
                    |
                  </motion.span>
                </Typography>
                <Typography 
                  variant="body1" 
                  color="rgba(255, 255, 255, 0.8)" 
                  paragraph 
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    lineHeight: 1.6,
                    mb: 4
                  }}
                >
                  I am a dedicated software engineer currently working at the Kristu Jayanti Software Development Center,
                  where I focus on building dynamic web applications using Angular, Tailwind CSS, and Java. I strive to
                  create seamless user experiences and scalable solutions.
                </Typography>
                <Box mt={3} display="flex" gap={2} flexWrap="wrap" mb={3}>
                  <GradientButton onClick={() => navigate('/about')}>About Me</GradientButton>
                  <OutlineButton onClick={() => navigate('/contact')}>Contact Me</OutlineButton>
                </Box>
                <Box mt={3} display="flex" justifyContent="center">
                  <AnimatedSocial whileHover={{ scale: 1.1 }} href="#" title="GitHub">
                    <GitHub />
                  </AnimatedSocial>
                  <AnimatedSocial whileHover={{ scale: 1.1 }} href="#" title="LinkedIn">
                    <LinkedIn />
                  </AnimatedSocial>
                  <AnimatedSocial whileHover={{ scale: 1.1 }} href="#" title="Email">
                    <Mail />
                  </AnimatedSocial>
                  <AnimatedSocial whileHover={{ scale: 1.1 }} href="#" title="Phone">
                    <Phone />
                  </AnimatedSocial>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Box
                  component="img"
                  src="/Minimalist_Platform_Delivery_Courier_Website_Desktop_Prototype_Desktop_Prototype__2_-removebg-preview.png"
                  alt="Melbin"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '500px',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ textAlign: 'center', marginTop: '40px' }}
          >
            <ScrollArrow onClick={scrollToWhatIDo} size="large">
              <ArrowDownward fontSize="large" />
            </ScrollArrow>
          </motion.div>
        </Container>
      </HeroContainer>

      {/* What I Do Section */}
      <WhatIDoSection ref={whatIDoRef} px={3} py={8}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h3" 
              fontWeight="bold" 
              gutterBottom 
              textAlign="center" 
              color="white"
              sx={{ 
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                mb: 2
              }}
            >
              What I Do
            </Typography>
            <Typography 
              variant="h6" 
              textAlign="center" 
              color="rgba(255, 255, 255, 0.8)" 
              sx={{ 
                mb: 6, 
                maxWidth: '600px', 
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.25rem' },
                px: { xs: 2, sm: 0 }
              }}
            >
              I'm passionate about creating exceptional digital experiences through innovative solutions
            </Typography>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <motion.div variants={itemVariants}>
                    <ServiceCard>
                      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                        <ServiceIcon>
                          {service.icon}
                        </ServiceIcon>
                        <Typography 
                          variant="h5" 
                          fontWeight="bold" 
                          gutterBottom 
                          color="white"
                          sx={{ 
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            mb: 2
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          color="rgba(255, 255, 255, 0.8)" 
                          sx={{ 
                            lineHeight: 1.6,
                            fontSize: { xs: '0.9rem', sm: '1rem' }
                          }}
                        >
                          {service.description}
                        </Typography>
                      </CardContent>
                    </ServiceCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </WhatIDoSection>
    </>
  );
};

export default Home;