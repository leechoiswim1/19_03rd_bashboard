import React, { ReactElement } from 'react';
import { Divider, Button, CounselingBtn } from 'components/atoms';
import {
  COUNSELING,
  CARD_COUNT,
  CARD_AMOUNT,
  CARD_METHOD,
  CARD_MATERIAL,
  CARD_REQUEST_DETAILS,
  CARD_CHATTING,
  CARD_UNTIL,
} from 'consts/constants';
import { SCProps } from 'types/props';
import CardProps from './Card.type';
import * as S from './Card.styled';

const Card: React.FC<CardProps> = ({ requests }) => (
  <S.CardWrapper>
    <S.TitleWrapper>
      <S.Title>{requests.title}</S.Title>
      {requests.status === COUNSELING && <CounselingBtn>{COUNSELING}</CounselingBtn>}
    </S.TitleWrapper>
    <S.Client>{requests.client}</S.Client>
    <S.Due>
      {requests.due}
      {CARD_UNTIL}
    </S.Due>
    <Divider margin="0 0 32px 0" />
    <S.ContentWrapper>
      <S.ContentTitle>{CARD_COUNT}</S.ContentTitle>
      <S.Contents>{requests.count}개</S.Contents>
    </S.ContentWrapper>
    <S.ContentWrapper>
      <S.ContentTitle>{CARD_AMOUNT}</S.ContentTitle>
      <S.Contents>{requests.amount}개</S.Contents>
    </S.ContentWrapper>
    <S.ContentWrapper>
      <S.ContentTitle>{CARD_METHOD}</S.ContentTitle>
      <S.Contents>{requests.method.join(', ')}</S.Contents>
    </S.ContentWrapper>
    <S.ContentWrapper>
      <S.ContentTitle>{CARD_MATERIAL}</S.ContentTitle>
      <S.Contents>{requests.material.join(', ')}</S.Contents>
    </S.ContentWrapper>
    <S.ButtonWrapper>
      <Button primary>{CARD_REQUEST_DETAILS}</Button>
      <Button>{CARD_CHATTING}</Button>
    </S.ButtonWrapper>
  </S.CardWrapper>
);

export default Card;
