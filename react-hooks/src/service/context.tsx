import React, { createContext } from 'react';
import { initialCardState } from './reducers/cardReducer';
import { initialState } from './reducers/reducer';

export const Context = createContext(initialState);
export const ContextCard = createContext(initialCardState);
