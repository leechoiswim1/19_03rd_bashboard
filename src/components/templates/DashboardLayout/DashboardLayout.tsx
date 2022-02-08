/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-restricted-syntax */
import React, { ReactElement, useState } from 'react';
import { ToggleBtn } from 'components/atoms';
import { FilterBar, NoResults } from 'components/organisms';
import { Title, Card } from 'components/molecules';
import { Material, Method, Status } from 'api/request.type';
import { DashboardLayoutProps } from './DashboardLayout.type';
import * as S from './DashboardLayout.styled';

const DashboardLayout = ({ requests }: DashboardLayoutProps): ReactElement => {
  const [isConsult, setIsConsult] = useState(false);
  const [checkedMethod, setCheckMethod] = useState<Method[]>([]);
  const [checkedMaterial, setCheckedMaterial] = useState<Material[]>([]);

  const isIncludeElementAtLeatOne = (arr1: string[], arr2: string[]) => {
    for (const el1 of arr1) {
      for (const el2 of arr2) {
        if (el1 === el2) return true;
      }
    }

    return false;
  };

  const filter = ({
    status,
    method = [],
    material = [],
  }: {
    status: Status;
    method: Method[];
    material: Material[];
  }) => {
    if (status === '대기중' && method.length === 0 && material.length === 0) return requests;

    return requests
      .filter(({ status: _status }) =>
        status === '대기중' ? true : _status === '대기중' ? false : true,
      )
      .filter(({ method: _method }) =>
        method.length === 0 ? true : isIncludeElementAtLeatOne(method, _method),
      )
      .filter(({ material: _material }) =>
        material.length === 0 ? true : isIncludeElementAtLeatOne(material, _material),
      );
  };

  return (
    <S.Layout>
      <Title main="들어온 요청" sub="파트너님에게 딱 맞는 요청서를 찾아보세요." />
      <S.Box>
        <FilterBar
          checkedMethod={checkedMethod}
          checkedMaterial={checkedMaterial}
          setCheckMethod={setCheckMethod}
          setCheckedMaterial={setCheckedMaterial}
        />
        <ToggleBtn clicked={isConsult} setToggled={setIsConsult} />
        <S.Text>상담 중인 요청만 보기</S.Text>
      </S.Box>
      {requests.length === 0 ? (
        <NoResults />
      ) : (
        <S.RequestCardWrapper>
          {filter({
            status: isConsult ? '상담중' : '대기중',
            method: checkedMethod,
            material: checkedMaterial,
          }).map(request => (
            <Card key={request.id} request={request} />
          ))}
        </S.RequestCardWrapper>
      )}
    </S.Layout>
  );
};
export default DashboardLayout;
