import React, { ReactElement } from 'react';
import { Logo } from 'components/atoms';
import { HeadBtnGroup } from 'components/molecules';
import * as S from './Sidebar.styled';
import SidebarProps from './Sidebar.type';

const Sidebar = ({ openSideMenu, handleSideMenu }: SidebarProps): ReactElement => (
  <>
    <S.Overlay openSideMenu={openSideMenu} onClick={handleSideMenu} />
    <S.Wrapper openSideMenu={openSideMenu}>
      <S.Header>
        <Logo path="sidebar" />
      </S.Header>
      <S.Content>
        <HeadBtnGroup path="sidebar" />
      </S.Content>
    </S.Wrapper>
  </>
);

export default Sidebar;
