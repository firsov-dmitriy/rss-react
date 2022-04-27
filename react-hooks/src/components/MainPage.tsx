import React, { FC, useContext, useEffect, useReducer, useState } from 'react';
import { Context } from '../service/context';
import reducer, { ActionTypes, initialState, ValueType } from '../service/reducers/reducer';
import serviceMorty from '../service/service';
import CardList from './CardList/CardList';
import Modal from './Modal/Modal';
import { dataChatacters } from '../types/types';
import cardReducer, { initialCardState } from '../service/reducers/cardReducer';
import { CardActionTypes } from '../types/card';
import SortCard from './SortCard';
import Pagination from './Pagination';

interface MainPageProps {
  submit: boolean;
}

const MainPage: FC<MainPageProps> = ({ submit }) => {
  const [data, setData] = useState<dataChatacters[]>([]);
  const [modalTriger, setModalTriger] = useState<boolean>(false);
  const [idChar, setIdChar] = useState<number | null | string>(0);

  const [char, setChar] = useState<dataChatacters>();
  const { valueSerch, status } = useContext(Context);
  const [{ card, loading }, dispatch] = useReducer(cardReducer, initialCardState);

  const api = new serviceMorty();
  const onShowModalCard = (eve: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    document.body.style.marginRight = '17px';
    document.body.style.overflow = 'hidden';
    setModalTriger(true);
    modalTriger;
  };
  const getIdCard = (eve: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const num = parseInt(eve.currentTarget.getAttribute('data-id') + '');
    setChar(data[num]);
    setIdChar(num);
  };
  const getCloseEvent = () => {
    document.body.style.marginRight = '';
    document.body.style.overflow = '';
    setModalTriger(false);
  };

  useEffect(() => {
    api.getCard(1, 10, valueSerch, status)(dispatch);
  }, [valueSerch, status]);

  if (loading) {
    return <h1>...Load</h1>;
  }

  console.log(status);

  return (
    <>
      <SortCard />
      <CardList
        getIdCard={getIdCard}
        onShowModalCard={(eve) => onShowModalCard(eve)}
        data={card}
        valueSerch={valueSerch}
      />

      {modalTriger && (
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
      )}
      <Pagination />
    </>
  );
};

export default MainPage;
