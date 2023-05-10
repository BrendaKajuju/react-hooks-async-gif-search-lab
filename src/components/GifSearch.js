import React, { useState } from 'react'

const GifSearch = ({ handleSearch }) => {
  const [query, setQuery] = useState ("");

  const handleQuery = (event) => {
    event.preventDefault();
    handleSearch(query)
  };
  return (
      <form onSubmit={handleQuery}>
        <input type='text' value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button type='submit'>Search Gifs</button>
      </form>
        )
}

export default GifSearch