import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import { useThemeContext } from '../ThemeContext';

const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
});

const Logo = styled(Typography)({
  fontFamily: 'Monaco, Courier, monospace',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    filter: 'brightness(1.1)',
  },
});

const NavButton = styled(Button)({
  color: 'white',
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '1rem',
  padding: '8px 16px',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
    color: '#ffffff',
  },
});

const MobileNavButton = styled(Button)({
  color: 'inherit',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '2rem',
  padding: '16px 24px',
  borderRadius: '12px',
  width: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    transform: 'scale(1.05)',
  },
});

const ThemeToggle = styled(IconButton)({
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)',
  },
});

const MobileMenuIcon = styled(IconButton)({
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
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
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }
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