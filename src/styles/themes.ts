import { COLORS } from './colors';

export const lightTheme: Theme = {
  theme: {
    background: COLORS.WHITE,
    badgeNumber: COLORS.WHITE,
    text: COLORS.BLACK,
    cardSeparator: COLORS.LIGHT_GRAY,
    label: COLORS.PRIMARY_GRAY,
    unselectedTag: COLORS.LIGHT_GRAY,
    selectedTagHighlight: COLORS.PRIMARY_PURPLE,
    tagText: COLORS.WHITE,
  },
};

export const darkTheme: Theme = {
  theme: {
    background: COLORS.BLACK,
    badgeNumber: COLORS.BLACK,
    text: COLORS.WHITE,
    cardSeparator: COLORS.DARK_SEPARATOR,
    label: COLORS.DARK_GRAY,
    unselectedTag: COLORS.DARK_GRAY,
    selectedTagHighlight: COLORS.BADASS,
    tagText: COLORS.BLACK,
  },
};
