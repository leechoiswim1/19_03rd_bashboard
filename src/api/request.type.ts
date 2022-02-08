type Status = '대기중' | '상담중';
type Method = '밀링' | '선반';
type Material = '알루미늄' | '탄소강' | '구리' | '스테인리스강' | '강철';

export interface Request {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: Method[];
  material: Material[];
  status: Status;
}
