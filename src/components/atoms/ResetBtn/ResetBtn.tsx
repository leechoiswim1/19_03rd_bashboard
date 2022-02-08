import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import ResetBtnProps from './ResetBtn.type';
import * as S from './ResetBtn.styled';

const ResetBtn = ({ children }: SCProps<ResetBtnProps>): ReactElement => (
  <S.ResetBtn>{children}</S.ResetBtn>
);

export default ResetBtn;
