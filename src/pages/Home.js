import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Typography, Button, IconButton, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Mail, Phone, ArrowDownward, Code, Palette, Psychology, Diversity3 } from '@mui/icons-material';
import { useThemeContext } from '../ThemeContext';

// Define texts array outside the component
const texts = [
  'I love coding',
  'I develop innovative web applications',
  'I can create your website from scratch.',
  'I enjoy testing and improving software.',
];

// Enhanced styled components with monochrome Apple design
const GradientButton = styled(Button)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #000000 0%, #333333 100%)'
    : 'linear-gradient(135deg, #000000 0%, #333333 100%)',
  color: '#ffffff',
  borderRadius: '30px',
  padding: '16px 40px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
  letterSpacing: '-0.01em',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 30px rgba(0, 0, 0, 0.3)'
    : '0 10px 30px rgba(0, 0, 0, 0.25)',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  border: 'none',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #333333 0%, #000000 100%)'
      : 'linear-gradient(135deg, #333333 0%, #000000 100%)',
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 15px 40px rgba(0, 0, 0, 0.4)'
      : '0 15px 40px rgba(0, 0, 0, 0.35)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transition: 'left 0.6s ease',
  },
  '&:hover::before': {
    left: '100%',
  },
}));

const OutlineButton = styled(Button)(({ theme }) => ({
  background: 'transparent',
  border: theme.palette.mode === 'dark'
    ? '2px solid rgba(255, 255, 255, 0.5)'
    : '2px solid rgba(0, 0, 0, 0.6)',
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  borderRadius: '30px',
  padding: '14px 40px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
  letterSpacing: '-0.01em',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.08)',
    borderColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.8)'
      : 'rgba(0, 0, 0, 0.9)',
    transform: 'translateY(-3px) scale(1.05)',
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 10px 25px rgba(0, 0, 0, 0.2)'
      : '0 10px 25px rgba(0, 0, 0, 0.15)',
  },
}));

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: theme.palette.mode === 'dark'
    ? '#000000'
    : '#ffffff',
  color: theme.palette.text.primary,
  paddingTop: '100px',
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
    background: theme.palette.mode === 'dark'
      ? 'radial-gradient(ellipse at 20% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)'
      : 'radial-gradient(ellipse at 20% 80%, rgba(0, 0, 0, 0.02) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0, 0, 0, 0.02) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%)'
      : 'linear-gradient(45deg, transparent 0%, rgba(0, 0, 0, 0.02) 50%, transparent 100%)',
    pointerEvents: 'none',
  },
}));

const WhatIDoSection = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? '#000000'
    : '#ffffff',
  color: theme.palette.text.primary,
  position: 'relative',
  paddingTop: '100px',
  paddingBottom: '100px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '2px',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.3), transparent)',
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.03)'
    : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(20px)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.1)'
    : '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '24px',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  cursor: 'pointer',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-15px) scale(1.03)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 25px 50px rgba(0, 0, 0, 0.2)'
      : '0 25px 50px rgba(0, 0, 0, 0.15)',
    background: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(255, 255, 255, 0.9)',
    borderColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(0, 0, 0, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, #ffffff 0%, #cccccc 100%)'
      : 'linear-gradient(90deg, #000000 0%, #333333 100%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
    : 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '24px',
  border: theme.palette.mode === 'dark'
    ? '2px solid rgba(255, 255, 255, 0.2)'
    : '2px solid rgba(0, 0, 0, 0.2)',
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-2px',
    borderRadius: '50%',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)'
      : 'linear-gradient(135deg, #000000 0%, #333333 100%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    zIndex: -1,
  },
}));

const AnimatedSocial = styled(motion.a)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  margin: '0 15px',
  padding: '15px',
  borderRadius: '50%',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.08)',
  border: theme.palette.mode === 'dark'
    ? '2px solid rgba(255, 255, 255, 0.2)'
    : '2px solid rgba(0, 0, 0, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  cursor: 'pointer',
  backdropFilter: 'blur(20px)',
  position: 'relative',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(0, 0, 0, 0.15)',
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    borderColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(0, 0, 0, 0.4)',
    transform: 'translateY(-5px) scale(1.2)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 30px rgba(0, 0, 0, 0.3)'
      : '0 12px 30px rgba(0, 0, 0, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-2px',
    borderRadius: '50%',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)'
      : 'linear-gradient(135deg, #000000 0%, #333333 100%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    zIndex: -1,
  },
  '&:hover::before': {
    opacity: 0.2,
  },
}));

const ScrollArrow = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.08)',
  border: theme.palette.mode === 'dark'
    ? '2px solid rgba(255, 255, 255, 0.2)'
    : '2px solid rgba(0, 0, 0, 0.2)',
  borderRadius: '50%',
  padding: '20px',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  backdropFilter: 'blur(20px)',
  position: 'relative',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(0, 0, 0, 0.15)',
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    borderColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(0, 0, 0, 0.4)',
    transform: 'translateY(-6px) scale(1.1)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 15px 35px rgba(0, 0, 0, 0.3)'
      : '0 15px 35px rgba(0, 0, 0, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-2px',
    borderRadius: '50%',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)'
      : 'linear-gradient(135deg, #000000 0%, #333333 100%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    zIndex: -1,
  },
  '&:hover::before': {
    opacity: 0.1,
  },
}));

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

  const { theme } = useThemeContext();

  // Animation variants with enhanced timings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95, rotateY: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
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
                variants={heroVariants}
                initial="hidden"
                animate="visible"
              >
                <Typography
                  variant="h1"
                  fontWeight={700}
                  gutterBottom
                  sx={(theme) => ({
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                    mb: 3,
                    color: theme.palette.text.primary,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  })}
                >
                  I'm Melbin Joseph
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={(theme) => ({
                    minHeight: '60px',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    mb: 4,
                    color: theme.palette.text.secondary,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                  })}
                >
                  {currentText}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    style={{ marginLeft: 4 }}
                  >
                    |
                  </motion.span>
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={(theme) => ({
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    lineHeight: 1.7,
                    mb: 5,
                    color: theme.palette.text.secondary,
                    maxWidth: '600px',
                    fontWeight: 400,
                  })}
                >
                  I am a dedicated software engineer currently working at the Kristu Jayanti Software Development Center,
                  where I focus on building dynamic web applications using Angular, Tailwind CSS, and Java. I strive to
                  create seamless user experiences and scalable solutions.
                </Typography>
                <Box mt={4} display="flex" gap={3} flexWrap="wrap" mb={5}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GradientButton onClick={() => navigate('/about')}>
                      About Me
                    </GradientButton>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <OutlineButton onClick={() => navigate('/contact')}>
                      Contact Me
                    </OutlineButton>
                  </motion.div>
                </Box>
                <Box mt={4} display="flex" justifyContent="center">
                  <AnimatedSocial whileHover={{ scale: 1.2, rotate: 5 }} href="#" title="GitHub">
                    <GitHub sx={{ fontSize: 28 }} />
                  </AnimatedSocial>
                  <AnimatedSocial whileHover={{ scale: 1.2, rotate: -5 }} href="#" title="LinkedIn">
                    <LinkedIn sx={{ fontSize: 28 }} />
                  </AnimatedSocial>
                  <AnimatedSocial whileHover={{ scale: 1.2, rotate: 5 }} href="#" title="Mail">
                    <Mail sx={{ fontSize: 28 }} />
                  </AnimatedSocial>
                  <AnimatedSocial whileHover={{ scale: 1.2, rotate: -5 }} href="#" title="Phone">
                    <Phone sx={{ fontSize: 28 }} />
                  </AnimatedSocial>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 15, z: -100 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                transition={{ 
                  duration: 1.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.3
                }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: -8,
                  rotateX: 5,
                  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  component="img"
                  src="/Minimalist_Platform_Delivery_Courier_Website_Desktop_Prototype_Desktop_Prototype__2_-removebg-preview.png"
                  alt="Melbin Joseph"
                  sx={(theme) => ({
                    width: '100%',
                    height: 'auto',
                    maxWidth: '500px',
                    borderRadius: '30px',
                    filter: theme.palette.mode === 'dark'
                      ? 'drop-shadow(0 20px 40px rgba(102, 126, 234, 0.3))'
                      : 'drop-shadow(0 20px 40px rgba(102, 126, 234, 0.2))',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    position: 'relative',
                    '&:hover': {
                      filter: theme.palette.mode === 'dark'
                        ? 'drop-shadow(0 30px 60px rgba(102, 126, 234, 0.4))'
                        : 'drop-shadow(0 30px 60px rgba(102, 126, 234, 0.3))',
                    }
                  })}
                />
                
                {/* Animated background glow */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    right: '-20px',
                    bottom: '-20px',
                    background: theme.palette.mode === 'dark'
                      ? 'conic-gradient(from 0deg, transparent, rgba(102, 126, 234, 0.2), transparent, rgba(118, 75, 162, 0.2), transparent)'
                      : 'conic-gradient(from 0deg, transparent, rgba(102, 126, 234, 0.1), transparent, rgba(118, 75, 162, 0.1), transparent)',
                    borderRadius: '50px',
                    zIndex: -1,
                    filter: 'blur(20px)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>

          <motion.div
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.15, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ textAlign: 'center', marginTop: '80px' }}
          >
            <ScrollArrow onClick={scrollToWhatIDo} size="large">
              <motion.div
                animate={{ 
                  y: [0, 8, 0] 
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowDownward sx={{ fontSize: 36 }} />
              </motion.div>
            </ScrollArrow>
          </motion.div>
        </Container>
      </HeroContainer>

      <WhatIDoSection ref={whatIDoRef} px={3} py={10}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              fontWeight={700}
              gutterBottom
              textAlign="center"
              sx={(theme) => ({
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                mb: 3,
                color: theme.palette.text.primary,
                letterSpacing: '-0.02em',
              })}
            >
              What I Do
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              sx={(theme) => ({
                mb: 8,
                maxWidth: '700px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', sm: '1.3rem' },
                px: { xs: 2, sm: 0 },
                color: theme.palette.text.secondary,
                fontWeight: 400,
                lineHeight: 1.6,
              })}
            >
              I'm passionate about creating exceptional digital experiences through innovative solutions
            </Typography>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ 
                      y: -12,
                      scale: 1.03,
                      rotateY: index % 2 === 0 ? 2 : -2,
                      transition: { 
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ServiceCard>
                      <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                        <motion.div
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 360,
                            transition: { duration: 0.6, ease: "easeInOut" }
                          }}
                        >
                          <ServiceIcon>
                            {service.icon}
                          </ServiceIcon>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                        >
                          <Typography
                            variant="h4"
                            fontWeight={600}
                            gutterBottom
                            sx={(theme) => ({
                              fontSize: { xs: '1.3rem', sm: '1.5rem' },
                              mb: 3,
                              color: theme.palette.text.primary,
                              letterSpacing: '-0.01em',
                            })}
                          >
                            {service.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={(theme) => ({
                              lineHeight: 1.7,
                              fontSize: { xs: '1rem', sm: '1.1rem' },
                              color: theme.palette.text.secondary,
                              fontWeight: 400,
                            })}
                          >
                            {service.description}
                          </Typography>
                        </motion.div>
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