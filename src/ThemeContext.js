// src/ThemeContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme  } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light'); // Set initial mode to light

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#1a1a1a' : '#ffffff',
            light: mode === 'light' ? '#2d2d2d' : '#f5f5f5',
            dark: mode === 'light' ? '#000000' : '#e0e0e0',
          },
          secondary: {
            main: mode === 'light' ? '#6366f1' : '#818cf8',
            light: mode === 'light' ? '#8b5cf6' : '#a78bfa',
            dark: mode === 'light' ? '#4f46e5' : '#6366f1',
          },
          background: {
            default: mode === 'light' 
              ? 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)' 
              : 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
            paper: mode === 'light' 
              ? 'rgba(255, 255, 255, 0.8)' 
              : 'rgba(30, 30, 60, 0.8)',
          },
          text: {
            primary: mode === 'light' ? '#1a202c' : '#f7fafc',
            secondary: mode === 'light' ? '#4a5568' : '#cbd5e0',
          },
          accent: {
            main: mode === 'light' ? '#667eea' : '#764ba2',
            gradient: mode === 'light' 
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          },
        },
        typography: {
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"SF Pro Display"',
            '"SF Pro Text"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
          ].join(','),
          h1: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
          },
          h2: {
            fontWeight: 600,
            letterSpacing: '-0.01em',
          },
          h3: {
            fontWeight: 600,
            letterSpacing: '-0.01em',
          },
          h4: {
            fontWeight: 500,
          },
          h5: {
            fontWeight: 500,
          },
          h6: {
            fontWeight: 500,
          },
          body1: {
            fontWeight: 400,
            lineHeight: 1.6,
          },
          body2: {
            fontWeight: 400,
            lineHeight: 1.5,
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
