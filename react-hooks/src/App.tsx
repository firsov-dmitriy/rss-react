import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ExistenPage from './components/ExistenPage';
// import Form from './components/Form';
import Header from './components/Header';
import MainPage from './components/MainPage';
import './app.css';
import FormNow from './components/Form';

interface AppState {
  value: string;
  submit: boolean;
}
class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      value: '',
      submit: false,
    };
    this.getValue = this.getValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  getValue(text: string) {
    this.setState({
      value: text,
      submit: false,
    });
  }

  onSubmit(eve: React.FormEvent<HTMLFormElement>) {
    eve.preventDefault();
    this.setState({
      submit: true,
    });
  }
  showBurgerMenu(eve: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const coll = document.querySelector('.collapse');
    coll?.classList.add('show');
    document.querySelector('.navbar-toggler')?.addEventListener('click', (eve) => {
      coll?.classList.remove('show');
    });
  }
  componentWillUnmount() {
    this.setState({
      submit: false,
    });
  }
  render() {
    console.log(this.state);

    return (
      <Router>
        <div className="container">
          <Header
            getValue={this.getValue}
            onSubmit={this.onSubmit}
            showBurgerMenu={this.showBurgerMenu}
          />

          <Routes>
            <Route
              path="/"
              element={<MainPage submit={this.state.submit} valueSerch={this.state.value} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/nonpages" element={<ExistenPage />} />
            <Route path="*" element={<ExistenPage />} />
            <Route path="/form" element={<FormNow />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
