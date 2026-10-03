import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  TextField,
  Button,
  IconButton,
  Alert,
  Snackbar,
  Stack,
} from '@mui/material';
import { styled } from '@mui/system';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
  Briefcase,
} from 'lucide-react';
import { useThemeContext } from '../ThemeContext';
import { portfolioData } from '../data/portfolioData';

const GlassCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(30, 41, 59, 0.75)'
    : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.09)'
    : '1px solid rgba(15, 23, 42, 0.08)',
  borderRadius: '20px',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
    : '0 10px 30px -10px rgba(15, 23, 42, 0.06)',
}));

const ContactInfoCard = styled(Box)(({ theme }) => ({
  padding: '20px',
  borderRadius: '14px',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
  border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(15, 23, 42, 0.06)',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    transform: 'translateX(4px)',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.06)' : 'rgba(37, 99, 235, 0.03)',
  },
}));

function Contact() {
  const { isDarkMode } = useThemeContext();
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 12, md: 16 }, pb: 12, position: 'relative' }}>
      
      {/* Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(90px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.6,
              borderRadius: '30px',
              bgcolor: isDarkMode ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.08)',
              color: 'primary.main',
              border: isDarkMode ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(37, 99, 235, 0.2)',
              mb: 2,
              fontSize: '0.825rem',
              fontWeight: 650,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            <Mail size={15} />
            Let's Start a Conversation
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
              fontWeight: 850,
              letterSpacing: '-0.03em',
              mb: 2,
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 620,
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}
          >
            {personal.status}. Open to discuss enterprise ERP projects, full-stack systems, or career opportunities.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          
          {/* Left Column: Direct Info & Social Channels */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2.5}>
              
              {/* Primary Email */}
              <ContactInfoCard>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.main',
                    color: '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="caption" color="text.secondary" fontWeight={650} display="block">
                    PRIMARY EMAIL
                  </Typography>
                  <Typography
                    component="a"
                    href={`mailto:${personal.email}`}
                    variant="subtitle2"
                    fontWeight={700}
                    sx={{ color: 'text.primary', textDecoration: 'none', wordBreak: 'break-all' }}
                  >
                    {personal.email}
                  </Typography>
                </Box>
                <IconButton size="small" onClick={handleCopyEmail} aria-label="Copy Email">
                  {copied ? <Check size={18} color="#10B981" /> : <Copy size={18} />}
                </IconButton>
              </ContactInfoCard>

              {/* College / Work Email */}
              <ContactInfoCard>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: isDarkMode ? 'rgba(56, 189, 248, 0.15)' : 'rgba(37, 99, 235, 0.1)',
                    color: 'primary.main',
                    flexShrink: 0,
                  }}
                >
                  <Briefcase size={20} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="caption" color="text.secondary" fontWeight={650} display="block">
                    INSTITUTIONAL EMAIL
                  </Typography>
                  <Typography
                    component="a"
                    href={`mailto:${personal.collegeEmail}`}
                    variant="subtitle2"
                    fontWeight={700}
                    sx={{ color: 'text.primary', textDecoration: 'none', wordBreak: 'break-all' }}
                  >
                    {personal.collegeEmail}
                  </Typography>
                </Box>
              </ContactInfoCard>

              {/* Phone */}
              <ContactInfoCard>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: isDarkMode ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)',
                    color: '#10B981',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="caption" color="text.secondary" fontWeight={650} display="block">
                    TELEPHONE & WHATSAPP
                  </Typography>
                  <Typography
                    component="a"
                    href={`tel:${personal.phone}`}
                    variant="subtitle2"
                    fontWeight={700}
                    sx={{ color: 'text.primary', textDecoration: 'none' }}
                  >
                    {personal.phone}
                  </Typography>
                </Box>
              </ContactInfoCard>

              {/* Location */}
              <ContactInfoCard>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: isDarkMode ? 'rgba(236, 72, 153, 0.15)' : 'rgba(236, 72, 153, 0.1)',
                    color: '#EC4899',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="caption" color="text.secondary" fontWeight={650} display="block">
                    LOCATION
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={700}>
                    {personal.location}
                  </Typography>
                </Box>
              </ContactInfoCard>

              {/* Social Link Badges */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: '16px',
                  bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="subtitle2" fontWeight={750} gutterBottom>
                  Software Profiles & Code:
                </Typography>
                <Box display="flex" gap={1.5} mt={1.5} flexWrap="wrap">
                  <Button
                    component="a"
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="small"
                    startIcon={<Github size={16} />}
                    sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 650 }}
                  >
                    GitHub (@melbin726)
                  </Button>
                  <Button
                    component="a"
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="small"
                    startIcon={<Linkedin size={16} />}
                    sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 650 }}
                  >
                    LinkedIn ({personal.connections})
                  </Button>
                </Box>
              </Box>

            </Stack>
          </Grid>

          {/* Right Column: Direct Message Form */}
          <Grid item xs={12} md={7}>
            <GlassCard sx={{ p: { xs: 3.5, sm: 5 } }}>
              <Typography variant="h4" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
                Send a Message
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Fill out the form below to initiate communication or open your email client directly.
              </Typography>

              {submitted && (
                <Alert severity="success" sx={{ mb: 3, borderRadius: '12px' }}>
                  Thank you! Your email client is opening with your message details.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Full Name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email Address"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject / Project Focus"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message or Project Details"
                      name="message"
                      required
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={submitting}
                      endIcon={<Send size={18} />}
                      sx={{
                        py: 1.5,
                        borderRadius: '12px',
                        fontWeight: 700,
                        fontSize: '1rem',
                        background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                      }}
                    >
                      {submitting ? 'Preparing Email...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </GlassCard>
          </Grid>

        </Grid>

      </Container>

      {/* Snackbar for copied email */}
      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
        message="Email copied to clipboard!"
      />
    </Box>
  );
}

export default Contact;