import valueSlice from './reducers/ValueSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardReducer from './reducers/CardSlice';

const rootReducer = combineReducers({
  cardReducer,
  valueSlice,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
