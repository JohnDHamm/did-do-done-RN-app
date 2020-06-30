import React from 'react';

export const useTheme = (): ThemeContextInterface => {
  const [mode, setMode] = React.useState<ThemeMode>('light');

  const setCurrentMode = React.useCallback((currentMode: ThemeMode): void => {
    setMode(currentMode);
  }, []);

  return { mode, setCurrentMode };
};
