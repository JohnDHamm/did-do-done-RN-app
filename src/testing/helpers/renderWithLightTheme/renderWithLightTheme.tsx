import React from 'react';
import { render, RenderAPI } from 'react-native-testing-library';
import { lightTheme } from '../../../styles/themes';
import { ThemeProvider } from 'styled-components/native';

export const renderWithLightTheme = (component: JSX.Element): RenderAPI => {
  return render(
    <ThemeProvider theme={lightTheme.theme}>{component}</ThemeProvider>
  );
};
