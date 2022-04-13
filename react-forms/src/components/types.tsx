export interface personType {
  name: string | undefined;
  secName: string | undefined;
  date: string | undefined;
  prom: undefined | boolean;
  url: string | undefined;
  select: string | undefined;
  checked: boolean | undefined;
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
