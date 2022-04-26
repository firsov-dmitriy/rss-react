import React, { FC, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ExistenPage from './components/ExistenPage';

import Header from './components/Header';
import MainPage from './components/MainPage';
import './app.css';
import FormNow from './components/Form';
import { Context } from './service/context';

const App: FC = () => {
  const [valueSerch, setValueSerch] = useState('');
  const [submit, setSubmit] = useState(false);

  const getValue = (text: string) => {
    setValueSerch(text);
    setSubmit(false);
  };
  const onSubmit = (eve: React.FormEvent<HTMLFormElement>) => {
    eve.preventDefault();
    setSubmit(true);
  };
  const showBurgerMenu = (eve: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const coll = document.querySelector('.collapse');
    coll?.classList.add('show');
    document.querySelector('.navbar-toggler')?.addEventListener('click', (eve) => {
      coll?.classList.remove('show');
    });
  };

  return (
    <Router>
      <Context.Provider value={{ value: valueSerch, person: {} }}>
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
      </Context.Provider>
    </Router>
  );
};

export default App;
