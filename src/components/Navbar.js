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

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'rgba(0, 0, 0, 0.8)' 
    : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(20px)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)'
    : '0 1px 0 rgba(0, 0, 0, 0.05), 0 8px 32px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  borderBottom: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.1)'
    : '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", Monaco, Courier, monospace',
  fontWeight: 700,
  fontSize: '1.5rem',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  letterSpacing: '-0.02em',
  '&:hover': {
    transform: 'scale(1.02)',
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
      : 'rgba(0, 0, 0, 0.05)',
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

const MobileNavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1.5rem',
  padding: '16px 24px',
  borderRadius: '16px',
  width: '100%',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
    : 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.1)'
    : '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)'
      : 'linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 100%)',
    transform: 'scale(1.02)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 32px rgba(255, 255, 255, 0.1)'
      : '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
}));

const ThemeToggle = styled(IconButton)(({ theme }) => ({
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
    transform: 'translateY(-1px)',
    color: theme.palette.text.primary,
    boxShadow: theme.palette.mode === 'dark'
      ? '0 4px 16px rgba(255, 255, 255, 0.1)'
      : '0 4px 16px rgba(0, 0, 0, 0.1)',
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

      {/* Mobile Navigation Drawer */}
      <StyledDrawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={400}
      >
        <Box sx={{ width: '100%', position: 'relative' }}>
          {/* Close Button */}
          <IconButton
            onClick={toggleDrawer(false)}
            sx={(theme) => ({
              position: 'absolute',
              top: 16,
              right: 16,
              color: theme.palette.text.secondary,
              backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.05)'
                : 'rgba(0, 0, 0, 0.03)',
              border: theme.palette.mode === 'dark'
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.05)',
                color: theme.palette.text.primary,
              },
            })}
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
              gap: 3,
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