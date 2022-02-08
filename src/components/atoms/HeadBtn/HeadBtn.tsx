import React, { ReactElement } from 'react';
import { ReactComponent as Office } from 'styles/images/office.svg';
import * as S from './HeadBtn.styled';
import HeadBtnProps from './HeadBtn.type';

const HeadBtn = ({ title }: HeadBtnProps): ReactElement => (
  <S.Wrapper>
    {title === 'A 가공업체' ? <Office /> : ''}
    <S.Text>{title}</S.Text>
  </S.Wrapper>
);

HeadBtn.defaultProps = {
  title: 'title',
};

export default HeadBtn;
