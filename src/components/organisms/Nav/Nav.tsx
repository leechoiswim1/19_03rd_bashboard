import React, { ReactElement, useState } from 'react';
import { HeadBtnGroup, LogoGroup } from 'components/molecules';
import { Sidebar } from 'components/organisms';
import * as S from './Nav.styled';

const Nav = (): ReactElement => {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const handleSideMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };
  return (
    <S.Wrapper>
      <S.NavBar>
        <LogoGroup handleSideMenu={handleSideMenu} />
        <HeadBtnGroup path="Nav" />
      </S.NavBar>
      <Sidebar handleSideMenu={handleSideMenu} openSideMenu={openSideMenu} />
    </S.Wrapper>
  );
};

export default Nav;
