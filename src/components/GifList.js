import React from 'react'

const GifList = () => {
  return (
    <ul>
      {gifs.map((gif) => (
        <li key = {gif.id}>
          {/* obtain images url from nested objects  */}
          < img src={gif.images.original.url} alt='Gif says hello' />
        </li>
      ))}
    </ul>
  )
}

export default GifList