import { Dispatch } from 'react';
import { dataChatacters } from './types';

export interface CardState {
  card: dataChatacters[];
  page: number;
  error: null | string;
  limit: number;
  loading: boolean;
  dispatchCard?: Dispatch<CardAction> | undefined;
}

export enum CardActionTypes {
  FETCH_CARD = 'FETCH_CARD',
  FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS',
  FETCH_CARD_ERROR = 'FETCH_CARD_ERROR',
  SET_CARD_PAGE = 'SET_CARD_PAGE',
  SET_CARD_LIMIT = 'SET_CARD_LIMIT',
}
interface FetchCardAction {
  type: CardActionTypes.FETCH_CARD;
}
interface FetchCardSuccessAction {
  type: CardActionTypes.FETCH_CARD_SUCCESS;
  payload: dataChatacters[];
}
interface FetchCardErrorAction {
  type: CardActionTypes.FETCH_CARD_ERROR;
  payload: string;
}
interface SetCardPage {
  type: CardActionTypes.SET_CARD_PAGE;
  payload: number;
}
interface SetCardLimit {
  type: CardActionTypes.SET_CARD_LIMIT;
  payload: number;
}

export type CardAction =
  | FetchCardAction
  | FetchCardErrorAction
  | FetchCardSuccessAction
  | SetCardPage
  | SetCardLimit;
