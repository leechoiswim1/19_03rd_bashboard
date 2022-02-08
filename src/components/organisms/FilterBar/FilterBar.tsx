import React, { ReactElement, useState } from 'react';
import { FilterDropDown } from 'components/organisms';
import { filterCategory } from 'consts/constants';
import FilterDropProps from '../FilterDropDown/FilterDropDown.type';

import * as S from './FilterBar.styled';

const FilterBar = ({
  checkedMethod,
  checkedMaterial,
  setCheckMethod,
  setCheckedMaterial,
}: FilterDropProps): ReactElement => (
  <S.FilterBarWrap>
    {filterCategory &&
      filterCategory.map(
        (category: string): ReactElement => (
          <FilterDropDown
            key={category}
            category={category}
            checkedMethod={checkedMethod}
            checkedMaterial={checkedMaterial}
            setCheckMethod={setCheckMethod}
            setCheckedMaterial={setCheckedMaterial}
          />
        ),
      )}
  </S.FilterBarWrap>
);

export default FilterBar;
