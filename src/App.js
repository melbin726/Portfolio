// src/App.js
import React from 'react';
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
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline /> {/* This will apply the background color */}
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
