import { personType } from '../types/types';

export default class Persona {
  name: string | undefined;
  secName: string | undefined;
  select: string | undefined;
  date: string | undefined;
  image: string | undefined | FileList;
  checked: boolean | undefined;
  promo: boolean | undefined;
  buttonWork: number | undefined;
  constructor({ name, secName, select, date, image, checked, promo }: personType) {
    this.name = name;
    this.secName = secName;
    this.select = select;
    this.date = date;
    this.image = image;
    this.checked = checked;
    this.promo = promo;
  }
}
