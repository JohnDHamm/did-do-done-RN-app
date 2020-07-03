import { COLORS } from './colors';

export const lightTheme: Theme = {
  theme: {
    background: COLORS.WHITE,
    badgeNumber: COLORS.WHITE,
    text: COLORS.BLACK,
    cardSeparator: COLORS.LIGHT_GRAY,
    label: COLORS.PRIMARY_GRAY,
    unselectedTag: COLORS.PRIMARY_GRAY,
    selectedTagHighlight: COLORS.PRIMARY_PURPLE,
    tagText: COLORS.WHITE,
    notesLabel: COLORS.BLACK,
    placeholderText: COLORS.PRIMARY_GRAY,
    purple: COLORS.PRIMARY_PURPLE,
  },
};

export const darkTheme: Theme = {
  theme: {
    background: COLORS.BLACK,
    badgeNumber: COLORS.BLACK,
    text: COLORS.LIGHT_GRAY,
    cardSeparator: COLORS.DARK_SEPARATOR,
    label: COLORS.DARK_GRAY,
    unselectedTag: COLORS.DARK_GRAY,
    selectedTagHighlight: COLORS.BADASS,
    tagText: COLORS.BLACK,
    notesLabel: COLORS.DARK_GRAY,
    placeholderText: COLORS.DARK_GRAY,
    purple: COLORS.PRIMARY_PURPLE_DARK,
  },
};
