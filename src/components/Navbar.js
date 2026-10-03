import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Button,
  Container,
  Chip,
  Avatar,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';
import {
  Menu,
  X,
  Sun,
  Moon,
  Github,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { useThemeContext } from '../ThemeContext';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(15, 23, 42, 0.85)'
    : 'rgba(255, 255, 255, 0.88)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 1px 0 rgba(255, 255, 255, 0.08)'
    : '0 1px 0 rgba(15, 23, 42, 0.08)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  transition: 'all 0.3s ease',
}));

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects & ERP', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

function Navbar() {
  const { toggleTheme, isDarkMode } = useThemeContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigate = (path) => {
    setDrawerOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <StyledAppBar elevation={0}>
        <Container maxWidth="lg">
          <Toolbar sx={{ px: { xs: 0 }, py: 1, minHeight: '68px', display: 'flex', justifyContent: 'space-between' }}>
            
            {/* Left: Brand / Logo */}
            <Box display="flex" alignItems="center" gap={1.5}>
              <Box
                onClick={() => handleNavigate('/')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNavigate('/');
                  }
                }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  cursor: 'pointer',
                  userSelect: 'none',
                  textDecoration: 'none',
                }}
              >
                <Avatar
                  src="/face-avatar.jpg"
                  alt="Melbin Joseph"
                  sx={{
                    width: 38,
                    height: 38,
                    border: '2px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.08)',
                    }
                  }}
                  imgProps={{
                    style: {
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                    }
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    color: 'text.primary',
                    letterSpacing: '-0.025em',
                  }}
                >
                  Melbin Joseph
                </Typography>
              </Box>

              <Chip
                label="Software Developer @ KJSDC"
                size="small"
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  height: 24,
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  bgcolor: isDarkMode ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.08)',
                  color: isDarkMode ? '#38BDF8' : '#1D4ED8',
                  border: isDarkMode ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(37, 99, 235, 0.2)',
                }}
              />
            </Box>

            {/* Middle: Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.name}
                    onClick={() => handleNavigate(item.path)}
                    sx={{
                      color: isActive ? 'primary.main' : 'text.secondary',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.925rem',
                      px: 1.8,
                      py: 0.8,
                      borderRadius: '8px',
                      textTransform: 'none',
                      transition: 'all 0.2s ease',
                      backgroundColor: isActive
                        ? (isDarkMode ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.08)')
                        : 'transparent',
                      '&:hover': {
                        color: 'text.primary',
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </Box>

            {/* Right: Actions (Theme Toggle, Socials, CTA) */}
            <Box display="flex" alignItems="center" gap={1}>
              <IconButton
                component="a"
                href="https://github.com/melbin726"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                size="small"
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  color: 'text.secondary',
                  '&:hover': { color: 'text.primary' }
                }}
              >
                <Github size={18} />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.linkedin.com/in/melbin-joseph-96640a252/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                size="small"
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  color: 'text.secondary',
                  '&:hover': { color: 'text.primary' }
                }}
              >
                <Linkedin size={18} />
              </IconButton>

              {/* Theme Toggle Button */}
              <IconButton
                onClick={toggleTheme}
                aria-label="Toggle dark/light mode"
                size="small"
                sx={{
                  p: 1,
                  color: 'text.primary',
                  bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                  border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '10px',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)',
                  }
                }}
              >
                {isDarkMode ? <Sun size={17} color="#FBBF24" /> : <Moon size={17} color="#475569" />}
              </IconButton>

              {/* Contact CTA */}
              <Button
                variant="contained"
                size="small"
                onClick={() => handleNavigate('/contact')}
                endIcon={<ArrowRight size={15} />}
                sx={{
                  display: { xs: 'none', md: 'inline-flex' },
                  ml: 1,
                  px: 2,
                  py: 0.8,
                  fontSize: '0.85rem',
                  fontWeight: 650,
                  bgcolor: 'primary.main',
                  color: '#ffffff',
                  borderRadius: '9px',
                  background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
                  }
                }}
              >
                Let's Talk
              </Button>

              {/* Mobile Menu Hamburger */}
              <IconButton
                edge="end"
                aria-label="Open navigation menu"
                onClick={toggleDrawer(true)}
                sx={{ display: { xs: 'inline-flex', md: 'none' }, ml: 0.5, color: 'text.primary' }}
              >
                <Menu size={22} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '80%',
            maxWidth: '320px',
            bgcolor: 'background.default',
            color: 'text.primary',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} pb={2} borderBottom="1px solid" borderColor="divider">
          <Box
            display="flex"
            alignItems="center"
            gap={1.2}
            onClick={() => handleNavigate('/')}
            sx={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <Avatar
              src="/face-avatar.jpg"
              alt="Melbin Joseph"
              sx={{
                width: 38,
                height: 38,
                border: '2px solid',
                borderColor: 'primary.main',
              }}
              imgProps={{
                style: {
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                }
              }}
            />
            <Box>
              <Typography variant="subtitle2" fontWeight={750} lineHeight={1.2}>
                Melbin Joseph
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.72rem', display: 'block' }}>
                Software Developer
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={toggleDrawer(false)} size="small" aria-label="Close menu">
            <X size={20} />
          </IconButton>
        </Box>

        <Box display="flex" flexDirection="column" gap={1.5} flex={1}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.name}
                onClick={() => handleNavigate(item.path)}
                sx={{
                  justifyContent: 'flex-start',
                  py: 1.2,
                  px: 2,
                  borderRadius: '10px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'primary.main' : 'text.primary',
                  bgcolor: isActive
                    ? (isDarkMode ? 'rgba(56, 189, 248, 0.12)' : 'rgba(37, 99, 235, 0.08)')
                    : 'transparent',
                  fontSize: '1rem',
                  textTransform: 'none',
                }}
              >
                {item.name}
              </Button>
            );
          })}
        </Box>

        <Box pt={3} borderTop="1px solid" borderColor="divider">
          <Typography variant="caption" color="text.secondary" display="block" mb={1.5}>
            CONNECT
          </Typography>
          <Box display="flex" gap={1.5}>
            <IconButton
              component="a"
              href="https://github.com/melbin726"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ bgcolor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' }}
            >
              <Github size={18} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/melbin-joseph-96640a252/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ bgcolor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' }}
            >
              <Linkedin size={18} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;