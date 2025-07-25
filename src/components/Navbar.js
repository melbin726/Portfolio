import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer,  Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import { useThemeContext } from '../ThemeContext'; // Assuming ThemeContext is correctly set up

const StyledAppBar = styled(AppBar)({
  // Subtle white to light gray linear gradient for the AppBar background
  background: 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)',
  backdropFilter: 'blur(8px)', // Slightly less blur for a crisp look
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', // Softer, lighter shadow
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)', // Very subtle bottom border for definition
});

const Logo = styled(Typography)({
  fontFamily: 'Monaco, Courier, monospace',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  // Black to dark gray gradient for the logo text
  background: 'linear-gradient(45deg, #000000, #333333)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    filter: 'brightness(1.1)', // Subtle brightness on hover
  },
});

const NavButton = styled(Button)({
  color: '#333333', // Dark gray for default text
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '1rem',
  padding: '8px 16px',
  borderRadius: '20px',
  background: 'transparent', // Start transparent for a clean look
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Very light transparent black on hover
    transform: 'translateY(-2px)',
    color: '#000000', // Black on hover
  },
  '&:active': { // For touch devices
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    transform: 'translateY(0)',
  },
});

const MobileNavButton = styled(Button)({
  color: '#333333', // Dark gray for default text
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '2rem',
  padding: '16px 24px',
  borderRadius: '12px',
  width: '100%',
  // Always subtle light gray gradient for mobile buttons
  background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)', // Subtle shadow
  '&:hover': {
    background: 'linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 100%)', // Darker gradient on hover
    transform: 'scale(1.03)', // Slightly less pronounced scale
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
  },
  '&:active': { // For touch devices
    background: 'linear-gradient(135deg, #d0d0d0 0%, #e0e0e0 100%)',
    transform: 'scale(1)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
});

const ThemeToggle = styled(IconButton)({
  color: '#666666', // Medium gray for icons
  backgroundColor: 'rgba(0, 0, 0, 0.03)', // Very subtle background
  border: '1px solid rgba(0, 0, 0, 0.08)', // Subtle border
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Slightly more visible on hover
    transform: 'translateY(-2px)',
    color: '#000000', // Black on hover
  },
  '&:active': { // For touch devices
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    transform: 'translateY(0)',
  },
});

const MobileMenuIcon = styled(IconButton)({
  color: '#666666', // Medium gray for icons
  backgroundColor: 'rgba(0, 0, 0, 0.03)', // Very subtle background
  border: '1px solid rgba(0, 0, 0, 0.08)', // Subtle border
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Slightly more visible on hover
    color: '#000000', // Black on hover
    transform: 'translateY(-2px)',
  },
  '&:active': { // For touch devices
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    transform: 'translateY(0)',
  },
});

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: '100%',
    height: '100%',
    // Subtle white to light gray gradient for the drawer background
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
    color: '#333333', // Text color inside drawer
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const DesktopNavItems = styled(Box)({
  display: 'flex',
  gap: '8px',
  marginLeft: 'auto',
  marginRight: '16px',
});

const MobileNavItem = styled(motion.div)({
  margin: '16px 0',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
];

function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  const isDarkMode = theme.palette.mode === 'dark';
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const mobileNavVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      <StyledAppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar sx={{ px: 0 }}>
            {/* Mobile Menu Button */}
            <MobileMenuIcon
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                display: { xs: 'block', md: 'none' },
                mr: 2
              }}
            >
              <MenuIcon />
            </MobileMenuIcon>

            {/* Logo */}
            <Logo
              component={Link}
              to="/"
              variant="h6"
              sx={{
                flexGrow: { xs: 1, md: 0 },
                textAlign: { xs: 'center', md: 'left' },
                mr: { md: 4 }
              }}
            >
              MELBIN
            </Logo>

            {/* Desktop Navigation */}
            <DesktopNavItems sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <NavButton
                  key={item.name}
                  component={Link}
                  to={item.path}
                >
                  {item.name}
                </NavButton>
              ))}
            </DesktopNavItems>

            {/* Theme Toggle */}
            <ThemeToggle onClick={toggleTheme}>
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </ThemeToggle>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Navigation Drawer */}
      <StyledDrawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={300}
      >
        <Box sx={{ width: '100%', position: 'relative' }}>
          {/* Close Button */}
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: '#666666', // Medium gray icon
              backgroundColor: 'rgba(0, 0, 0, 0.03)', // Subtle background
              border: '1px solid rgba(0, 0, 0, 0.08)', // Subtle border
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                color: '#000000',
              },
              '&:active': { // For touch devices
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Mobile Navigation Items */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              gap: 2,
              px: 4
            }}
          >
            {navItems.map((item, index) => (
              <MobileNavItem
                key={item.name}
                variants={mobileNavVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <MobileNavButton
                  component={Link}
                  to={item.path}
                  onClick={toggleDrawer(false)}
                >
                  {item.name}
                </MobileNavButton>
              </MobileNavItem>
            ))}
          </Box>
        </Box>
      </StyledDrawer>
    </>
  );
}

export default Navbar;