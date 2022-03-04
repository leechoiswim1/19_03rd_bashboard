export interface CheckBoxProps {
  id: string;
  name?: string;
  required?: boolean;
  value?: string;
  checked: boolean;
  readOnly?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
