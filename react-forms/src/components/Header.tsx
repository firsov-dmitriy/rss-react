import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
interface HeaderProps {
  getValue: (value: string) => void;
}
interface HeaderState {
  value: string;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
  }
  state = {
    value: '',
  };

  render() {
    console.log(this.state.value);

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
              <li className="nav-item">
                <NavLink className="nav-link" to={'form'}>
                  Form
                </NavLink>
              </li>
            </ul>
            <SearchBar getValue={this.props.getValue} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
