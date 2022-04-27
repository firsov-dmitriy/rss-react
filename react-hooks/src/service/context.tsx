import React, { createContext } from 'react';
import { initialState, ValueType } from './reducers/reducer';

export const Context = createContext(initialState);
