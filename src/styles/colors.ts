declare global {
  type TagColor = {
    idx: number;
    color: string;
  };
}

const TAG_COLORS: Array<TagColor> = [
  {
    idx: 0,
    color: '#4682B4',
  },
  {
    idx: 1,
    color: '#B8860B',
  },
  {
    idx: 2,
    color: '#556B2F',
  },
  {
    idx: 3,
    color: '#EA7E00',
  },
  {
    idx: 4,
    color: '#B14B3D',
  },
  {
    idx: 5,
    color: '#0529BF',
  },
  {
    idx: 6,
    color: '#E5C829',
  },
  {
    idx: 7,
    color: '#0E8803',
  },
  {
    idx: 8,
    color: '#860098',
  },
  {
    idx: 9,
    color: '#c3c3c3',
  },
];

export const COLORS = {
  BADASS: '#BADA55',
  BLACK: '#000',
  DARK_GRAY: '#4a4a4a',
  DARK_SEPARATOR: '#2f2f2f',
  LIGHT_GRAY: '#e2e2e2',
  MISSED_RED: '#B70000',
  PRIMARY_GRAY: '#c3c3c3',
  PRIMARY_PURPLE: '#4c408f',
  PRIMARY_PURPLE_DARK: '#7c68e8',
  TAG_COLORS: TAG_COLORS,
  THIS_WEEK_YELLOW: '#ffd764',
  TODAY_GREEN: '#237b59',
  WHITE: '#fff',
};
