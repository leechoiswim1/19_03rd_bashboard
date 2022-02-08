import React, { ReactElement } from 'react';
import { HeadBtn } from 'components/atoms';
import * as S from './HeadBtnGroup.styled';

const HeadBtnGroup = (): ReactElement => (
  <S.Wrapper>
    <HeadBtn title="A 가공업체" />
    <S.Divider />
    <HeadBtn title="로그아웃" />
  </S.Wrapper>
);

export default HeadBtnGroup;
