// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { ThemeProvider, useThemeContext } from './ThemeContext';
import { ThemeProvider as MuiThemeProvider, CssBaseline, Box } from '@mui/material';

// Automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { theme } = useThemeContext();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App" sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Box component="main" sx={{ flex: 1, width: '100%' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback redirect */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </Box>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
