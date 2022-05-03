import React, { FC, useContext, useEffect, useReducer, useState } from 'react';
import { Context, ContextCard } from '../service/context';

import CardList from './CardList/CardList';

import { dataChatacters } from '../types/types';

import SortCard from './SortCard';
import Pagination from './Pagination';
import { ActionTypes } from '../service/reducers/reducer';
import { useAppSelector } from '../hooks/redux';

interface MainPageProps {
  submit: boolean;
}

const MainPage: FC<MainPageProps> = ({ submit }) => {
  const [idChar, setIdChar] = useState<number | null | string>(0);
  const { valueSerch, status, dispatch } = useContext(Context);
  const { card, loading } = useAppSelector((state) => state.cardReducer);
  const [char, setChar] = useState<dataChatacters>();

  const getIdCard = (eve: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const num = parseInt(eve.currentTarget.getAttribute('data-id') + '');
    setChar(card[num]);
    setIdChar(num);
    if (dispatch) {
      dispatch({ type: ActionTypes.SET_PARAM_ID, payload: num });
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center ">
        <div className="spinner-border " style={{ width: '200px', height: '200px' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <SortCard />
      <CardList getIdCard={getIdCard} data={card} valueSerch={valueSerch} />
      <Pagination />
    </>
  );
};

export default MainPage;
