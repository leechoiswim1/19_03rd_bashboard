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
      s: string;
      m: string;
      l: string;
    };
    lineHeight: {
      s: number;
      m: number;
      l: number;
    };
  }
}
