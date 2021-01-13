import React from 'react';

import './SearchBox.scss';

const SearchBox = ({ handleChange }) => {

  return (
    <form className='input-container'>
      <input
        className='input'
        type='search'
        placeholder='Search profiles'
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchBox;