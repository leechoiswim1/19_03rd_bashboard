/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components/macro';

export const Sample = styled.div<{ primary: boolean }>`
  width: 100px;
  color: ${props => props.theme.color.primaryBlue};
`;
