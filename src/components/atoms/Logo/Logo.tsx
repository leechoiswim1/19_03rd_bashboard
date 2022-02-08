import React, { ReactElement } from 'react';
import * as S from './Logo.styled';

const Logo = (): ReactElement => (
  <S.Wrapper>
    <S.Strong>CAPA</S.Strong>
    <S.Text>파트너스</S.Text>
  </S.Wrapper>
);

export default Logo;
