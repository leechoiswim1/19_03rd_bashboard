import { CheckBoxProps } from 'components/atoms/CheckBox/CheckBox.type';

export interface LabeledCheckBoxProps extends Omit<CheckBoxProps, 'checked'> {
  label: string;
}
