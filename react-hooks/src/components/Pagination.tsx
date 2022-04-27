import React, { useState } from 'react';

const Pagination = () => {
  const [page, setPage] = useState([1, 2, 3]);
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul onClick={(eve) => console.log(eve.preventDefault(), eve.target)} className="pagination">
          <li className="page-item prev-10">
            <a className="page-link" href="">
              <span>&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="">
              {page[0]}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="">
              {page[1]}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="">
              {page[2]}
            </a>
          </li>
          <li className="page-item next-10">
            <a className="page-link " href="">
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
