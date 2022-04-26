import React, { createContext } from 'react';
import { initialState } from './reducers/reducer';

export const Context = createContext(initialState);
