import React from 'react'
import styled from 'styled-components'

let count = 0;
export default function LocationCard (props) {
  // image={image}

  let liView = {
  marginLeft: '10px' 
};
  let resid = ({residents: props.residents});

  let resno = 0
  const res =  Array.from(resid).map((star,ix,arr) => {
resno = resno +1
})

  return (<span>
       
    <div style={{width: '400px',marginLeft: '20px',marginTop: '0',border: 'thin solid grey',borderRadius: '10px'}}>
    <h2 style={{marginLeft: '10px'}}> {props.name}</h2>
    <li style={liView} >Created: {props.created}</li>
    <li style={liView}>Dimension: {props.dimension}</li>
    <li style={liView}>Type: {props.type}</li>
    </div>
    </span>
    )
}
