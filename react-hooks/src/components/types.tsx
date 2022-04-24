export interface personType {
  name: string | undefined;
  secName: string | undefined;
  date: string | undefined;
  promo: undefined | boolean;
  image: FileList;
  select: string | undefined;
  checked: boolean | undefined;
  url: string | undefined;
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
