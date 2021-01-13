import React, { useState } from 'react';

import './Filter.scss';

const Filter = ({ options, label, profiles, handleSelect }) => {

  const [selectedValue, setSelectedValue] = useState('filter');

  const applyFilter = (e) => {
    setSelectedValue(e.target.value)
    const filtered = profiles.filter(profiles => profiles[label] === e.target.value);
    handleSelect(filtered);
  }

  const splitPascalCase = (str) => str.replace(/([a-z\d])([A-Z])/g, '$1 $2').trim();
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <select
      value={selectedValue}
      onChange={applyFilter}
      className='filter'
    >
      <option value="filter" disabled>Filter by {splitPascalCase(label)}...</option>
      {options.map((option, index) =>
        <option key={index} value={option}>{capitalizeFirstLetter(option)}</option>
      )}
    </select>
  )
}

export default Filter;