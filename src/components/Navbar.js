import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { useThemeContext } from '../ThemeContext'; // Assuming ThemeContext is correctly set up

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(0, 0, 0, 0.9)'
    : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(20px)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)'
    : '0 1px 0 rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  borderBottom: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.1)'
    : '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", Monaco, Courier, monospace',
  fontWeight: 700,
  fontSize: '1.5rem',
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  textDecoration: 'none',
  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  letterSpacing: '-0.02em',
  '&:hover': {
    transform: 'scale(1.05)',
    opacity: 0.8,
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '1rem',
  padding: '8px 16px',
  borderRadius: '12px',
  background: 'transparent',
  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.08)',
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    transform: 'translateY(-1px)',
    '&::before': {
      opacity: 1,
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
      : 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
  },
}));



const ThemeToggle = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.08)',
  border: theme.palette.mode === 'dark'
    ? '2px solid rgba(255, 255, 255, 0.2)'
    : '2px solid rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(0, 0, 0, 0.15)',
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    transform: 'translateY(-2px) scale(1.05)',
    borderColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(0, 0, 0, 0.4)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 25px rgba(0, 0, 0, 0.3)'
      : '0 8px 25px rgba(0, 0, 0, 0.2)',
  },
}));

const MobileMenuIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.1)'
    : '1px solid rgba(0, 0, 0, 0.08)',
  borderRadius: '12px',
  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.05)',
    color: theme.palette.text.primary,
    transform: 'translateY(-1px)',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    height: '100%',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 248, 248, 0.95) 100%)',
    backdropFilter: 'blur(20px)',
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

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

const MobileNavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: '2.5rem',
  fontWeight: 800,
  color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
  position: 'relative',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 5,
    width: '0%',
    height: '4px',
    background: theme.palette.primary.main,
    transition: 'width 0.3s ease'
  },
  '&:hover::after': {
    width: '100%'
  }
}));

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Games', path: '/games' }, // New item
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
        ease: [0.25, 0.46, 0.45, 0.94],
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

      <StyledDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={500}
        PaperProps={{
          sx: { width: '100%', maxWidth: '100%' }
        }}
      >
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', p: 4, position: 'relative' }}>

          {/* Header with Logo and Close */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={6}>
            <Logo variant="h5">MELBIN</Logo>
            <IconButton onClick={toggleDrawer(false)} size="large">
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>

          {/* Nav Items */}
          <Box display="flex" flexDirection="column" gap={4} flex={1} justifyContent="center" alignItems="flex-start">
            {navItems.map((item, index) => (
              <MobileNavItem
                key={item.name}
                variants={mobileNavVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                style={{ justifyContent: 'flex-start', margin: 0 }}
              >
                <MobileNavLink to={item.path} onClick={toggleDrawer(false)}>
                  {item.name}
                </MobileNavLink>
              </MobileNavItem>
            ))}
          </Box>

          {/* Footer Socials */}
          <Box mt="auto" pt={4} display="flex" gap={2} justifyContent="center">
            <IconButton color="inherit" component="a" href="https://github.com" target="_blank"><GitHub fontSize="large" /></IconButton>
            <IconButton color="inherit" component="a" href="https://linkedin.com" target="_blank"><LinkedIn fontSize="large" /></IconButton>
          </Box>
        </Box>
      </StyledDrawer>
    </>
  );
}

export default Navbar;