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

const SocialIcon = styled(IconButton)({
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  margin: '0 8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
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
              background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
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
                href="https://x.com/Melbin?s=08" 
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
                href="mailto:your.email@example.com" 
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
                href="tel:+1234567890" 
                aria-label="Phone"
              >
                <PhoneIcon />
              </SocialIcon>
            </AnimatedSocialIcon>
          </Box>

          <Box 
            sx={{ 
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              pt: 3,
              mt: 3
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 1,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 500
              }}
            >
              © 2024 Melbin Joseph. All rights reserved.
            </Typography>
            <Typography 
              variant="body2" 
              color="rgba(255, 255, 255, 0.7)"
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