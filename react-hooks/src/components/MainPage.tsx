import React, { FC, useContext, useEffect, useReducer, useState } from 'react';
import { Context, ContextCard } from '../service/context';

import serviceMorty from '../service/service';
import CardList from './CardList/CardList';

import { dataChatacters } from '../types/types';

import SortCard from './SortCard';
import Pagination from './Pagination';
import reducer, { ActionTypes, initialState } from '../service/reducers/reducer';

interface MainPageProps {
  submit: boolean;
}

const MainPage: FC<MainPageProps> = ({ submit }) => {
  const [idChar, setIdChar] = useState<number | null | string>(0);
  const { valueSerch, status, dispatch } = useContext(Context);
  const { card, loading, dispatchCard } = useContext(ContextCard);

  const [char, setChar] = useState<dataChatacters>();

  // const onShowModalCard = (eve: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   // document.body.style.marginRight = '17px';
  //   // document.body.style.overflow = 'hidden';
  //   setModalTriger(true);
  //   modalTriger;
  // };

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

      {/* {modalTriger && (
        <Modal
          name={char!.name}
          status={char!.status}
          image={char!.image}
          gender={char?.gender}
          species={char!.species}
          location={char!.location}
          episode={char?.episode}
          origin={char?.origin}
          type={char?.type}
          modalTriger={modalTriger}
          getCloseEvent={getCloseEvent}
          onShow={modalTriger}
        />
      )} */}
      {/* <NavLink to={'/card'} children={<CardPage />} /> */}
      <Pagination />
    </>
  );
};

export default MainPage;
