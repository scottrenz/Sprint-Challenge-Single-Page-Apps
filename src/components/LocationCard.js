import React from 'react'

export default function LocationCard (props) {
  // image={image}
  return (<span>
       
    <div style={{display:'flex;'}}><h2> {props.name}</h2>
    <li>Created: {props.created}</li>
    <li>Dimension: {props.dimension}</li>
    <li>Type: {props.type}</li>

    <li></li>
    </div>
    </span>
    )
}
