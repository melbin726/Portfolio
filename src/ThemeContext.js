// src/ThemeContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme  } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark'); // Set initial mode to dark

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === 'light' ? '#800000' : '#121212', // Light and dark mode background colors
            paper: mode === 'light' ? '#800000' : '#1e1e1e', // Light and dark mode paper colors
          },
          text: {
            primary: mode === 'light' ? '#ffffff' : '#ffffff', // Light and dark mode text colors
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
