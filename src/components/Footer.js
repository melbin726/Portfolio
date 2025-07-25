import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const StyledFooter = styled(Box)({
  // Subtle light gray to white linear gradient for the footer background
  background: 'linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%)',
  color: '#333333', // Default text color is dark gray
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '1px', // Thinner, more subtle line
    background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)', // Light black line
  },
});

const SocialIcon = styled(IconButton)({
  // Always apply a subtle light background and border
  color: '#666666', // Medium gray for icons
  backgroundColor: 'rgba(0, 0, 0, 0.03)', // Subtle background even without hover
  border: '1px solid rgba(0,0,0,0.08)', // Subtle border
  margin: '0 8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Slightly more visible on hover
    color: '#000000', // Black on hover
    borderColor: 'rgba(0,0,0,0.15)', // Darker border on hover
    transform: 'translateY(-3px)', // Consistent lift on hover
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)', // Subtle shadow on hover
  },
  '&:active': { // For touch devices
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    transform: 'translateY(0)',
    boxShadow: 'none',
  },
});

const AnimatedSocialIcon = styled(motion.div)({
  display: 'inline-block',
});

function Footer() {
  return (
    <StyledFooter component="footer" py={6}>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              // White text with subtle gradient for the heading
              background: 'linear-gradient(45deg, #000000, #333333)', // Black to dark gray gradient
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Connect
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap={2}
            mb={4}
          >
            <AnimatedSocialIcon
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="https://github.com/melbin726/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </SocialIcon>
            </AnimatedSocialIcon>

            <AnimatedSocialIcon
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="https://www.linkedin.com/in/melbin-joseph-96640a252/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialIcon>
            </AnimatedSocialIcon>

            <AnimatedSocialIcon
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="acac" // Consider updating this dummy link
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </SocialIcon>
            </AnimatedSocialIcon>

            <AnimatedSocialIcon
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="https://www.instagram.com/___melbin_/?igsh=MZFmcHN4NzYwajM0eA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </SocialIcon>
            </AnimatedSocialIcon>

            <AnimatedSocialIcon
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="mailto:melmelbin2007@gmail.com" // Changed to mailto: for email link
                aria-label="Email"
              >
                <EmailIcon />
              </SocialIcon>
            </AnimatedSocialIcon>

            <AnimatedSocialIcon
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="tel:+916282696352"
                aria-label="Phone"
              >
                <PhoneIcon />
              </SocialIcon>
            </AnimatedSocialIcon>
          </Box>

          <Box
            sx={{
              // Lighter, subtle border for separation
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              pt: 3,
              mt: 3
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 500,
                color: '#333333' // Dark gray for primary footer text
              }}
            >
              © 2024 Melbin Joseph. All rights reserved.
            </Typography>
            <Typography
              variant="body2"
              color="#666666" // Medium gray for secondary footer text
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.875rem' }
              }}
            >
              Crafted with ❤️ by Melbin Joseph | Follow for more updates
            </Typography>
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
}

export default Footer;