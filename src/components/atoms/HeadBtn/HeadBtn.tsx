import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import * as S from './HeadBtn.styled';
import HeadBtnProps from './HeadBtn.type';

const HeadBtn = ({ title }: SCProps<HeadBtnProps>): ReactElement => (
  <S.Wrapper>
    <S.Text>{title}</S.Text>
  </S.Wrapper>
);

HeadBtn.defaultProps = {
  title: 'title',
};

export default HeadBtn;
