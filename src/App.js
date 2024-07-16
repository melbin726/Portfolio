// src/App.js
import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { ThemeProvider, useThemeContext } from './ThemeContext';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';

function AppContent() {
  const { theme } = useThemeContext();
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const cursor = cursorRef.current;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline /> {/* This will apply the background color */}
      <div className="App">
        <div ref={cursorRef} className="custom-cursor"></div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </Router>
      </div>
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
