import React from 'react'
let count = 0;
export default function LocationsCard (props) {
  // image={image}

  return (<span>
       
    <div style={{display:'flex;'}}>
      <h3 style={{marginLeft: '20px'}}> {props.name}</h3>
    <li>Created: {props.created}</li>
    <li>Dimension: {props.dimension}</li>
    <li>Type: {props.type}</li>
    </div>
    </span>
    )
}
