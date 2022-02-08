import React, { ReactElement } from 'react';
import { HeadBtn } from 'components/atoms';
import { NAVIGATOR_BTN, SIDEBAR_BTN } from 'consts/constants';
import HeadBtnProps from 'components/atoms/HeadBtn/HeadBtn.type';
import * as S from './HeadBtnGroup.styled';

const HeadBtnGroup = ({ path }: HeadBtnProps): ReactElement => (
  <S.Wrapper path={path}>
    {path === 'Nav' ? (
      <>
        <HeadBtn title={NAVIGATOR_BTN[0]} />
        <S.Divider />
        <HeadBtn title={NAVIGATOR_BTN[1]} />
      </>
    ) : (
      SIDEBAR_BTN &&
      SIDEBAR_BTN.map((btn: string): ReactElement => <HeadBtn key={btn} title={btn} path={path} />)
    )}
  </S.Wrapper>
);

export default HeadBtnGroup;
