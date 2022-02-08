import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import CardProps from './Card.type';
import * as S from './Card.styled';

const Card = ({ children, className }: SCProps<CardProps>): ReactElement => (
  <Card className={className}>
    <div>{children}</div>
  </Card>
);

export default Card;
