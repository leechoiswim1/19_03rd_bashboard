import React, { ReactElement } from 'react';
import { HeadBtnGroup, LogoGroup } from 'components/molecules';
import { Sidebar } from 'components/organisms';
import * as S from './Nav.styled';

const Nav = (): ReactElement => (
  <S.Wrapper>
    <S.NavBar>
      <LogoGroup />
      <HeadBtnGroup />
    </S.NavBar>
    <Sidebar />
  </S.Wrapper>
);

export default Nav;
