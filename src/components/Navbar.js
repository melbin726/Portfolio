// src/components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../ThemeContext';
import { styled } from '@mui/system';

const AnimatedIconButton = styled(IconButton)({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const AnimatedButton = styled(Button)({
  transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
  '&:hover': {
    color: '#ff4081',
    transform: 'scale(1.1)',
  },
});

const AnimatedTypography = styled(Typography)(({ theme }) => ({
  transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
  '&:hover': {
    color: '#ff4081',
    transform: 'scale(1.1)',
  },
  textDecoration: 'none',
  fontFamily: 'Monaco, Courier, monospace', // Font for a developer background
  whiteSpace: 'nowrap', // Prevent text from breaking into multiple lines
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
}));

function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  const isDarkMode = theme.palette.mode === 'dark';
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <AnimatedIconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </AnimatedIconButton>
        <AnimatedTypography component={Link} to="/" variant="h6" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }} marginLeft={4}>
          MELBIN JOSEPH
        </AnimatedTypography>
        <Drawer
          anchor="bottom"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              top: '64px',
              height: 'calc(100% - 64px)',
            },
          }}
        >
          <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Fantasy', fontSize: '20px' }}>
                <AnimatedButton color="inherit" component={Link} to="/">
                  Home
                </AnimatedButton>
              </Typography>
              <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Fantasy', fontSize: '20px' }}>
                <AnimatedButton color="inherit" component={Link} to="/portfolio">
                  Portfolio
                </AnimatedButton>
              </Typography>
              <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Fantasy', fontSize: '20px' }}>
                <AnimatedButton color="inherit" component={Link} to="/about">
                  About
                </AnimatedButton>
              </Typography>
              <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Fantasy', fontSize: '20px' }}>
                <AnimatedButton color="inherit" component={Link} to="/contact">
                  Contact
                </AnimatedButton>
              </Typography>
              <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Fantasy', fontSize: '20px' }}>
                <AnimatedButton color="inherit" component={Link} to="/resume">
                  Resume
                </AnimatedButton>
              </Typography>
            </List>
          </Box>
        </Drawer>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Fantasy', fontSize: '20px' }}>
          <AnimatedButton color="inherit" component={Link} to="/resume">
            Resume
          </AnimatedButton>
        </Typography>
        <AnimatedIconButton color="inherit" onClick={toggleTheme}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </AnimatedIconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
