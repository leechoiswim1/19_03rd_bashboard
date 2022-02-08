/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components/macro';
import SampleProps from './Sample.type';

export const Sample = styled.div<Pick<SampleProps, 'primary'>>`
  width: 100px;
  color: ${props => props.theme.color.primaryBlue};
`;
