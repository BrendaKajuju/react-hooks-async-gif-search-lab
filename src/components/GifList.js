import React from 'react'

const GifList = ({ gifs }) => {
  return (
    <ol>
      {gifs.map((gif) => (
        <li key = {gif.id}>
          {/* obtain images url from nested objects  */}
          < img src={gif.images.original.url} alt='Gif says hello' />
        </li>
      ))}
    </ol>
  )
}

export default GifList