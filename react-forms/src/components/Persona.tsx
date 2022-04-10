import { personType } from './types';

export default class Persona {
  name: string | undefined;
  secName: string | undefined;
  select: string | undefined;
  date: string | undefined;
  url: string | undefined;
  checked: boolean | undefined;
  prom: boolean | undefined;
  buttonWork: number | undefined;
  constructor({ name, secName, select, date, url, checked, prom, buttonWork }: personType) {
    this.name = name;
    this.secName = secName;
    this.select = select;
    this.date = date;
    this.url = url;
    this.checked = checked;
    this.prom = prom;
    this.buttonWork = buttonWork;
  }
}
