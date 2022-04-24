import React, { FC, useEffect, useState } from 'react';
import serviceMorty from '../service/service';
import CardList from './CardList/CardList';
import Modal from './Modal/Modal';
import { dataChatacters } from './types';

interface MainPageProps {
  valueSerch: string;
  submit: boolean;
}

const MainPage: FC<MainPageProps> = ({ valueSerch, submit }) => {
  const [data, setData] = useState<dataChatacters[]>([]);
  const [modalTriger, setModalTriger] = useState<boolean>(false);
  const [idChar, setIdChar] = useState<number | null | string>(0);
  const [char, setChar] = useState<dataChatacters>();
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
  const getCharacter = (valueSerch: string) => {
    submit && api.getCharacter(valueSerch).then((data) => setData(data.results));
  };

  useEffect(() => {
    api
      .getDataCharacters(`https://rickandmortyapi.com/api/character`)
      .then((data) => setData(data.results));
  }, []);
  useEffect(() => {
    getCharacter(valueSerch);
  }, [submit]);
  console.log(data, idChar);

  return (
    <>
      <CardList
        getIdCard={getIdCard}
        onShowModalCard={(eve) => onShowModalCard(eve)}
        data={data}
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
    </>
  );
};

export default MainPage;
