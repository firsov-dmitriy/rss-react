import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ExistenPage from './components/ExistenPage';
import Form from './components/Form';
import Header from './components/Header';
import MainPage from './components/MainPage';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/nonpages" element={<ExistenPage />} />
            <Route path="*" element={<ExistenPage />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
