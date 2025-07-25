import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button,  Grid, Card, CardContent, Alert, Snackbar } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import {
  Email,
  Phone,
  LocationOn,
  Send,
  CheckCircle,
  Error
} from '@mui/icons-material';

// Styled Components
const HeroContainer = styled(Box)({
  minHeight: '100vh',
  // Subtle radial gradient from center to edges, light gray to white for the page background
  background: 'radial-gradient(circle at center, #f5f5f5 0%, #ffffff 75%)',
  color: '#333333', // Default text color is dark gray
  paddingTop: '80px',
  paddingBottom: '60px',
  position: 'relative',
  overflow: 'hidden',
  // Removed the ::before pattern for cleaner gradients
});

const GlassCard = styled(Card)({
  // Always apply a subtle radial gradient for depth
  background: 'radial-gradient(circle at top left, #ffffff 0%, #f9f9f9 100%)',
  backdropFilter: 'blur(5px)', // Less blur as background is light
  border: '1px solid rgba(0, 0, 0, 0.04)', // Even lighter border
  borderRadius: '15px', // Consistent border radius
  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.04)', // Very light initial shadow
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)', // Consistent lift
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)', // More prominent but still light shadow on hover
    background: 'radial-gradient(circle at top left, #ffffff 0%, #f0f0f0 100%)', // Subtle gradient change on hover
    border: '1px solid rgba(0, 0, 0, 0.08)', // Slightly more defined border on hover
  },
  '&:active': { // For touch devices
    transform: 'translateY(-1px)', // Simulating a soft press
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    background: 'radial-gradient(circle at top left, #f0f0f0 0%, #ffffff 100%)',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    background: 'rgba(0, 0, 0, 0.03)', // Very subtle light transparent black background
    borderRadius: '10px', // Slightly less rounded for text fields
    color: '#333333', // Dark gray text input
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.1)', // Subtle border
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.3)', // Darker border on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000000', // Pure black border when focused
      borderWidth: '2px',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#666666', // Medium gray label
    '&.Mui-focused': {
      color: '#000000', // Black label when focused
    },
  },
  '& .MuiOutlinedInput-input': {
    color: '#333333', // Dark gray input text
    '&::placeholder': {
      color: '#999999', // Lighter gray placeholder
    },
  },
});

const GradientButton = styled(Button)({
  // Sleek black to dark grey gradient
  background: 'linear-gradient(135deg, #222222 0%, #000000 100%)',
  color: 'white',
  borderRadius: '30px',
  padding: '12px 32px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1.1rem',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)', // Always has a shadow for depth
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #111111 0%, #000000 100%)', // Darker on hover
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
  },
  '&:active': { // Add active state for touch devices
    background: 'linear-gradient(135deg, #000000 0%, #111111 100%)', // Slightly inverted/darker on press
    transform: 'translateY(0)', // Resets on press
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.4)',
  },
  '&:disabled': {
    background: 'linear-gradient(135deg, #cccccc 0%, #aaaaaa 100%)', // Lighter gradient when disabled
    color: '#666666', // Darker text for disabled state
    boxShadow: 'none',
  },
});

const ContactInfoCard = styled(GlassCard)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '24px',
  cursor: 'pointer',
  // Inherits hover/active from GlassCard, specific icon hover below
});

const IconContainer = styled(Box)({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  // Subtle white to light gray radial gradient for depth
  background: 'radial-gradient(circle at center, #f5f5f5 0%, #e8e8e8 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  border: '1px solid rgba(0, 0, 0, 0.08)', // Softer border
  color: '#333333', // Dark gray icon color
  transition: 'all 0.3s ease',
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)', // Very subtle shadow
  '&:hover': { // Apply hover effect directly to IconContainer
    background: 'radial-gradient(circle at center, #e0e0e0 0%, #d0d0d0 100%)', // Darker gradient on hover
    transform: 'scale(1.08)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  '&:active': { // For touch devices
    background: 'radial-gradient(circle at center, #d0d0d0 0%, #e0e0e0 100%)',
    transform: 'scale(1)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
});

const FloatingElement = styled(motion.div)({
  position: 'absolute',
  borderRadius: '50%',
  background: 'rgba(0, 0, 0, 0.02)', // Very subtle transparent black
  pointerEvents: 'none',
  border: '1px solid rgba(0, 0, 0, 0.05)', // Even more subtle border
});

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
      };

      await emailjs.send(
        'service_0vq6wlm',
        'template_1zhew33',
        templateParams,
        'iMYRdqcRKdAbyNIl8'
      );

      setSnackbar({
        open: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        severity: 'success'
      });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 32 }} />,
      title: 'Email',
      info: 'melmelbin2007@gmail.com',
      action: 'mailto:melmelbin2007@gmail.com'
    },
    {
      icon: <Phone sx={{ fontSize: 32 }} />,
      title: 'Phone',
      info: '+91 6282696352',
      action: 'tel:+916282696352' // Corrected action for phone
    },
    {
      icon: <LocationOn sx={{ fontSize: 32 }} />,
      title: 'Location',
      info: 'Bengaluru, Karnataka',
      action: '#' // No direct action for location, can link to map if desired
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <HeroContainer>
      {/* Floating Background Elements */}
      <FloatingElement
        style={{ width: '100px', height: '100px', top: '10%', left: '10%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <FloatingElement
        style={{ width: '150px', height: '150px', top: '20%', right: '15%' }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <FloatingElement
        style={{ width: '80px', height: '80px', bottom: '10%', left: '20%' }}
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            // Black to dark gray gradient for the main heading text
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              mb: 2,
              background: 'linear-gradient(45deg, #000000, #333333)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="#666666" // Medium gray for sub-heading
            sx={{
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', sm: '1.3rem' }
            }}
          >
            Let's discuss your next project and bring your ideas to life
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Contact Info Cards */}
          <Grid item xs={12} md={4}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Grid container spacing={3}>
                {contactInfo.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <motion.div variants={itemVariants}>
                      <ContactInfoCard
                        component="a"
                        href={item.action}
                        sx={{ textDecoration: 'none' }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <IconContainer>
                          {item.icon}
                        </IconContainer>
                        <Typography variant="h6" fontWeight="bold" color="#333333" gutterBottom> {/* Dark gray for title */}
                          {item.title}
                        </Typography>
                        <Typography variant="body1" color="#666666"> {/* Medium gray for info */}
                          {item.info}
                        </Typography>
                      </ContactInfoCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard>
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Typography variant="h4" fontWeight="bold" color="#000000" gutterBottom> {/* Pure black for heading */}
                    Send Message
                  </Typography>
                  <Typography variant="body1" color="#666666" sx={{ mb: 4 }}> {/* Medium gray for sub-text */}
                    Have a project in mind? Let's discuss how we can work together.
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <StyledTextField
                            name="name"
                            label="Full Name"
                            fullWidth
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                          />
                        </motion.div>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <StyledTextField
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                          />
                        </motion.div>
                      </Grid>
                      <Grid item xs={12}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                        >
                          <StyledTextField
                            name="message"
                            label="Message"
                            fullWidth
                            required
                            multiline
                            rows={6}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                          />
                        </motion.div>
                      </Grid>
                      <Grid item xs={12}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
                          <GradientButton
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={loading}
                            startIcon={loading ? <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            >
                              ⏳
                            </motion.div> : <Send />}
                            sx={{
                              mt: 2,
                              minWidth: '150px'
                            }}
                          >
                            {loading ? 'Sending...' : 'Send Message'}
                          </GradientButton>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </GlassCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          icon={snackbar.severity === 'success' ? <CheckCircle /> : <Error />}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </HeroContainer>
  );
}

export default Contact;