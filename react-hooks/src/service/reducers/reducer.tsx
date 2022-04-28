
import { Dispatch, useReducer } from 'react';
import { dataChatacters, personType } from '../../types/types';

export interface ValueType {
  valueSerch: string;
  person: personType[];
  status: string,
  dispatch?: (Dispatch<ActionType>) | undefined;
}

  
export const initialState: ValueType = {
  valueSerch: '',
  person: [],
  status: "",
 
};


export enum ActionTypes {
  SET_VALUE = 'SET_VALUE',
  SET_FORM = 'SET_FORM',
  SET_STATUS = 'SET_STATUS',
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
export type ActionType = SET_VALUE | SET_FORM | SET_STATUS;

export default function reducer(state = initialState, action: ActionType): ValueType {
  switch (action.type) {
    case ActionTypes.SET_VALUE:
      return { ...state, valueSerch: action.payload };
    case ActionTypes.SET_FORM:
      return { ...state, person: [...state.person, action.payload] };
    case ActionTypes.SET_STATUS: 
      return {...state, status: action.payload}

    default:
      return state;
  }
}
