import React, { Dispatch, FC, useReducer } from 'react';
import { initialCardState } from '../service/reducers/cardReducer';
import reducer, { ActionType, ActionTypes, initialState } from '../service/reducers/reducer';

const SortCard: FC = () => {
  const [status, dispatch] = useReducer(reducer, initialState);
  const getStatus = (eve: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => {
    dispatch({ type: ActionTypes.SET_STATUS, payload: eve.currentTarget.innerText });
  };
  console.log(status);

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      Status
      <button type="button" onClick={(eve) => getStatus(eve)} className="btn btn-primary">
        Alive
      </button>
      <button type="button" onClick={(eve) => getStatus(eve)} className="btn btn-primary">
        Dead
      </button>
      <button type="button" onClick={(eve) => getStatus(eve)} className="btn btn-primary">
        Unknown
      </button>
    </div>
  );
};

export default SortCard;
