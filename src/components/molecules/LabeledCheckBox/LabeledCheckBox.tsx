import React, { ReactElement, useCallback, useState } from 'react';
import { CheckBox } from 'components/atoms';
import { SCProps } from 'types/props';
import { Material, Method } from 'api/request.type';
import * as S from './LabledCheckBox.styled';
import { LabeledCheckBoxProps } from './LabeledCheckBox.type';

const LabeledCheckBox = ({
  label,
  id,
  onChange,
  required,
  readOnly,
  handleCheckList,
  isChecked,
}: SCProps<LabeledCheckBoxProps>): ReactElement => {
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      handleCheckList(e.target.id as Material | Method);
    },
    [onChange, handleCheckList],
  );

  return (
    <S.WrapperLabel>
      <CheckBox
        id={id}
        checked={isChecked}
        onChange={handleOnChange}
        required={required}
        readOnly={readOnly}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.WrapperLabel>
  );
};
export default React.memo(LabeledCheckBox);
