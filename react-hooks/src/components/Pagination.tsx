import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';

import { cardSlice } from '../store/reducers/CardSlice';

const Pagination = () => {
  const { pages, limits } = useAppSelector((state) => state.cardReducer);
  const { changePage } = cardSlice.actions;
  const dispatch = useAppDispatch();
  const setPage = (eve: React.MouseEvent, num: number) => {
    eve.preventDefault();
    dispatch(changePage(num));
  };

  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item prev-10">
            <a
              className="page-link prev-5"
              onClick={(eve) => {
                setPage(eve, pages > 5 ? pages - 5 : 1);
              }}
              href=""
            >
              <span>&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              onClick={(eve) => setPage(eve, pages <= 1 ? 1 : pages - 1)}
              href=""
            >
              {pages <= 1 ? 1 : pages - 1}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={(eve) => setPage(eve, pages)} href="">
              {pages}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={(eve) => setPage(eve, pages + 1)} href="">
              {pages + 1}
            </a>
          </li>
          <li className="page-item ">
            <a
              className="page-link next-5 "
              onClick={(eve) => {
                eve.preventDefault();

                setPage(eve, pages + 5 > limits ? limits : pages + 5);
              }}
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
