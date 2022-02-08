import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import ButtonProps from './Button.type';
import * as S from './Button.styled';

const Button = ({ children, primary }: SCProps<ButtonProps>): ReactElement => (
  <S.Button primary={primary}>{children}</S.Button>
);

Button.defaultProps = {
  primary: false,
};

export default Button;
