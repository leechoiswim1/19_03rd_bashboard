import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import DividerProps from './Divider.type';
import * as S from './Divider.styled';

const Divider = ({ width }: SCProps<DividerProps>): ReactElement => <S.Divider width={width} />;

Divider.defaultProps = {
  width: 0,
};

export default Divider;
