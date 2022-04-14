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

export interface dataChatacters {
  id?: number;
  name: string;
  status: string;
  image: string;
  gender?: string;
  species?: string;
  location?: { name: string; url: string };
  episode?: string[];
  origin?: { name: string; url: string };
  type?: string;
}
