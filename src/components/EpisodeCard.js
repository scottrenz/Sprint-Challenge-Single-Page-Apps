import React from 'react'
let count = 0;
export default function EpisodeCard (props) {
  // image={image}

  return (<span>
       
    <div style={{width: '400px',marginLeft: '20px',marginTop: '0',border: 'thin solid grey',borderRadius: '10px'}}>
    <h2> {props.name}</h2>
    <li>Air Date: {props.air_date}</li>
    <li>Episode: {props.episode}</li>
    </div>
    </span>
    )
}
