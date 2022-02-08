import React, { ReactElement, useEffect, useState } from 'react';
import { ToggleBtn } from 'components/atoms';
import { Filter, NoResults } from 'components/organisms';
import { Title, Card } from 'components/molecules';
import { Filter } from 'components/organisms';
import { getRequest } from 'api/request';
import { Request } from 'api/request.type';
import * as S from './DashboardLayout.styled';

const DashboardLayout = (): ReactElement => {
  const [toggled, setToggled] = useState(false);
  const [list, setList] = useState<Request[]>([]);
  const cardsList = Array.from({ length: 5 }, (_, index) => index);

  useEffect(() => {
    getRequest()
      .then(data => setList(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <S.Layout>
      <Title main="들어온 요청" sub="파트너님에게 딱 맞는 요청서를 찾아보세요." />
      <S.Box>
        <ToggleBtn clicked={toggled} setToggled={setToggled} />
        <S.Text>현재 상담 중인 요청만 보기</S.Text>
      </S.Box>
      <Filter />
      <S.RequestCardWrapper>
        {list.map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={_.id} requests={_} />
        ))}
      </S.RequestCardWrapper>
      <NoResults />
    </S.Layout>
  );
};
export default DashboardLayout;
