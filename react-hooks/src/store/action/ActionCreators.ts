import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { dataFetch } from '../../types/types';

import { AppDispatch } from '../store';
import { cardSlice } from '../reducers/CardSlice';
export const fetchUsers =
  (page = 1, name = '', status = '') =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(cardSlice.actions.cardFetching());
      const response = await axios.get<dataFetch>(
        `https://rickandmortyapi.com/api/character/?${name !== '' ? 'name=' + name : ''}${
          status !== '' ? '&status=' + status : ''
        }`,
        {
          params: { page: page },
        }
      );

      dispatch(cardSlice.actions.setLimit(response.data.info.pages));
      dispatch(cardSlice.actions.cardFetchingSuccess(response.data.results));
    } catch (e) {
      dispatch(cardSlice.actions.cardFetchingError('Error fetching data'));
    }
  };

export const fetchCard = createAsyncThunk('user/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<dataFetch>(`https://rickandmortyapi.com/api/character`);
    return response.data.results;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
