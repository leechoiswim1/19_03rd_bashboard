import { Material, Method } from 'api/request.type';

export default interface FilterDropProps {
  category?: string;
  checkedMethod: Method[];
  checkedMaterial: Material[];
  setCheckMethod: React.Dispatch<React.SetStateAction<Method[]>>;
  setCheckedMaterial: React.Dispatch<React.SetStateAction<Material[]>>;
}
