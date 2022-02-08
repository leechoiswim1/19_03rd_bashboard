import React, { ReactElement } from 'react';
import * as S from './Title.styled';
import { TitleProps } from './Title.type';

const Title = ({ main, sub }: TitleProps): ReactElement => (
  <S.TitleHeader>
    <h2>{main}</h2>
    <span>{sub}</span>
  </S.TitleHeader>
);
export default Title;
