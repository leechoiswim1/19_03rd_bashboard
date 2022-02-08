import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primaryBlue: string;
      navblue: string;
      black: string;
      white: string;
      gray: string;
      borderGray: string;
      orange: string;
    };

    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };

    fontWeight: {
      strong: number;
      semiStrong: number;
      normal: number;
    };

    lineHeight: {
      s: number;
      m: number;
      l: number;
    };

    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
