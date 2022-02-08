import React, { ReactElement } from 'react';
import { Logo } from 'components/atoms';
import * as S from './Sidebar.styled';

const Sidebar = (): ReactElement => (
  <S.Background>
    <S.Overlay />
    <S.Wrapper>
      <S.Header>
        <Logo path="sidebar" />
      </S.Header>
    </S.Wrapper>
  </S.Background>
);

export default Sidebar;
