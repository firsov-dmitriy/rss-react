import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import ExistenPage from './components/ExistenPage';
import Header from './components/Header';
import MainPage from './components/MainPage';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/notpages" element={<ExistenPage />} />
          <Route path="*" element={<ExistenPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
