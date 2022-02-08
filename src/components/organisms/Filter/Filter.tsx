import LabeledCheckBox from 'components/molecules/LabeledCheckBox/LabeledCheckBox';
import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';

const Filter = ({ children }: SCProps): ReactElement => (
  <LabeledCheckBox label="알루미늄" id="aluminum" />
);
export default Filter;
