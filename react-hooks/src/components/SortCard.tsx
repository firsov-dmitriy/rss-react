import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

import { valueSlice } from '../store/reducers/ValueSlice';

const SortCard: FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.valueSlice.status);
  const getStatus = (eve: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => {
    eve.preventDefault();
    dispatch(valueSlice.actions.setStatus(eve.currentTarget.innerText));
  };

  return (
    <div className=" d-flex justify-content-center">
      <h3>Please choose status: </h3>
      <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
        <button type="button" onClick={(eve) => getStatus(eve)} className="btn btn-success">
          Alive
        </button>
        <button type="button" onClick={(eve) => getStatus(eve)} className="btn btn-dark">
          Dead
        </button>
        <button type="button" onClick={(eve) => getStatus(eve)} className="btn btn-primary">
          Unknown
        </button>
      </div>
    </div>
  );
};

export default SortCard;
