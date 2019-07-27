import React from 'react'

export default function LocationsCard (props) {
  // image={image}

  return (<span>
       
    <div>
      <h3 style={{marginLeft: '20px'}}> {props.name}</h3>
    <li>Created: {props.created}</li>
    <li>Dimension: {props.dimension}</li>
    <li>Type: {props.type}</li>
    <li>Residents: {props.residents}</li>
    </div>
    </span>
    )
}
