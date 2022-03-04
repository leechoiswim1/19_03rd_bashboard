import React, { ReactElement } from 'react';
import { FilterDropDown } from 'components/organisms';
import { ResetBtn } from 'components/atoms';
import { FILTER_CATEGORY } from 'consts/constants';
import FilterBarProps from './FilterBar.type';

import * as S from './FilterBar.styled';

const FilterBar = ({
  checkedMethod,
  checkedMaterial,
  setCheckMethod,
  setCheckedMaterial,
  resetHandler,
}: FilterBarProps): ReactElement => (
  <S.FilterBarWrap>
    {FILTER_CATEGORY &&
      FILTER_CATEGORY.map(
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
    {FILTER_CATEGORY && <ResetBtn resetHandler={resetHandler} />}
  </S.FilterBarWrap>
);

export default FilterBar;
