import React from 'react';

import './Pagination.scss'

const Pagination = ({ profilesPerPage, totalProfiles, paginate, activeLink }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className='page-list u-margin-bottom-large'>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <a className={activeLink === number ? 'current-link' : undefined} onClick={() => { paginate(number); }} href='!#'>
            {number}
          </a>
        </li>
      ))}
    </ul>
  )
};

export default Pagination;