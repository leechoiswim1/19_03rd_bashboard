import React, { ReactElement } from 'react';
import { HeadBtn } from 'components/atoms';
import { navigatorBtn, sideBarBtn } from 'consts/constants';
import HeadBtnProps from 'components/atoms/HeadBtn/HeadBtn.type';
import * as S from './HeadBtnGroup.styled';

const HeadBtnGroup = ({ path }: HeadBtnProps): ReactElement => (
  <S.Wrapper path={path}>
    {path === 'Nav' ? (
      <>
        <HeadBtn title={navigatorBtn[0]} />
        <S.Divider />
        <HeadBtn title={navigatorBtn[1]} />
      </>
    ) : (
      sideBarBtn &&
      sideBarBtn.map((btn: string): ReactElement => <HeadBtn key={btn} title={btn} path={path} />)
    )}
  </S.Wrapper>
);

export default HeadBtnGroup;
