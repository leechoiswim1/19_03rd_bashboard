import React, { ReactElement, useState } from 'react';
import { ToggleBtn } from 'components/atoms';
import { Title, Card } from 'components/molecules';
import { Filter } from 'components/organisms';
import { Status, Method, Material } from 'api/request.type';
import { DashboardLayoutProps } from './DashboardLayout.type';
import * as S from './DashboardLayout.styled';

const DashboardLayout = ({ requests }: DashboardLayoutProps): ReactElement => {
  const [isConsult, setIsConsult] = useState(false);

  return (
    <S.Layout>
      <Title main="들어온 요청" sub="파트너님에게 딱 맞는 요청서를 찾아보세요." />
      <S.Box>
        <ToggleBtn clicked={isConsult} setToggled={setIsConsult} />
        <S.Text>현재 상담 중인 요청만 보기</S.Text>
      </S.Box>
      <Filter />
      <S.RequestCardWrapper>
        {requests.map(request => (
          <Card key={request.id} request={request} />
        ))}
      </S.RequestCardWrapper>
    </S.Layout>
  );
};
export default DashboardLayout;
