import React from 'react'
let count = 0;
export default function EpisodeCard (props) {
  // image={image}

  return (<span>
       
    <div style={{display:'flex;'}}><h2> {props.name}</h2>
    <li>Air Date: {props.air_date}</li>
    <li>Episode: {props.episode}</li>

    <li></li>
    </div>
    </span>
    )
}
