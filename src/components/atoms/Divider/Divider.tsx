import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import DividerProps from './Divider.type';
import * as S from './Divider.styled';

const Divider = ({ width, margin }: SCProps<DividerProps>): ReactElement => (
  <S.Divider margin={margin} width={width} />
);

Divider.defaultProps = {
  margin: '0 0',
  width: 100,
};

export default Divider;
