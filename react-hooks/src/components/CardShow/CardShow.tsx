import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ContextCard } from '../../service/context';
import './cardShow.css';

const CardShow = () => {
  const { card } = useContext(ContextCard);
  const { id } = useParams();

  return (
    <>
      {card.map((el, idCard) => {
        if (parseInt('' + id) == idCard) {
          return (
            <div key={id} className="card">
              <div className="card-container">
                <div className="card-image">
                  <img src={el.image} alt={el.name} />
                </div>

                <div className="card-title">
                  <h2 className="card-title__name">{el.name}</h2>
                </div>
                <div className="info">
                  <p>Gender: {el.gender}</p>
                  <p>Status: {el.status}</p>
                  <p>Type: {el.type}</p>
                  <p>Species: {el.species}</p>
                  <p>location: {el.location?.name}</p>
                  <p>Origin: {el.origin?.name}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default CardShow;
