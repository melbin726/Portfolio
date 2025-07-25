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

const StyledFooter = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(180deg, #111111 0%, #000000 100%)'
    : 'linear-gradient(180deg, #f8f8f8 0%, #ffffff 100%)',
  color: theme.palette.text.primary,
  position: 'relative',
  paddingTop: '60px',
  paddingBottom: '40px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '1px',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)',
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.1)'
    : '1px solid rgba(0, 0, 0, 0.08)',
  borderRadius: '50%',
  padding: '12px',
  margin: '0 8px',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.05)',
    color: theme.palette.text.primary,
    borderColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.3)'
      : 'rgba(0, 0, 0, 0.15)',
    transform: 'translateY(-4px) scale(1.1)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 20px rgba(255, 255, 255, 0.1)'
      : '0 8px 20px rgba(0, 0, 0, 0.1)',
  },
  '&:active': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(0, 0, 0, 0.08)',
    transform: 'translateY(0) scale(1)',
  },
}));

const AnimatedSocialIcon = styled(motion.div)({
  display: 'inline-block',
});

function Footer() {
  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography
            variant="h4"
            fontWeight={600}
            sx={(theme) => ({
              mb: 4,
              fontSize: { xs: '1.5rem', sm: '2rem' },
              color: theme.palette.text.primary,
              letterSpacing: '-0.01em',
            })}
          >
            Let's Connect
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap={2}
            mb={6}
          >
            <AnimatedSocialIcon
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="https://github.com/melbin726/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon sx={{ fontSize: 28 }} />
              </SocialIcon>
            </AnimatedSocialIcon>

            <AnimatedSocialIcon
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="https://www.linkedin.com/in/melbin-joseph-96640a252/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon sx={{ fontSize: 28 }} />
              </SocialIcon>
            </AnimatedSocialIcon>

            <AnimatedSocialIcon
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="acac"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon sx={{ fontSize: 28 }} />
              </SocialIcon>
            </AnimatedSocialIcon>

            <AnimatedSocialIcon
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="https://www.instagram.com/___melbin_/?igsh=MZFmcHN4NzYwajM0eA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon sx={{ fontSize: 28 }} />
              </SocialIcon>
            </AnimatedSocialIcon>

            <AnimatedSocialIcon
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="mailto:melmelbin2007@gmail.com"
                aria-label="Email"
              >
                <EmailIcon sx={{ fontSize: 28 }} />
              </SocialIcon>
            </AnimatedSocialIcon>

            <AnimatedSocialIcon
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon
                href="tel:+916282696352"
                aria-label="Phone"
              >
                <PhoneIcon sx={{ fontSize: 28 }} />
              </SocialIcon>
            </AnimatedSocialIcon>
          </Box>

          <Box
            sx={(theme) => ({
              borderTop: theme.palette.mode === 'dark'
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.1)',
              pt: 4,
              mt: 4
            })}
          >
            <Typography
              variant="body1"
              sx={(theme) => ({
                mb: 2,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 500,
                color: theme.palette.text.primary,
              })}
            >
              © 2024 Melbin Joseph. All rights reserved.
            </Typography>
            <Typography
              variant="body2"
              sx={(theme) => ({
                fontSize: { xs: '0.9rem', sm: '1rem' },
                color: theme.palette.text.secondary,
                fontWeight: 400,
              })}
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