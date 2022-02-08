import React, { ReactElement, useEffect, useState, SetStateAction } from 'react';
import { getRequest } from 'api/request';
import { Request } from 'api/request.type';
import { Divider, Button } from 'components/atoms';
import { SCProps } from 'types/props';
import CardProps from './Card.type';
import * as S from './Card.styled';

const Card = ({ children }: SCProps<CardProps>): ReactElement => (
  <S.CardWrapper>
    <S.TitleWrapper>
      <S.Title>자동차 시제품 제작</S.Title>
      <div>abc</div>
    </S.TitleWrapper>
    <S.Client>A 고객사</S.Client>
    <S.Due>2020.12.14까지 납기</S.Due>
    <Divider margin="0 0 32px 0" />
    <S.ContentWrapper>
      <S.ContentTitle>도면 개수</S.ContentTitle>
      <S.Contents>2개</S.Contents>
    </S.ContentWrapper>
    <S.ContentWrapper>
      <S.ContentTitle>총 수량</S.ContentTitle>
      <S.Contents>100개</S.Contents>
    </S.ContentWrapper>
    <S.ContentWrapper>
      <S.ContentTitle>가공방식</S.ContentTitle>
      <S.Contents>밀링, 선반</S.Contents>
    </S.ContentWrapper>
    <S.ContentWrapper>
      <S.ContentTitle>재료</S.ContentTitle>
      <S.Contents>알루미늄</S.Contents>
    </S.ContentWrapper>
    <S.ButtonWrapper>
      <Button primary>요청 내역 보기</Button>
      <Button>채팅하기</Button>
    </S.ButtonWrapper>
  </S.CardWrapper>
);

export default Card;
