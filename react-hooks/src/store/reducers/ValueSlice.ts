import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { personType } from '../../types/types';
interface ValueType {
  search: string;
  person: personType[];
  status: string;
  param: {
    id: number | null;
  };
  back: boolean;
}
export const initialState: ValueType = {
  search: '',
  person: [],
  status: '',
  param: {
    id: null,
  },
  back: false,
};

export const valueSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setParam(state, action: PayloadAction<number>) {
      state.param.id = action.payload;
    },
    setBack(state, action: PayloadAction<boolean>) {
      state.back = action.payload;
    },
  },
});
export default valueSlice.reducer;
