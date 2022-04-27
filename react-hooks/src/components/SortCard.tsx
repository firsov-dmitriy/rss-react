import React, { Dispatch, FC, useReducer } from 'react';
import { initialCardState } from '../service/reducers/cardReducer';
import reducer, { ActionType, ActionTypes, initialState } from '../service/reducers/reducer';
interface SortCardProps {
  dispatchStatus: Dispatch<ActionType>;
}
const SortCard: FC<SortCardProps> = ({ dispatchStatus }) => {
  const getStatus = (eve: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => {
    dispatchStatus({ type: ActionTypes.SET_STATUS, payload: eve.currentTarget.innerText });
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
