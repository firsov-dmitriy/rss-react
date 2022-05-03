import React, { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { valueSlice } from '../../store/reducers/ValueSlice';
import SearchBar from '../SearchBar';
import './header.css';
interface HeaderProps {
  getValue: (value: string) => void;
  onSubmit: (submit: React.FormEvent<HTMLFormElement>) => void;
  showBurgerMenu: (eve: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Header: FC<HeaderProps> = ({ getValue, onSubmit, showBurgerMenu }) => {
  const navigate = useNavigate();
  const goBackLink = () => navigate(-1);
  const dispatch = useAppDispatch();
  const { back } = useAppSelector((state) => state.valueSlice);
  const goBack = (eve: React.MouseEvent) => {
    eve.preventDefault();
    dispatch(valueSlice.actions.setBack(false));
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light `}>
      <div className="container-fluid">
        <NavLink
          onClick={(eve) => {
            goBack(eve);
          }}
          className="navbar-brand"
          to={'/'}
        >
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
            <ul
              onClick={(eve) => {
                goBack(eve);
              }}
              className=" navbar-nav me-auto mb-2 mb-lg-0"
            >
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

      {back && (
        <button
          style={{ width: '100px' }}
          type="button"
          onClick={(eve) => {
            goBack(eve);
            goBackLink();
          }}
          className="btn btn-success"
        >
          Go Back
        </button>
      )}
    </nav>
  );
};

export default Header;
