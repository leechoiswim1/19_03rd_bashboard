import React, { ReactElement } from 'react';
import { ReactComponent as Reset } from 'assets/images/reset.svg';
import { SCProps } from 'types/props';
import { FILTERING_RESET } from 'consts/constants';
import ResetButtonProps from './ResetButton.type';
import * as S from './ResetBtn.styled';

const ResetBtn = ({ resetHandler }: SCProps<ResetButtonProps>): ReactElement => (
  <S.ResetWrapper onClick={resetHandler}>
    <Reset width="16px" height="16px" />
    <S.ResetTitle>{FILTERING_RESET}</S.ResetTitle>
  </S.ResetWrapper>
);

export default ResetBtn;
