/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components/macro';

interface IDivider {
  width: number;
  margin: string;
}

export const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.color.borderGray};
  height: 1px;
  width: ${(props: IDivider) => props.width}%;
  margin: ${(props: IDivider) => props.margin};
`;
