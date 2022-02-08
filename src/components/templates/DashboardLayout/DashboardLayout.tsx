import React, { ReactElement } from 'react';
import { Title } from 'components/molecules';
import * as S from './DashboardLayout.styled';

const DashboardLayout = (): ReactElement => (
  <S.Layout>
    <Title main="들어온 요청" sub="파트너님에게 딱 맞는 요청서를 찾아보세요." />
    <S.RequestCardWrapper>
      {Array.from({ length: 6 }, (_, index) => index).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <S.DummyCard key={index} />
      ))}
    </S.RequestCardWrapper>
  </S.Layout>
);
export default DashboardLayout;
