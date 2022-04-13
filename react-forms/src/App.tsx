import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ExistenPage from './components/ExistenPage';
import Form from './components/Form';
import Header from './components/Header';
import MainPage from './components/MainPage';

interface AppState {
  value: string;
}
class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      value: '',
    };
    this.getValue = this.getValue.bind(this);
  }
  getValue(text: string) {
    this.setState({
      value: text,
    });
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Header getValue={this.getValue} />

          <Routes>
            <Route path="/" element={<MainPage valueSerch={this.state.value} />} />
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
