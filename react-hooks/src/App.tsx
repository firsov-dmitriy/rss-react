import React, { FC, useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ExistenPage from './components/ExistenPage';
import MainPage from './components/MainPage';
import './app.css';
import FormNow from './components/Form';
import CardShow from './components/CardShow/CardShow';
import Layout from './components/Layout';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchCard, fetchUsers } from './store/action/ActionCreators';
import { valueSlice } from './store/reducers/ValueSlice';
import { cardSlice } from './store/reducers/CardSlice';

const App: FC = () => {
  const [submit, setSubmit] = useState(false);
  const dispatch = useAppDispatch();
  const { pages } = useAppSelector((state) => state.cardReducer);
  const { search, status } = useAppSelector((state) => state.valueSlice);
  const getValue = (text: string) => {
    dispatch(valueSlice.actions.setSearch(text));
    setSubmit(false);
  };
  const onSubmit = (eve: React.FormEvent<HTMLFormElement>) => {
    eve.preventDefault();
    setSubmit(true);
  };
  useEffect(() => {
    dispatch(fetchCard());
  }, []);
  useEffect(() => {
    dispatch(fetchUsers(1, search, status));
  }, [submit]);

  useEffect(() => {
    dispatch(fetchUsers(pages, search, status));
  }, [pages]);
  useEffect(() => {
    if (!search) {
      dispatch(fetchUsers(1, ' ', status));
      dispatch(cardSlice.actions.changePage(1));
    } else {
      dispatch(fetchUsers(1, search, status));
      dispatch(cardSlice.actions.changePage(1));
    }
  }, [status]);

  const showBurgerMenu = (eve: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const coll = document.querySelector('.collapse');
    coll?.classList.add('show');
    document.querySelector('.navbar-toggler')?.addEventListener('click', (eve) => {
      coll?.classList.remove('show');
    });
  };
  console.log();

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Layout onSubmit={onSubmit} getValue={getValue} showBurgerMenu={showBurgerMenu} />
            }
          >
            <Route index element={<MainPage submit={submit} />} />
            <Route path="/card/:id" element={<CardShow />} />
            <Route path="/about" element={<About />} />
            <Route path="/nonpages" element={<ExistenPage />} />
            <Route path="*" element={<ExistenPage />} />
            <Route path="/form" element={<FormNow />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
