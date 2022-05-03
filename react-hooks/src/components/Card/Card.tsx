import React, { Component, FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { Context } from '../../service/context';
import { ActionTypes } from '../../service/reducers/reducer';
import { valueSlice } from '../../store/reducers/ValueSlice';
import { dataChatacters } from '../../types/types';
import './card.css';
interface CardProps extends dataChatacters {
  dataId: number;
  // onShowModalCard: (eve: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  getIdCard: (eve: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

interface CardState {
  cardLike: number;
}

const Card: FC<CardProps> = ({ getIdCard, dataId, image, name, status }) => {
  const [cardLike, setCardLike] = useState(0);
  const dispatch = useAppDispatch();
  const openCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <div
      data-id={dataId}
      className="card mt-3"
      onClick={(e) => {
        openCard(e);
      }}
    >
      <div
      // onClick={($event) => {
      //   this.props.onShowModalCard($event);
      // }}
      >
        <Link to={`/card/${dataId}`}>
          <img
            src={image}
            className="card-img-top"
            onClick={() => {
              dispatch(valueSlice.actions.setBack(true));
            }}
          />
        </Link>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{status}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"></li>
          <li className="list-group-item">Дата публикации</li>
        </ul>
      </div>
      <div className="card-doby"></div>

      <div
        style={{ width: '75%' }}
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn  "
          onClick={() => {
            setCardLike(cardLike + 1);
          }}
        >
          <span>
            <img
              src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-like-notifications-justicon-lineal-color-justicon.png"
              alt="like"
              style={{ width: '30px' }}
            />
          </span>
        </button>
        <button
          type="button"
          className="btn "
          onClick={() => {
            setCardLike(cardLike - 1);
          }}
        >
          <span>
            <img
              src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-dislike-feedback-those-icons-lineal-color-those-icons.png"
              alt="dislike"
              style={{ width: '30px' }}
            />
          </span>
        </button>
      </div>
      <h4 className="card-like  "> Like: {cardLike}</h4>
    </div>
  );
};

export default Card;
