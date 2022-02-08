import React, { ReactElement, useCallback, useState } from 'react';
import { CheckBox } from 'components/atoms';
import { SCProps } from 'types/props';
import * as S from './LabledCheckBox.styled';
import { LabeledCheckBoxProps } from './LabeledCheckBox.type';

const LabeledCheckBox = ({
  label,
  id,
  onChange,
  required,
  readOnly,
}: SCProps<LabeledCheckBoxProps>): ReactElement => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      setIsChecked(!isChecked);
    },
    [isChecked, onChange],
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
