import React from 'react'
let count = 0;
export default function EpisodeCard (props) {
  // image={image}
  let liView = {
    marginLeft: '10px' 
  };
  
  return (<span>
       
    <div style={{width: '400px',marginLeft: '20px',marginTop: '0',border: 'thin solid grey',borderRadius: '10px'}}>
    <h2 style={liView} > {props.name}</h2>
    <li style={liView} >Air Date: {props.air_date}</li>
    <li style={liView} >Episode: {props.episode}</li>
    </div>
    </span>
    )
}
