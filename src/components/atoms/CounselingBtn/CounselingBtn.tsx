import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import CounselingBtnProps from './CounselingBtn.type';
import * as S from './CounselingBtn.styled';

const CounselingBtn = ({ children }: SCProps<CounselingBtnProps>): ReactElement => (
  <S.CounselingBtn>{children}</S.CounselingBtn>
);

export default CounselingBtn;
