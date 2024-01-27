import React from 'react';

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className='search-bar'>
      <input 
        className='search-bar'
        type='text'
        placeholder='Cari berdasarkan judul'
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar;