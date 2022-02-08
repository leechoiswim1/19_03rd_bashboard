import React, { ReactElement } from 'react';

import * as S from './HeadBtn.styled';
import HeadBtnProps from './HeadBtn.type';

const HeadBtn = ({ title }: HeadBtnProps): ReactElement => (
  <S.Wrapper>
    {title === 'A 가공업체' ? <S.OfficeIcon /> : ''}
    <S.Text>{title}</S.Text>
  </S.Wrapper>
);
HeadBtn.defaultProps = {
  title: 'title',
};

export default HeadBtn;
