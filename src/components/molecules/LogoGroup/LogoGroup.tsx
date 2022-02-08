import React, { ReactElement } from 'react';
import { Logo } from 'components';
import * as S from './LogoGroup.styled';

const LogoGroup: React.FC = (): ReactElement => (
  <S.Wrapper>
    <S.HambugerBtn />
    <Logo />
  </S.Wrapper>
);

export default LogoGroup;
