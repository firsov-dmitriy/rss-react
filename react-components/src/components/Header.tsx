import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
interface HeaderProps {
  name?: string;
}
interface HeaderState {
  value: string;
}

class Header extends Component<HeaderProps, HeaderState> {
  private setInput: React.RefObject<HTMLInputElement>;
  constructor(props: HeaderProps) {
    super(props);

    this.setInput = React.createRef();
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.getValue = this.getValue.bind(this);
  }
  state = {
    value: '',
  };

  getValue(eve: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: eve.target.value });
  }
  componentWillUnmount() {
    localStorage.setItem('searchText', this.state.value);
  }
  handlerSubmit(eve: React.FormEvent<HTMLFormElement>) {
    eve.preventDefault();
    console.log('State', +this.state.value);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={'/'}>
            MainPage
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={'about'}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'nonpage'}>
                  NonPage
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" onSubmit={(eve) => this.handlerSubmit(eve)}>
              <input
                data-testid="PostContent"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(eve) => this.getValue(eve)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
