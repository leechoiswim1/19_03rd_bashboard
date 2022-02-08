import styled from 'styled-components/macro';
import { CheckBoxProps } from './CheckBox.type';
import checkIcon from './assets/check-sign.svg';

export const CheckBox = styled.input<Pick<CheckBoxProps, 'checked'>>`
  position: relative;
  width: 18px;
  height: 18px;
  left: -2px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: inherit;
    height: inherit;
    border: 2px solid
      ${props => (props.checked ? props.theme.color.primaryBlue : props.theme.color.gray)};
    border-radius: 2px;
    background-color: ${props =>
      props.checked ? props.theme.color.primaryBlue : props.theme.color.white};

    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
