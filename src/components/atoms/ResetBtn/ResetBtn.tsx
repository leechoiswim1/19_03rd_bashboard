import React, { ReactElement } from 'react';
import { FILTERING_RESET } from 'consts/constants';
import { ReactComponent as Reset } from 'assets/images/reset.svg';
import * as S from './ResetBtn.styled';

const ResetBtn = (): ReactElement => (
  <S.ResetWrapper>
    <Reset width="16px" height="16px" />
    <S.ResetTitle>{FILTERING_RESET}</S.ResetTitle>
  </S.ResetWrapper>
);

export default ResetBtn;
