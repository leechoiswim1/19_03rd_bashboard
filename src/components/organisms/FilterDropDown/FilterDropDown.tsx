/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { ReactElement } from 'react';
import LabeledCheckBox from 'components/molecules/LabeledCheckBox/LabeledCheckBox';
import { PROCESS_METHOD, MATERIAL_LIST } from 'consts/constants';
import { ReactComponent as ArrowDown } from 'assets/images/arrowDown.svg';
import { Material, Method } from 'api/request.type';
import FilterDropProps from './FilterDropDown.type';
import * as S from './FilterDropDownstyled';

const FilterDropDown = ({
  category,
  checkedMethod,
  checkedMaterial,
  setCheckMethod,
  setCheckedMaterial,
}: FilterDropProps): ReactElement => {
  const handleCheckList = (filterName: Material | Method) => {
    if (category === '가공방식') {
      setCheckMethod(
        checkedMethod.includes(filterName as Method)
          ? checkedMethod.filter(method => filterName !== method)
          : [...checkedMethod, filterName as Method],
      );
    } else {
      setCheckedMaterial(
        checkedMaterial.includes(filterName as Material)
          ? checkedMaterial.filter(method => filterName !== method)
          : [...checkedMaterial, filterName as Material],
      );
    }
  };

  return (
    <S.DropDownWrap>
      <S.Button
        category={category}
        primary={
          category === '가공방식' ? checkedMethod.length !== 0 : checkedMaterial.length !== 0
        }
      >
        <span>
          {category}
          {category === '가공방식'
            ? checkedMethod.length !== 0 && `(${checkedMethod.length})`
            : checkedMaterial.length !== 0 && `(${checkedMaterial.length})`}
        </span>
        <ArrowDown />
      </S.Button>
      <S.DropDown>
        {(category === '가공방식' ? PROCESS_METHOD : MATERIAL_LIST).map(
          (method: string): ReactElement => (
            <LabeledCheckBox
              key={method}
              label={method}
              id={method}
              handleCheckList={handleCheckList}
            />
          ),
        )}
      </S.DropDown>
    </S.DropDownWrap>
  );
};
export default FilterDropDown;
