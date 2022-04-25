import React from 'react'

//38:00
const shortenTitle = (title) => {
  if (title.length > 32) {
    return title.substring(0, 32) + '...'
  }
  return title
}

function AlbumInfo({tracks}) {

  console.log(tracks);

  return <div className='albumInfo'>
    <div className="albumTitle-container">
      <div className="marquee"><p>{tracks? tracks[0].title : "Unknown" }</p></div>
    </div>
    <div className="albumDetail">
    <p>{tracks? shortenTitle(tracks[0].author.name) : "Unknown" }</p>
    </div>
    <div className="albumRelease">
      <p>Duration: {tracks? shortenTitle(tracks[0].duration.timestamp) : "Unknown" }</p>
    </div>
  </div>
  
}

export default AlbumInfo