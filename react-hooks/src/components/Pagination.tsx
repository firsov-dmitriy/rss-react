import React, { useContext } from 'react';
import { ContextCard } from '../service/context';

import { CardActionTypes } from '../types/card';

const Pagination = () => {
  const { page, limit, dispatchCard } = useContext(ContextCard);
  const chageName = (eve: React.MouseEvent<HTMLAnchorElement, MouseEvent>, num: number) => {
    eve.preventDefault();

    if (dispatchCard) {
      dispatchCard({ type: CardActionTypes.SET_CARD_PAGE, payload: +num });
    }
  };
  console.log(page);
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item prev-10">
            <a
              className="page-link prev-5"
              onClick={(eve) => chageName(eve, page > 5 ? page - 5 : 1)}
              href=""
            >
              <span>&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              onClick={(eve) => chageName(eve, page <= 1 ? 1 : page - 1)}
              href=""
            >
              {page <= 1 ? 1 : page - 1}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={(eve) => chageName(eve, page)} href="">
              {page}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={(eve) => chageName(eve, page + 1)} href="">
              {page + 1}
            </a>
          </li>
          <li className="page-item ">
            <a
              className="page-link next-5 "
              onClick={(eve) => chageName(eve, page + 5 > limit ? limit : page + 5)}
              href=""
            >
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
