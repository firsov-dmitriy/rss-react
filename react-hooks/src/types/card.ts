import { dataChatacters } from './types';

export interface CardState {
    card: dataChatacters[],
    page: number,
    error: null | string,
    limit: number,
    loading: boolean
}

export enum CardActionTypes {
    FETCH_CARD= 'FETCH_CARD',
    FETCH_CARD_SUCCESS= 'FETCH_CARD_SUCCESS',
    FETCH_CARD_ERROR= 'FETCH_CARD_ERROR',
    SET_CARD_PAGE = 'SET_CARD_PAGE'
}
interface FetchCardAction {
    type: CardActionTypes.FETCH_CARD
}
interface FetchCardSuccessAction {
    type: CardActionTypes.FETCH_CARD_SUCCESS;
    payload: any[];
}
interface FetchCardErrorAction {
    type: CardActionTypes.FETCH_CARD_ERROR;
    payload: string;
}
interface SetCardPage {
    type: CardActionTypes.SET_CARD_PAGE;
    payload: number;
}

export type CardAction =
    FetchCardAction
    | FetchCardErrorAction
    | FetchCardSuccessAction
    | SetCardPage
