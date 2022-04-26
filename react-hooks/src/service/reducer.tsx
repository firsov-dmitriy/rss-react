import { dataChatacters, personType } from '../components/types';

export interface ValueType {
  valueSerch: string;
  person: personType[];
}
export const initialState: ValueType = {
  valueSerch: '',
  person: [],
};

export enum ActionTypes {
  SET_VALUE = 'SET_VALUE',
  SET_FORM = 'SET_FORM',
}
interface SET_VALUE {
  type: ActionTypes.SET_VALUE;
  payload: string;
}
interface SET_FORM {
  type: ActionTypes.SET_FORM;
  payload: personType;
}
export type ActionType = SET_VALUE | SET_FORM;

export default function reducer(state = initialState, action: ActionType): ValueType {
  switch (action.type) {
    case ActionTypes.SET_VALUE:
      return { ...state, valueSerch: action.payload };
    case ActionTypes.SET_FORM:
      return { ...state, person: [...state.person, action.payload] };

    default:
      return state;
  }
}
