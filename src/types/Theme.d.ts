type ThemeMode = 'light' | 'dark';

type ThemeContext = {
  mode: ThemeMode;
  setMode(mode: ThemeMode): void;
};

type Theme = {
  theme: {
    background: string;
    badgeNumber: string;
    text: string;
    cardSeparator: string;
    label: string;
    unselectedTag: string;
    tagText: string;
    selectedTagHighlight: string;
  };
};
