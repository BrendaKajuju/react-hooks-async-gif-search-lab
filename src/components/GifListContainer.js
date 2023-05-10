import React, { useState } from 'react'
import GifSearch from './GifSearch';
import GifList from './GifList';

const GifListContainer = () => {
    const [gifs, setGifs] = useState([]);

    const handleSearch = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=8MWdd55hPlBMpml0HakvKaRM50v9yA2t&q=${query}&rating=g&lang=en`)
        .then((resp) => resp.json())
        .then((searchdata) => {
            const gifData = searchdata.searchdata.slice(0, 3)
            setGifs(gifData)
        })
        .catch((error) => {
            console.log("We have encountered error fetching the data as follows:", error)
        })
    }
  return (
    <div className='container'>
        <GifSearch onsearch={handleSearch} />
        <GifList gifs={gifs} />

    </div>
  )
}

export default GifListContainer