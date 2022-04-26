import React, { createContext } from 'react';
import { initialState } from './reducer';

export const Context = createContext(initialState);
