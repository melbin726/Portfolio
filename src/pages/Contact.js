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
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  paddingTop: '80px',
  paddingBottom: '60px',
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

const GlassCard = styled(Card)({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
    background: 'rgba(255, 255, 255, 0.15)',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: 'white',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.8)',
      borderWidth: '2px',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-focused': {
      color: 'white',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.5)',
    },
  },
});

const GradientButton = styled(Button)({
  background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
  color: '#667eea',
  borderRadius: '50px',
  padding: '12px 32px',
  textTransform: 'none',
  fontWeight: 700,
  fontSize: '1.1rem',
  boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 30px rgba(255, 255, 255, 0.4)',
  },
  '&:disabled': {
    background: 'rgba(255, 255, 255, 0.3)',
    color: 'rgba(255, 255, 255, 0.5)',
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
});

const IconContainer = styled(Box)({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #ffffff20, #ffffff10)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s ease',
});



const FloatingElement = styled(motion.div)({
  position: 'absolute',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.1)',
  pointerEvents: 'none',
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
      action: 'tel:+6282696352'
    },
    {
      icon: <LocationOn sx={{ fontSize: 32 }} />,
      title: 'Location',
      info: 'Bengaluru, Karnataka',
      action: '#'
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
            color="white"
            sx={{ 
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              mb: 2
            }}
          >
            Get In Touch
          </Typography>
          <Typography 
            variant="h6" 
            textAlign="center" 
            color="rgba(255, 255, 255, 0.8)" 
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
                        <Typography variant="h6" fontWeight="bold" color="white" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" color="rgba(255, 255, 255, 0.8)">
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
                  <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
                    Send Message
                  </Typography>
                  <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" sx={{ mb: 4 }}>
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