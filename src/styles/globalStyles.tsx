import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyledComponent = createGlobalStyle`
  * {
    ${reset}
    box-sizing: border-box;
  }
`;
