/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-restricted-syntax */
import React, { ReactElement, useState } from 'react';
import { ToggleBtn } from 'components/atoms';
import { FilterBar, NoResults } from 'components/organisms';
import { Title, Card } from 'components/molecules';
import { Material, Method } from 'api/request.type';
import { DashboardLayoutProps } from './DashboardLayout.type';
import * as S from './DashboardLayout.styled';

const DashboardLayout = ({ requests }: DashboardLayoutProps): ReactElement => {
  const [isConsult, setIsConsult] = useState(false);
  const [checkedMethod, setCheckMethod] = useState<Method[]>([]);
  const [checkedMaterial, setCheckedMaterial] = useState<Material[]>([]);

  const resetHandler = () => {
    setCheckMethod([]);
    setCheckedMaterial([]);
  };

  const isIncludeElementAtLeatOne = (arr1: string[], arr2: string[]) => {
    for (const el1 of arr1) {
      for (const el2 of arr2) {
        if (el1 === el2) return true;
      }
    }

    return false;
  };

  const filteredRequests = requests
    .filter(({ status }) => (!isConsult ? true : status === '대기중' ? false : true))
    .filter(({ method }) =>
      checkedMethod.length === 0 ? true : isIncludeElementAtLeatOne(checkedMethod, method),
    )
    .filter(({ material }) =>
      checkedMaterial.length === 0 ? true : isIncludeElementAtLeatOne(checkedMaterial, material),
    );
  return (
    <S.Layout>
      <Title main="들어온 요청" sub="파트너님에게 딱 맞는 요청서를 찾아보세요." />
      <S.Box>
        <FilterBar
          checkedMethod={checkedMethod}
          checkedMaterial={checkedMaterial}
          setCheckMethod={setCheckMethod}
          setCheckedMaterial={setCheckedMaterial}
          resetHandler={resetHandler}
        />
        <S.CSBox>
          <ToggleBtn clicked={isConsult} setToggled={setIsConsult} />
          <S.Text>상담 중인 요청만 보기</S.Text>
        </S.CSBox>
      </S.Box>
      {filteredRequests.length === 0 ? (
        <NoResults />
      ) : (
        <S.RequestCardWrapper>
          {filteredRequests.map(request => (
            <Card key={request.id} request={request} />
          ))}
        </S.RequestCardWrapper>
      )}
    </S.Layout>
  );
};
export default DashboardLayout;
