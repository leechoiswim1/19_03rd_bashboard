import React, { ReactElement } from 'react';
import { HeadBtnGroup, LogoGroup } from 'components';
import * as S from './Nav.styled';

const Nav: React.FC = (): ReactElement => (
  <S.Wrapper>
    <LogoGroup />
    <HeadBtnGroup />
  </S.Wrapper>
);

export default Nav;
