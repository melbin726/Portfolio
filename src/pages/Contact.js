// src/pages/Contact.js
import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com';

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
        <Typography variant="h3" component="h1">
          Contact Me
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            variant="outlined"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={form.email}
            onChange={handleChange}
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
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
            type="submit"
          >
            Send
          </Button>
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
      </Box>
    </Container>
  );
}

export default Contact;
