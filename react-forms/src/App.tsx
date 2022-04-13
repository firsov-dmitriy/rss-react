import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ExistenPage from './components/ExistenPage';
import Form from './components/Form';
import Header from './components/Header';
import MainPage from './components/MainPage';

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
          <Header getValue={this.getValue} onSubmit={this.onSubmit} />

          <Routes>
            <Route
              path="/"
              element={<MainPage submit={this.state.submit} valueSerch={this.state.value} />}
            />
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
