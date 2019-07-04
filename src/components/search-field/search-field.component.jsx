import React from 'react';
import './search-field.styles.css';

export const SearchField = ( {placeholder, handleChange} ) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}