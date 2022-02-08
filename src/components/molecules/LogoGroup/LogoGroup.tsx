import React, { ReactElement } from 'react';
import { Logo } from 'components/atoms';
import * as S from './LogoGroup.styled';
import LogoGroupProps from './LogoGroup.type';

const LogoGroup = ({ handleSideMenu }: LogoGroupProps): ReactElement => (
  <S.Wrapper>
    <S.HamburgerWrap onClick={handleSideMenu}>
      <S.HambugerBtn />
    </S.HamburgerWrap>
    <Logo />
  </S.Wrapper>
);

export default LogoGroup;
