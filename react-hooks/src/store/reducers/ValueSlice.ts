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
export const initialValueState: ValueType = {
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
  initialState: initialValueState,
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
    setPerson(state, action: PayloadAction<personType>) {
      return { ...state, person: [...state.person, action.payload] };
    },
  },
});
export default valueSlice.reducer;
