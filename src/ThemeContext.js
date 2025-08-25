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
            main: mode === 'light' ? '#000000' : '#ffffff',
            light: mode === 'light' ? '#333333' : '#f5f5f5',
            dark: mode === 'light' ? '#000000' : '#e0e0e0',
          },
          secondary: {
            main: mode === 'light' ? '#000000' : '#ffffff',
            light: mode === 'light' ? '#333333' : '#cccccc',
            dark: mode === 'light' ? '#000000' : '#ffffff',
          },
          background: {
            default: mode === 'light' ? '#ffffff' : '#000000',
            paper: mode === 'light' ? '#ffffff' : '#000000',
          },
          text: {
            primary: mode === 'light' ? '#000000' : '#ffffff',
            secondary: mode === 'light' ? '#666666' : '#cccccc',
          },
          accent: {
            main: mode === 'light' ? '#000000' : '#ffffff',
            gradient: mode === 'light' 
              ? 'linear-gradient(135deg, #000000 0%, #333333 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
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
