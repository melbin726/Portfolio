import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Typography, Button, IconButton, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Mail, Phone, ArrowDownward, Code, Palette, Psychology, Diversity3 } from '@mui/icons-material';

// Define texts array outside the component
const texts = [
  'I love coding',
  'I develop innovative web applications',
  'I can create your website from scratch.',
  'I enjoy testing and improving software.',
];

// Styled components
const GradientButton = styled(Button)({
  // Always apply a subtle black to dark grey gradient
  background: 'linear-gradient(135deg, #222222 0%, #000000 100%)',
  color: 'white',
  borderRadius: '30px',
  padding: '12px 24px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)', // Always has a shadow for depth
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #111111 0%, #000000 100%)', // Darker on hover
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
  },
  // Add active state for touch devices (optional, but good practice)
  '&:active': {
    background: 'linear-gradient(135deg, #000000 0%, #111111 100%)', // Slightly inverted/darker on press
    transform: 'translateY(0)', // Resets on press
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.4)',
  },
});

const OutlineButton = styled(Button)({
  // Always apply a subtle light gray gradient
  background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  color: '#333333',
  borderRadius: '30px',
  padding: '10px 24px',
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)', // Always has a subtle shadow
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 100%)', // Darker gradient on hover
    borderColor: 'rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
  },
  '&:active': {
    background: 'linear-gradient(135deg, #d0d0d0 0%, #e0e0e0 100%)', // Slightly inverted/darker on press
    transform: 'translateY(0)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
});

const HeroContainer = styled(Box)({
  minHeight: '100vh',
  background: 'radial-gradient(circle at center, #f5f5f5 0%, #ffffff 75%)',
  color: '#333333',
  paddingTop: '80px',
  paddingBottom: '60px',
  paddingLeft: '20px',
  paddingRight: '20px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
});

const WhatIDoSection = styled(Box)({
  background: 'linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%)',
  color: '#333333',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)',
  },
});

const ServiceCard = styled(Card)({
  // Always apply a subtle radial gradient
  background: 'radial-gradient(circle at top left, #ffffff 0%, #f9f9f9 100%)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(0, 0, 0, 0.04)',
  borderRadius: '15px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  height: '100%',
  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.04)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)',
    background: 'radial-gradient(circle at top left, #ffffff 0%, #f0f0f0 100%)', // Subtle gradient change on hover
  },
});

const ServiceIcon = styled(Box)({
  // Always apply a subtle radial gradient
  width: '55px',
  height: '55px',
  borderRadius: '50%',
  background: 'radial-gradient(circle at center, #f5f5f5 0%, #e8e8e8 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  color: '#333333',
  transition: 'all 0.3s ease',
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  '&:hover': {
    background: 'radial-gradient(circle at center, #e0e0e0 0%, #d0d0d0 100%)',
    transform: 'scale(1.08)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
});

const AnimatedSocial = styled(motion.a)({
  // Always apply a subtle light background and border
  color: '#666666',
  margin: '0 10px',
  padding: '10px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, 0.03)', // Subtle background even without hover
  border: '1px solid rgba(0,0,0,0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    color: '#000000',
    borderColor: 'rgba(0,0,0,0.15)',
    transform: 'translateY(-3px) scale(1.1)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  '&:active': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    transform: 'translateY(0)',
    boxShadow: 'none',
  },
});

const ScrollArrow = styled(IconButton)({
  // Always apply a subtle light background and border
  color: '#666666',
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    color: '#000000',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-3px)',
  },
  '&:active': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    transform: 'translateY(0)',
    boxShadow: 'none',
  },
});

const Home = () => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const whatIDoRef = useRef(null);

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
  }, [textIndex]);

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
                    mb: 2,
                    color: '#000000'
                  }}
                >
                  I'm Melbin Joseph
                </Typography>
                <Typography
                  variant="h5"
                  color="#333333"
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
                  color="#666666"
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
                  <AnimatedSocial whileHover={{ scale: 1.1 }} href="#" title="Mail">
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
                whileHover={{ scale: 1.03 }}
              >
                <Box
                  component="img"
                  src="/Minimalist_Platform_Delivery_Courier_Website_Desktop_Prototype_Desktop_Prototype__2_-removebg-preview.png"
                  alt="Melbin"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '500px',
                    borderRadius: '15px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>

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
              color="#000000"
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
              color="#666666"
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
                          color="#333333"
                          sx={{
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            mb: 2
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="#666666"
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