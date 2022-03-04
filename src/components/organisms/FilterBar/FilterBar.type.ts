import { Material, Method } from 'api/request.type';

export default interface FilterBarProps {
  category?: string;
  checkedMethod: Method[];
  checkedMaterial: Material[];
  setCheckMethod: React.Dispatch<React.SetStateAction<Method[]>>;
  setCheckedMaterial: React.Dispatch<React.SetStateAction<Material[]>>;
  resetHandler: React.MouseEventHandler<HTMLDivElement>;
}
