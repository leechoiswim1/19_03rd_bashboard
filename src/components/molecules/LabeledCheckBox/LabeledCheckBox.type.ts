import { CheckBoxProps } from 'components/atoms/CheckBox/CheckBox.type';
import { Material, Method } from 'api/request.type';

export interface LabeledCheckBoxProps extends Omit<CheckBoxProps, 'checked'> {
  label: string;
  handleCheckList: (filterName: Material | Method) => void;
}
