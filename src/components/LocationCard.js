import React from 'react'
export default function LocationCard (props) {
  // image={image}

  let liView = {
  marginLeft: '10px' 
};

  return (<span>
       
    <div style={{width: '400px',marginLeft: '20px',marginTop: '0',border: 'thin solid grey',borderRadius: '10px'}}>
    <h2 style={{marginLeft: '10px'}}> {props.name}</h2>
    <li style={liView} >Created: {props.created}</li>
    <li style={liView}>Dimension: {props.dimension}</li>
    <li style={liView}>Type: {props.type}</li>
    <li style={liView}>Residents: {props.residents}</li>
    </div>
    </span>
    )
}
