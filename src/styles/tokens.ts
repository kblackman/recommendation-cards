// ─────────────────────────────────────────────────────────
// Design-system color tokens — sourced from Figma variables
// ─────────────────────────────────────────────────────────

export const colors = {
  neutral: {
    black:    '#000000',
    white:    '#FFFFFF',
    900:      '#13161A',
    800:      '#1E2125',
    700:      '#2C3238',
    600:      '#3D444C',
    500:      '#5D6875',
    400:      '#A3ACB7',
    300:      '#C9CED4',
    200:      '#DDE0E4',
    100:      '#F1F3F4',
    50:       '#F4F6F8',
  },

  blue: {
    900: '#0D1126',
    800: '#192048',
    700: '#26316E',
    600: '#324090',
    500: '#3F51B5', // primary*
    400: '#6473C9',
    300: '#8D99D8',
    200: '#B7BEE6',
    100: '#E1E4F4',
    50:  '#F4F5FB',
  },

  teal: {
    900: '#0C3229',
    800: '#186756',
    700: '#249980',
    600: '#2FCBA9',
    500: '#61DABF',
    400: '#7FE1CC',
    300: '#A0E9D9',
    200: '#C1F1E6',
    100: '#DEF7F2',
    50:  '#EEFBF8',
  },

  green: {
    900: '#052E16',
    800: '#14532D',
    700: '#15803D',
    600: '#16A34A',
    500: '#22C55E',
    400: '#4ADE80',
    300: '#86EFAC',
    200: '#BBF7D0',
    100: '#DCFCE7',
    50:  '#F0FDF4',
  },

  yellow: {
    900: '#382A00',
    800: '#705400',
    700: '#A37A00',
    600: '#DBA400',
    500: '#F5B800',
    400: '#FFCD38',
    300: '#FFDE7A',
    200: '#FFEEBA',
    100: '#FFF5D6',
    50:  '#FFF9E5',
  },

  red: {
    900: '#2E0505',
    800: '#5D090B',
    700: '#900F11',
    600: '#BE1316',
    500: '#E81C1F',
    400: '#EE5658',
    300: '#F27D7F',
    200: '#F7ACAD',
    100: '#FCDFDF',
    50:  '#FEF6F6',
  },

  purple: {
    900: '#1D1150',
    800: '#2E1A7E',
    700: '#5A2EB4', // secondary*
    600: '#6B3FBF',
    500: '#7E58C9',
    400: '#9676D4',
    300: '#AE96DE',
    200: '#C9B8E9',
    100: '#E3DAF4',
    50:  '#F2EEF9',
  },
} as const;

// ─────────────────────────────────────────────────────────
// Semantic tokens
// ─────────────────────────────────────────────────────────

export const semantic = {
  /** Data-quality indicator colors (dot + label text) */
  quality: {
    high:   colors.green[600],  // #16A34A
    medium: colors.yellow[600], // #DBA400
    low:    colors.red[500],    // #E81C1F
  },

  /** Metric value sentiment colors */
  value: {
    positive: colors.teal[700],  // #249980
    negative: colors.red[500],   // #E81C1F
    warning:  colors.yellow[600],// #DBA400
    neutral:  colors.neutral[800],// #1E2125
  },

  /** Channel Win badge */
  channelWin: {
    bg:   colors.teal[100], // #DEF7F2
    text: colors.teal[700], // #249980
  },
} as const;
