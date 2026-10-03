import React from 'react';
import { Box, Typography, Container, IconButton, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { useThemeContext } from '../ThemeContext';
import { portfolioData } from '../data/portfolioData';

const StyledFooter = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(180deg, #0F172A 0%, #0B1120 100%)'
    : 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)',
  color: theme.palette.text.primary,
  position: 'relative',
  paddingTop: '64px',
  paddingBottom: '36px',
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.04)'
    : 'rgba(0, 0, 0, 0.03)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '10px',
  padding: '10px',
  transition: 'all 0.25s ease',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(56, 189, 248, 0.15)'
      : 'rgba(37, 99, 235, 0.1)',
    color: theme.palette.primary.main,
    borderColor: 'rgba(37, 99, 235, 0.4)',
    transform: 'translateY(-2px)',
  },
}));

function Footer() {
  const { isDarkMode } = useThemeContext();
  const { personal } = portfolioData;

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {/* Col 1: Bio & Role */}
          <Grid item xs={12} md={5}>
            <Box display="flex" alignItems="center" gap={1.5} mb={2}>
              <Avatar
                src="/face-avatar.jpg"
                alt={personal.name}
                sx={{
                  width: 36,
                  height: 36,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)',
                }}
                imgProps={{
                  style: {
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                  }
                }}
              />
              <Typography variant="h6" fontWeight={750}>
                {personal.name}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 380, mb: 2, lineHeight: 1.7 }}>
              {personal.headline}. Building scalable, user-friendly applications at Kristu Jayanti Software Development Centre (KJSDC).
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <span className="status-dot"></span>
              <Typography variant="caption" sx={{ color: isDarkMode ? '#34D399' : '#059669', fontWeight: 650 }}>
                {personal.status}
              </Typography>
            </Box>
          </Grid>

          {/* Col 2: Navigation */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle2" fontWeight={750} sx={{ mb: 2, letterSpacing: '0.05em' }}>
              NAVIGATION
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Projects & ERP', path: '/portfolio' },
                { name: 'About & Journey', path: '/about' },
                { name: 'Resume', path: '/resume' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Typography
                  key={link.name}
                  component={Link}
                  to={link.path}
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Col 3: Focus & Stack */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle2" fontWeight={750} sx={{ mb: 2, letterSpacing: '0.05em' }}>
              EXPERTISE
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="body2" color="text.secondary">KJUSYS ERP System</Typography>
              <Typography variant="body2" color="text.secondary">Angular & TypeScript</Typography>
              <Typography variant="body2" color="text.secondary">Tailwind CSS UI/UX</Typography>
              <Typography variant="body2" color="text.secondary">React.js & React Native</Typography>
              <Typography variant="body2" color="text.secondary">C# & PostgreSQL</Typography>
              <Typography variant="body2" color="text.secondary">Java & Spring Boot</Typography>
            </Box>
          </Grid>

          {/* Col 4: Contact & Socials */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="subtitle2" fontWeight={750} sx={{ mb: 2, letterSpacing: '0.05em' }}>
              GET IN TOUCH
            </Typography>
            <Box display="flex" alignItems="center" gap={1.2} mb={1}>
              <Mail size={16} color="#64748B" />
              <Typography
                component="a"
                href={`mailto:${personal.email}`}
                variant="body2"
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                {personal.email}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1.2} mb={1}>
              <MapPin size={16} color="#64748B" />
              <Typography variant="body2" color="text.secondary">
                {personal.location}
              </Typography>
            </Box>
            <Box display="flex" gap={1} mt={2.5}>
              <SocialIcon
                component="a"
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={17} />
              </SocialIcon>
              <SocialIcon
                component="a"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </SocialIcon>
              <SocialIcon
                component="a"
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </SocialIcon>
              <SocialIcon
                component="a"
                href={`tel:${personal.phone}`}
                aria-label="Phone"
              >
                <Phone size={17} />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom copyright */}
        <Box
          sx={{
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1.5
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Melbin Joseph. Designed with modern engineering principles.
          </Typography>
          <Typography
            component="a"
            href={personal.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="caption"
            sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 650, display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            melbinjoseph.netlify.app <ExternalLink size={12} />
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
}

export default Footer;