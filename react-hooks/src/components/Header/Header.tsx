import React, { Component, FC } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar';
import './header.css';
interface HeaderProps {
  getValue: (value: string) => void;
  onSubmit: (submit: React.FormEvent<HTMLFormElement>) => void;
  showBurgerMenu: (eve: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Header: FC<HeaderProps> = ({ getValue, onSubmit, showBurgerMenu }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
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
          onClick={(eve) => showBurgerMenu(eve)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <nav className="navbar navbar-light bg-light">
            <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to={'about'}>
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
            <SearchBar getValue={getValue} onSubmit={onSubmit} />
          </nav>
        </div>
      </div>

      <button
        style={{ width: '100px' }}
        type="button"
        onClick={(eve) => goBack()}
        className="btn btn-success"
      >
        Go Back
      </button>
    </nav>
  );
};

export default Header;
