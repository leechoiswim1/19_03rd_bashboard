/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components/macro';

interface IButton {
  primary: boolean;
}

export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid
    ${(props: IButton) =>
      props.primary ? ({ theme }) => theme.color.white : ({ theme }) => theme.color.primaryBlue};
  background: ${(props: IButton) =>
    props.primary ? ({ theme }) => theme.color.primaryBlue : ({ theme }) => theme.color.white};
  color: ${(props: IButton) =>
    props.primary ? ({ theme }) => theme.color.white : ({ theme }) => theme.color.primaryBlue};
`;
