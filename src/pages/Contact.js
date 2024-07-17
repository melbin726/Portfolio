// src/pages/Contact.js
import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const AnimatedTypography = styled(motion(Typography))({
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


const SectionContainer = styled(Paper)({
  backgroundColor: '#000000', // Black background
  color: '#FFFFFF', // White text
  padding: '20px',
  marginTop: '20px',
  borderRadius: '15px', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Box shadow for a 3D effect
});

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      message: form.message,
    };

    emailjs.send(
      'service_0vq6wlm',  // Replace with your EmailJS service ID
      'template_1zhew33', // Replace with your EmailJS template ID
      templateParams,
      'iMYRdqcRKdAbyNIl8' // Replace with your EmailJS public key
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }).catch((err) => {
      console.error('FAILED...', err);
      setError('Failed to send message. Please try again.');
    });
  };

  return (
    <Container>
      <Box mt={5}>
      <AnimatedTypography
          variant="h3"
          component="h1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        <Typography variant="h3" component="h1" style={{ color: '#FFFFFF' }}>
          Contact Me
        </Typography>
        </AnimatedTypography>
    
        <SectionContainer>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={form.name}
              onChange={handleChange}
              InputLabelProps={{ style: { color: '#FFFFFF' } }}
              InputProps={{
                style: { color: '#FFFFFF', borderColor: '#FFFFFF' },
              }}
            />
            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              variant="outlined"
              value={form.email}
              onChange={handleChange}
              InputLabelProps={{ style: { color: '#FFFFFF' } }}
              InputProps={{
                style: { color: '#FFFFFF', borderColor: '#FFFFFF' },
              }}
            />
            <TextField
              label="Message"
              name="message"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
              InputLabelProps={{ style: { color: '#FFFFFF' } }}
              InputProps={{
                style: { color: '#FFFFFF', borderColor: '#FFFFFF' },
              }}
            />
           <PortfolioButton
                variant="contained"
                color="primary"
                style={{ marginRight: '10px', color: 'Black', backgroundColor: 'white' }}
                type ='submit'>
              Send
              </PortfolioButton>
            {submitted && (
              <Typography variant="body1" color="primary" style={{ marginTop: '20px' }}>
                Your message has been sent successfully!
              </Typography>
            )}
            {error && (
              <Typography variant="body1" color="error" style={{ marginTop: '20px' }}>
                {error}
              </Typography>
            )}
          </form>
        </SectionContainer>
      </Box>
    </Container>
  );
}

export default Contact;
