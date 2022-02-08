import React, { ReactElement, useState } from 'react';
import LabeledCheckBox from 'components/molecules/LabeledCheckBox/LabeledCheckBox';
import { processMethod, materialList } from 'consts/constants';
import { ReactComponent as ArrowDown } from 'assets/images/arrowDown.svg';
import FilterDropProps from './FilterDropDown.type';
import * as S from './FilterDropDownstyled';

const FilterDropDown = ({ category }: FilterDropProps): ReactElement => {
  const [checkList, setCheckList] = useState<string[]>([]);
  const handleCheckList = (filterName: string) => {
    setCheckList([...checkList, filterName]);
  };
  return (
    <S.DropDownWrap>
      <S.Button category={category}>
        <span>{category}</span>
        <ArrowDown />
      </S.Button>
      <S.DropDown>
        {(category === '가공방식' ? processMethod : materialList).map(
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
