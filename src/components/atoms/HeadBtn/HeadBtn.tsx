import React, { ReactElement } from 'react';
import * as S from './HeadBtn.styled';
import HeadBtnProps from './HeadBtn.type';

const HeadBtn = ({ title, path }: HeadBtnProps): ReactElement => (
  <S.Wrapper path={path}>
    {title !== '로그아웃' ? <S.OfficeIcon path={path} /> : ''}
    <S.Text path={path}>{title}</S.Text>
  </S.Wrapper>
);

HeadBtn.defaultProps = {
  title: 'title',
};

export default HeadBtn;
