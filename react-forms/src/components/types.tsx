export interface personType {
  name: string | undefined;
  secName: string | undefined;
  date: string | undefined;
  prom: boolean | undefined;
  url: string | undefined;
  select: string | undefined;
  checked: boolean | undefined;
  buttonWork?: number;
}
export interface dirtyType {
  name: boolean;
  secName: boolean;
  date: boolean;
  processing: boolean;
}

export interface selectType {
  id: number;
  city: string;
}
