import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { dataChatacters } from '../../types/types';
import { fetchCard } from '../action/ActionCreators';

interface CardState {
  card: dataChatacters[];
  pages: number;
  error: null | string;
  limits: number;
  loading: boolean;
}
const initialState: CardState = {
  card: [],
  pages: 1,
  error: null,
  limits: 10,
  loading: false,
};
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    cardFetching(state) {
      state.loading = true;
    },
    cardFetchingSuccess(state, action: PayloadAction<dataChatacters[]>) {
      state.loading = false;
      state.error = '';
      state.card = action.payload;
    },
    cardFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limits = action.payload;
    },
    changePage(state, action: PayloadAction<number>) {
      state.pages = action.payload;
    },
  },
  extraReducers: {
    [fetchCard.fulfilled.type]: (state, action: PayloadAction<dataChatacters[]>) => {
      state.loading = false;
      state.error = '';
      state.card = action.payload;
    },
    [fetchCard.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchCard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default cardSlice.reducer;
