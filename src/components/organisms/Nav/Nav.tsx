import React, { ReactElement } from 'react';
import { Logo, HeadBtnGroup } from 'components';
import * as S from './Nav.styled';

const Nav: React.FC = (): ReactElement => (
  <S.Wrapper>
    <Logo />
    <HeadBtnGroup />
  </S.Wrapper>
);

export default Nav;
