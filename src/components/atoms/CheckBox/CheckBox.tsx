import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import * as S from './CheckBox.styled';
import { CheckBoxProps } from './CheckBox.type';

const CheckBox = ({
  className,
  id,
  checked,
  required,
  readOnly,
  onChange,
}: SCProps<CheckBoxProps>): ReactElement => (
  <S.CheckBox
    className={className}
    id={id}
    type="checkbox"
    checked={checked}
    required={required}
    readOnly={readOnly}
    onChange={onChange}
  />
);
export default React.memo(CheckBox);
