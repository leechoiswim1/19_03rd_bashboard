import React, { ReactElement, useState } from 'react';
import { FilterDropDown } from 'components/organisms';
import { filterCategory } from 'consts/constants';

import * as S from './FilterBar.styled';

const FilterBar = (): ReactElement => (
  <S.FilterBarWrap>
    {filterCategory &&
      filterCategory.map(
        (category: string): ReactElement => <FilterDropDown key={category} category={category} />,
      )}
  </S.FilterBarWrap>
);

export default FilterBar;
