import React, { ReactElement } from 'react';
import { COMPANY_NAME } from 'consts/constants';
import LogoProps from './Logo.type';
import * as S from './Logo.styled';

const Logo = ({ path }: LogoProps): ReactElement => {
  const newCompanyName = COMPANY_NAME.split(' ');
  return (
    <S.Wrapper path={path}>
      <S.Strong path={path}>{newCompanyName[0]}</S.Strong>
      <S.Text path={path}>{newCompanyName[1]}</S.Text>
    </S.Wrapper>
  );
};

export default Logo;
