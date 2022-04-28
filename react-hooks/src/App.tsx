import React, { FC, useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ExistenPage from './components/ExistenPage';

import Header from './components/Header';
import MainPage from './components/MainPage';
import './app.css';
import FormNow from './components/Form';
import { Context, ContextCard } from './service/context';
import reducer, { ActionTypes, initialState } from './service/reducers/reducer';
import cardReducer, { initialCardState } from './service/reducers/cardReducer';
import serviceMorty from './service/service';
import { CardActionTypes } from './types/card';

const App: FC = () => {
  const [CardState, dispatchCard] = useReducer(cardReducer, initialCardState);
  const [submit, setSubmit] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const api = new serviceMorty();
  const getValue = (text: string) => {
    dispatch({ type: ActionTypes.SET_VALUE, payload: text });
    setSubmit(false);
  };
  const onSubmit = (eve: React.FormEvent<HTMLFormElement>) => {
    eve.preventDefault();
    setSubmit(true);
  };
  useEffect(() => {
    api.getCard(1, 10, state.valueSerch, state.status)(dispatchCard);
    dispatchCard({ type: CardActionTypes.SET_CARD_PAGE, payload: 1 });
    dispatch({ type: ActionTypes.SET_STATUS, payload: '' });
  }, [submit]);
  useEffect(() => {
    api.getCard(CardState.page, 10, state.valueSerch, state.status)(dispatchCard);
  }, [CardState.page]);
  useEffect(() => {
    api.getCard(1, 10, state.valueSerch, state.status)(dispatchCard);
    dispatchCard({ type: CardActionTypes.SET_CARD_PAGE, payload: 1 });
  }, [state.status]);
  const showBurgerMenu = (eve: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const coll = document.querySelector('.collapse');
    coll?.classList.add('show');
    document.querySelector('.navbar-toggler')?.addEventListener('click', (eve) => {
      coll?.classList.remove('show');
    });
  };
  console.log(CardState);

  return (
    <Router>
      <Context.Provider value={{ ...state, dispatch }}>
        <ContextCard.Provider value={{ ...CardState, dispatchCard }}>
          <div className="container">
            <Header getValue={getValue} onSubmit={onSubmit} showBurgerMenu={showBurgerMenu} />

            <Routes>
              <Route path="/" element={<MainPage submit={submit} />} />
              <Route path="/about" element={<About />} />
              <Route path="/nonpages" element={<ExistenPage />} />
              <Route path="*" element={<ExistenPage />} />
              <Route path="/form" element={<FormNow />} />
            </Routes>
          </div>
        </ContextCard.Provider>
      </Context.Provider>
    </Router>
  );
};

export default App;
