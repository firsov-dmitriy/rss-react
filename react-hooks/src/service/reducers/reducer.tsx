import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { personType } from '../../types/types';

export interface ValueType {
  valueSerch: string;
  person: personType[];
  status: string;
  dispatch?: Dispatch<ActionType> | undefined;
  param: {
    id: number | null;
  };
  back: boolean;
}

export const initialState: ValueType = {
  valueSerch: '',
  person: [],
  status: '',
  param: {
    id: null,
  },
  back: false,
};

export enum ActionTypes {
  SET_VALUE = 'SET_VALUE',
  SET_FORM = 'SET_FORM',
  SET_STATUS = 'SET_STATUS',
  SET_PARAM_ID = 'SET_PARAM_ID',
  SET_BACK_BTN = 'SET_BACK_BTN',
}
interface SET_VALUE {
  type: ActionTypes.SET_VALUE;
  payload: string;
}
interface SET_FORM {
  type: ActionTypes.SET_FORM;
  payload: personType;
}
interface SET_STATUS {
  type: ActionTypes.SET_STATUS;
  payload: string;
}
interface SET_PARAM_ID {
  type: ActionTypes.SET_PARAM_ID;
  payload: number;
}
interface SET_BACK {
  type: ActionTypes.SET_BACK_BTN;
  payload: boolean;
}
export type ActionType = SET_VALUE | SET_BACK | SET_FORM | SET_STATUS | SET_PARAM_ID;

export default function reducer(state = initialState, action: ActionType | AnyAction): ValueType {
  switch (action.type) {
    case ActionTypes.SET_VALUE:
      return { ...state, valueSerch: action.payload };
    case ActionTypes.SET_FORM:
      return { ...state, person: [...state.person, action.payload] };
    case ActionTypes.SET_STATUS:
      return { ...state, status: action.payload };
    case ActionTypes.SET_PARAM_ID:
      return { ...state, param: { id: action.payload } };
    case ActionTypes.SET_BACK_BTN:
      return { ...state, back: action.payload };
    default:
      return state;
  }
}
