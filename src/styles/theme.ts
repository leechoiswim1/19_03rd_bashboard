import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    primaryBlue: '#2196F3',
    navblue: '#1565C0',
    black: '#323D45',
    white: '#fff',
    gray: '#939FA5',
    borderGray: '#E5E5E5',
    orange: '#FFA000',
  },

  fontSize: {
    s: '14px',
    m: '16px',
    l: '20px',
    xl: '24px',
  },

  lineHeight: {
    s: 1.42,
    m: 1.5,
    l: 1.6,
  },

  breakpoints: {
    mobile: '@media screen and (max-width: 480px)',
    tablet: '@media screen and (min-width: 481px)',
    laptop: '@media screen and (min-width: 769px)',
    desktop: '@media screen and (min-width: 1025px)',
  },
};
