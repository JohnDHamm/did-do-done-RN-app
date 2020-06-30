import React from 'react';

declare global {
  interface ThemeContextInterface {
    mode: ThemeMode;
    setCurrentMode: (mode: ThemeMode) => void;
  }
}

export const THEME_DEFAULT_VALUE: ThemeContextInterface = {
  mode: 'light',
  setCurrentMode: (mode) => console.log(mode),
};

export const ThemeContext = React.createContext<ThemeContextInterface>(
  THEME_DEFAULT_VALUE
);
