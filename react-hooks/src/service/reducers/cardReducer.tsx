import { CardState, CardAction, CardActionTypes } from '../../types/card';

export const initialCardState: CardState = {
  card: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false,
};
export default function cardReducer(state = initialCardState, action: CardAction): CardState {
  switch (action.type) {
    case CardActionTypes.FETCH_CARD:
      return { ...state, loading: true };
    case CardActionTypes.FETCH_CARD_SUCCESS:
      return { ...state, loading: false, card: action.payload };
    case CardActionTypes.FETCH_CARD_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CardActionTypes.SET_CARD_PAGE:
      return { ...state, page: action.payload };
    case CardActionTypes.SET_CARD_LIMIT:
      return { ...state, limit: action.payload };
    default:
      return state;
  }
}
